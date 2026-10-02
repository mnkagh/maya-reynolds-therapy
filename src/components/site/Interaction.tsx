"use client";

import { useEffect } from "react";

/**
 * One script for every pointer-driven effect on the page.
 *
 * Nothing here lives in React state: the handlers write CSS custom
 * properties straight onto the DOM nodes, so moving the pointer never
 * triggers a re-render. Everything degrades to a static, readable page
 * when the visitor is on a coarse pointer or has asked for reduced motion.
 */

const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);

export function Interaction() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const root = document.documentElement;

    /* ---------------------------------------------------------------- *
     * Reading progress
     * ---------------------------------------------------------------- */
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const value = max > 0 ? clamp(window.scrollY / max, 0, 1) : 0;
        root.style.setProperty("--scroll-progress", value.toFixed(4));
        root.dispatchEvent(new CustomEvent("maya:scroll", { detail: value }));
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    /* ---------------------------------------------------------------- *
     * Reveal on scroll
     * ---------------------------------------------------------------- */
    const revealTargets = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (reduced || !("IntersectionObserver" in window)) {
      revealTargets.forEach((el) => el.classList.add("is-in"));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-in");
            revealObserver.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
      );
      revealTargets.forEach((el) => revealObserver.observe(el));
    }

    /* ---------------------------------------------------------------- *
     * Parallax: [data-parallax] elements drift by a share of scroll
     * ---------------------------------------------------------------- */
    const parallaxTargets = Array.from(
      root.querySelectorAll<HTMLElement>("[data-parallax]"),
    );

    const onParallax = () => {
      const vh = window.innerHeight || 1;
      parallaxTargets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) return;
        const centre = rect.top + rect.height / 2;
        const offset = (centre - vh / 2) / vh;
        const amount = Number(el.dataset.parallax ?? "40");
        el.style.setProperty("--parallax-y", `${(-offset * amount).toFixed(2)}px`);
      });
    };

    /* ---------------------------------------------------------------- *
     * Pointer: tilt, glare, magnetic buttons, custom cursor
     * ---------------------------------------------------------------- */
    const tilts = Array.from(root.querySelectorAll<HTMLElement>("[data-tilt]"));
    const magnets = Array.from(
      root.querySelectorAll<HTMLElement>("[data-magnetic]"),
    );
    const hotspots = "a, button, [role='button'], input, textarea, [data-cursor]";

    let ring: HTMLElement | null = null;
    let dot: HTMLElement | null = null;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let ringX = pointerX;
    let ringY = pointerY;
    let raf = 0;

    if (fine && !reduced) {
      root.classList.add("has-custom-cursor");
      ring = document.createElement("div");
      ring.className = "cursor-ring";
      ring.setAttribute("aria-hidden", "true");
      dot = document.createElement("div");
      dot.className = "cursor-dot";
      dot.setAttribute("aria-hidden", "true");
      document.body.append(ring, dot);

      const follow = () => {
        ringX += (pointerX - ringX) * 0.18;
        ringY += (pointerY - ringY) * 0.18;
        if (ring) ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        if (dot) dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
        raf = requestAnimationFrame(follow);
      };
      raf = requestAnimationFrame(follow);
    }

    const resetTilt = (el: HTMLElement) => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
      el.style.setProperty("--mx", "50%");
      el.style.setProperty("--my", "50%");
    };

    const onPointerMove = (e: PointerEvent) => {
      pointerX = e.clientX;
      pointerY = e.clientY;

      if (ring) {
        ring.classList.remove("is-hidden");
        dot?.classList.remove("is-hidden");
      }

      for (const el of tilts) {
        const rect = el.getBoundingClientRect();
        if (
          e.clientX < rect.left - 80 ||
          e.clientX > rect.right + 80 ||
          e.clientY < rect.top - 80 ||
          e.clientY > rect.bottom + 80
        ) {
          resetTilt(el);
          continue;
        }
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        el.style.setProperty("--rx", `${((px - 0.5) * 2 * -9).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${((py - 0.5) * 2 * 7).toFixed(2)}deg`);
        el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
        el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
      }

      for (const el of magnets) {
        const rect = el.getBoundingClientRect();
        if (
          e.clientX < rect.left - 60 ||
          e.clientX > rect.right + 60 ||
          e.clientY < rect.top - 60 ||
          e.clientY > rect.bottom + 60
        ) {
          el.style.setProperty("--mag-x", "0");
          el.style.setProperty("--mag-y", "0");
          continue;
        }
        const pull = Number(el.dataset.magnetic || "10");
        el.style.setProperty(
          "--mag-x",
          (((e.clientX - (rect.left + rect.width / 2)) / rect.width) * pull).toFixed(2),
        );
        el.style.setProperty(
          "--mag-y",
          (((e.clientY - (rect.top + rect.height / 2)) / rect.height) * pull).toFixed(2),
        );
      }
    };

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (ring && target?.closest(hotspots)) ring.classList.add("is-hot");
    };

    const onOut = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (ring && target?.closest(hotspots)) ring.classList.remove("is-hot");
    };

    const onLeaveWindow = () => {
      ring?.classList.add("is-hidden");
      dot?.classList.add("is-hidden");
    };

    const onPress = (e: Event) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-tilt]",
      );
      el?.classList.add("is-pressing");
    };

    const onRelease = () => {
      tilts.forEach((el) => el.classList.remove("is-pressing"));
    };

    /* ---------------------------------------------------------------- *
     * Anything interactive that scrolls into view after mount (client
     * navigation) still needs observing.
     * ---------------------------------------------------------------- */
    const sweep = () => {
      root.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)")
        .forEach((el) => {
          if (reduced) {
            el.classList.add("is-in");
            return;
          }
          observer?.observe(el);
        });
    };

    let observer: IntersectionObserver | null = null;
    if (!reduced && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-in");
            observer?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
      );
    }
    sweep();

    const rafScroll = () => {
      onParallax();
      requestAnimationFrame(rafScroll);
    };
    const parallaxRaf = requestAnimationFrame(rafScroll);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerout", onOut, { passive: true });
    window.addEventListener("pointerdown", onPress, { passive: true });
    window.addEventListener("pointerup", onRelease, { passive: true });
    document.addEventListener("mouseleave", onLeaveWindow);
    window.addEventListener("maya:refresh", sweep);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(parallaxRaf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOut);
      window.removeEventListener("pointerdown", onPress);
      window.removeEventListener("pointerup", onRelease);
      document.removeEventListener("mouseleave", onLeaveWindow);
      window.removeEventListener("maya:refresh", sweep);
      root.classList.remove("has-custom-cursor");
      ring?.remove();
      dot?.remove();
      root.style.removeProperty("--scroll-progress");
    };
  }, []);

  return null;
}
