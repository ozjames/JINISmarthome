/**
 * Central brand & contact configuration for JINI Smart Home.
 */

export const site = {
  brand: "JINI Smart Home",
  shortBrand: "JINI",
  company: "JINI TECH PTY LTD",
  tagline: "Smart home systems that fit the way you live",
  description:
    "Consulting and installation for lighting, security, climate, and energy — planned around your home across Sydney and the Central Coast, not a one-size package.",
  locale: "en-AU",

  contact: {
    phone: "0431 395 737",
    phoneHref: "tel:+61431395737",
    serviceArea: "Sydney & Central Coast, Australia",
    note: "Phone-first enquiries — we’ll call you back on the number you provide.",
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "Why us", href: "#why-us" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  services: [
    {
      id: "lighting",
      title: "Smart lighting",
      description:
        "Scene-based lighting for living areas, outdoor spaces, and pathways — easy control from switches, phones, or voice, without locking you into a single ecosystem.",
    },
    {
      id: "security",
      title: "Security & access",
      description:
        "Cameras, doorbells, sensors, and smart locks integrated so you can see and control your home when you’re away — set up for reliability, not gimmicks.",
    },
    {
      id: "climate",
      title: "Climate comfort",
      description:
        "Smarter heating and cooling schedules, zoning, and sensors that suit Australian seasons — helping you stay comfortable without wasting energy.",
    },
    {
      id: "energy",
      title: "Energy awareness",
      description:
        "Practical monitoring and automation for solar, batteries, and high-draw appliances so you can understand usage and reduce peak demand where it counts.",
    },
  ],

  whyUs: [
    {
      title: "Consult first, sell second",
      description:
        "We start with how your household actually uses the home — routines, pain points, and what you don’t want to manage — before recommending products or packages.",
    },
    {
      title: "Sydney & Central Coast local",
      description:
        "We plan for local climate, NBN setups, and the way Aussie households live day to day across Sydney and the Central Coast.",
    },
    {
      title: "Clear scope, tidy installs",
      description:
        "You get a written plan covering devices, wiring or wireless approach, and who does what. Installation aims for clean cabling, sensible placement, and documentation you can keep.",
    },
    {
      title: "Support after handover",
      description:
        "After install we walk you through the system and remain available for tweaks, troubleshooting, and future expansions as your needs change.",
    },
  ],

  process: [
    {
      step: 1,
      title: "Consult",
      description:
        "A conversation (and optional site visit) to map your goals, rooms, and constraints — budget, timeline, and existing gear included.",
    },
    {
      step: 2,
      title: "Design",
      description:
        "A practical design and parts list: what to automate, what to leave alone, and how everything fits together without unnecessary complexity.",
    },
    {
      step: 3,
      title: "Install",
      description:
        "Professional installation and configuration, coordinated with any electrical work required, then tested against the agreed scope.",
    },
    {
      step: 4,
      title: "Support",
      description:
        "Handover training for your household, plus ongoing support for adjustments, new rooms, or seasonal fine-tuning.",
    },
  ],

  faq: [
    {
      question: "Where do you work?",
      answer:
        "We serve Sydney and the Central Coast. Tell us your suburb and we’ll be upfront about coverage and travel.",
    },
    {
      question: "Will you lock me into one brand or app?",
      answer:
        "No. We recommend platforms that fit your home and habits. Where possible we favour open, well-supported options and avoid unnecessary proprietary lock-in.",
    },
    {
      question: "I already own some smart devices — can you work with them?",
      answer:
        "Often yes. We’ll review what you have, what still works well, and what is worth replacing — then design around the keepers rather than starting from scratch.",
    },
    {
      question: "Do you handle electrical work?",
      answer:
        "Licensed electrical work is coordinated with qualified electricians where required. We scope what’s needed in the plan so there are no surprises on install day.",
    },
    {
      question: "How much does a typical project cost?",
      answer:
        "It depends on rooms, devices, and whether cabling or electrical upgrades are needed. After a consult we provide a clear written scope and estimate — no package pressure.",
    },
    {
      question: "How do I get in touch?",
      answer:
        "Call or text 0431 395 737, or send an enquiry through the form. We’re phone-first — we’ll call you back on the number you provide.",
    },
  ],

  githubRepo: "https://github.com/ozjames/JINISmarthome",
} as const;

export type SiteConfig = typeof site;
