/**
 * Every string below is derived from the Dr. Maya Reynolds, PsyD profile.
 * Source of truth: her professional bio (Google Doc) + supplied office assets.
 * Nothing here may reference children, teens, couples, dissociation or
 * special-needs parenting — the source template uses those, her practice does not.
 */

export const brand = {
  name: "Dr. Maya Reynolds, PsyD",
  shortName: "Maya Reynolds",
  role: "Licensed Clinical Psychologist",
  location: "Santa Monica, California",
  address: "123th Street 45 W",
  cityStateZip: "Santa Monica, CA 90401",
  serving:
    "Serving Santa Monica, Pacific Palisades, Brentwood & West LA — with telehealth across California",
};

export const announcement = {
  text: "In-person & telehealth therapy in Santa Monica & across California",
};

export const nav = [
  { label: "About", href: "/#about" },
  {
    label: "Services",
    href: "/#services",
    folder: [
      { label: "Anxiety & Panic", href: "/#services" },
      { label: "Trauma & EMDR", href: "/#services" },
      { label: "Burnout & Perfectionism", href: "/#services" },
      { label: "How I Work", href: "/#services" },
    ],
  },
  { label: "Our Office", href: "/#office" },
  { label: "FAQs", href: "/faqs" },
];

export const hero = {
  eyebrow: "In-person & telehealth therapy in Santa Monica & across California",
  headline: (
    <>
      Anxiety &amp; <span className="script">trauma</span> therapy in Santa
      Monica
    </>
  ),
  sub: "Warm, evidence-based care for adults living with anxiety, panic, the weight of past experiences, and professional burnout — paced at a speed you can actually sustain.",
  cta: "Book a Consultation",
};

/** Mirrors the source template's "holding onto hope" statement block. */
export const intro = {
  heading: "You’ve been holding it together for a long time.",
  lead: "At my practice, that finally becomes the thing we work on.",
  body: "Most of the people I see are high-achieving, thoughtful and outwardly fine. On the inside, they’re exhausted — stuck in overthinking, lying awake replaying the day, braced for something to go wrong. Some are working through a single hard experience. Others are living with patterns that started much earlier, in childhood or in relationships that never felt safe.",
  second:
    "Wherever you’re starting from, you deserve support that respects both the difficulty of what you’ve been through and the strength it took to get here. We work on the emotional and the physical sides of what you’re experiencing, so that the change lasts outside the therapy room and into your actual life.",
};

export const whoWeHelp = {
  heading: "Who I work with",
  items: [
    {
      title: "Anxiety & Panic",
      body: "Constant worry, panic attacks, and the feeling that something bad is always about to happen. We work on the thoughts underneath and the tension your body is holding, using CBT, mindfulness and EMDR where earlier experiences are keeping the alarm switched on.",
    },
    {
      title: "Burnout & Perfectionism",
      body: "For entrepreneurs, creatives and professionals carrying a high internal pressure that hasn’t let up in years. Therapy becomes a place to slow down, reconnect with yourself, and build a way of living and working that doesn’t require you to run yourself down.",
    },
    {
      title: "Trauma & Its Aftermath",
      body: "Single-incident trauma as well as longer, complex patterns rooted in childhood, relationships or chronic stress. We move carefully — safety and stabilisation first, so you feel more regulated in daily life and not only during sessions.",
    },
  ],
};

export const pullQuote = {
  text: "You don’t have to keep functioning to deserve help. Something quieter, steadier and more your own is worth working toward.",
};

export const expertise = {
  heading: "What I work with",
  items: [
    "Anxiety",
    "Panic",
    "Trauma",
    "Burnout",
    "Perfectionism",
    "Overthinking",
    "EMDR",
    "CBT",
    "Mindfulness",
    "Sleep disruption",
    "Work stress",
    "Body-based techniques",
    "Nervous system regulation",
    "Self-worth",
  ],
  more: "…and more.",
};

/** Bio section — satisfies “Maya’s picture and a bio from her profile”. */
export const about = {
  label: "About",
  heading: "Meet Dr. Maya Reynolds, PsyD",
  role: "Licensed Clinical Psychologist",
  location: "Santa Monica, California",
  body: "I’m a licensed clinical psychologist based in Santa Monica, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware — but internally exhausted, stuck in overthinking, or emotionally on edge.",
  body2:
    "My approach is warm, collaborative and grounded. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy, EMDR, mindfulness-based practices and body-oriented techniques, so we can understand both the emotional and the physiological sides of what you’re experiencing.",
  cta: "How I work",
};

export const howWeWork = {
  label: "How we work",
  heading: "Therapy should feel like somewhere you can finally breathe.",
  lead: "The people I work with are balancing a great deal at once, and putting themselves first is often the first thing to get dropped.",
  body: "Here, your needs are the priority. I take the time to properly understand your story before we do anything with it, because no two people are the same and personalised therapy means an intentional, tailored approach. You won’t find anything ‘one-size-fits-all’ here.",
  second:
    "Sometimes we will gently challenge you to look at something differently, and sometimes we will slow down and stay with a feeling. Either way, the goal is not only symptom relief — it’s insight, resilience, and a stronger relationship with yourself over time. If you’re looking for a therapist who combines practical tools with depth-oriented work, and who understands the realities of living and working in a fast-paced environment, you may be in the right place.",
  cta: "Book a consultation",
};

/** Three services from the profile, plus an approach card to keep the 4-up grid. */
export const services = {
  heading: "Honouring where you’ve been, and helping shape where you’re headed.",
  subheading: "Areas I work with",
  items: [
    {
      title: "Anxiety & Panic Therapy",
      body: "For anxiety that has quietly taken over your calendar. We work on the patterns of thought underneath it and the physical tension that comes with them, using CBT and mindfulness-based tools — and EMDR when earlier experiences are keeping your nervous system on alert.",
      art: "glow",
    },
    {
      title: "Trauma Recovery with EMDR",
      body: "EMDR is a well-researched approach that helps the brain process painful memories so they stop replaying on their own schedule. I use it for both single-incident trauma and longer patterns, always moving at a pace where you feel stable, safe and in control of the work.",
      art: "tide",
    },
    {
      title: "Burnout & Perfectionism",
      body: "For people whose exhaustion has quietly become the baseline. We look at where the pressure comes from, what your internal standards are costing you, and how to build a professional and personal life that doesn’t depend on pushing through.",
      art: "ember",
    },
    {
      title: "How I Work",
      kicker: "CBT · EMDR · Mindfulness · Body-oriented",
      body: "Evidence-based methods chosen to fit you, rather than the other way around. Structured enough to feel supportive, open enough to go somewhere real — with an emphasis on safety, stabilisation and helping you feel more regulated in daily life.",
      art: "sand",
    },
  ],
};

/** Part 3 — the custom section. Uses the office photos from the profile. */
export const office = {
  label: "Our office",
  heading: "A quiet room in Santa Monica, built for slowing down.",
  body: "My office is a calm, private space on 123th Street 45 W in Santa Monica — natural light, warm wood floors and comfortable seating, with nothing clinical about it. The room is deliberately uncluttered so that the moment you arrive, there is nothing to perform and nowhere to rush to.",
  second:
    "Clients often tell me the space itself does some of the work of settling them, before we have said a word. Many of the conversations that matter most happen here, sitting down, at a pace that lets you think properly.",
  details: [
    "Private, sound-treated room with a comfortable seat for each of you",
    "Natural light and an uncluttered, grounding environment",
    "Street-level access in Santa Monica, with easy parking nearby",
    "In-person in Santa Monica, or secure telehealth from anywhere in California",
  ],
};

/** FAQ — every answer traceable to the profile. */
export const faqs = {
  heading: "Questions people ask before starting",
  items: [
    {
      q: "Do you offer online therapy?",
      a: "Yes. I offer secure telehealth sessions for clients located anywhere in California. Many people use video sessions to fit therapy around work, and it works very well for the kind of work we do together.",
    },
    {
      q: "Who do you work with?",
      a: "I work with adults navigating anxiety, panic, trauma and burnout. A lot of my clients are high-achieving professionals, entrepreneurs and creatives who look fine from the outside but are exhausted and overthinking on the inside.",
    },
    {
      q: "What is EMDR, and how does it work?",
      a: "EMDR — Eye Movement Desensitization and Reprocessing — is a well-researched treatment that helps the brain process traumatic memories so they stop replaying on their own schedule. I use it as part of a broader trauma-informed approach, and always at a pace where you feel stable and in control.",
    },
    {
      q: "Do you see clients in person?",
      a: "Yes. I see clients in person at my Santa Monica office, and I also work with clients across California by secure telehealth. You can choose either, or change your mind as your needs change.",
    },
    {
      q: "What can I expect from a first session?",
      a: "The first session is mostly about me understanding your story and what you want to be different. We’ll talk about what you’ve been experiencing, what you’ve already tried, and whether this feels like a good fit. You’re welcome to ask me anything at all.",
    },
    {
      q: "How long does therapy usually last?",
      a: "It depends on what you’re bringing. Some people come for a focused stretch of work on something specific; others stay for longer-term change. We’ll talk about goals early and keep checking in, so the length of our work stays useful to you rather than fixed.",
    },
  ],
};

export const ctaBand = {
  label: "Schedule a consultation",
  heading: "Let’s see whether we’re a good fit.",
  body: "Choosing a therapist is a big decision, and you deserve to feel understood from the very first conversation. If something on this page felt like it was written about you, get in touch and we’ll find a time to talk.",
  cta: "Book a Consultation",
};

export const footer = {
  blurb:
    "Getting started is simple. You’re welcome to come into my office in Santa Monica, or meet with me securely online from anywhere in California — whichever works best for you.",
  navigate: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Our Office", href: "/#office" },
    { label: "FAQs", href: "/faqs" },
  ],
};
