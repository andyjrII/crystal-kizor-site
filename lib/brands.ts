// All copy and links live here. Replace every "#" with the real URL before launch.
export type Tone = 'bone' | 'sand' | 'cocoa' | 'moss' | 'indigo';

export type Chapter = {
  id: string;
  name: string;
  kind: string;
  audience: string;
  blurb: string;
  cta: string;
  href: string;
  tone: Tone;
  image?: string;
  alt?: string;
  points?: string[];
  bridge: string;
  bridgeTo: string;
};

export const chapters: Chapter[] = [
  {
    id: 'coka',
    name: 'Studio COKA',
    kind: 'Architecture, interiors and construction',
    audience:
      'For homeowners, developers and institutions who want buildings that suit their climate.',
    blurb:
      'Architecture and interiors shaped by climate, local context and the realities of everyday life.',
    cta: 'Enquire about Studio COKA',
    href: '#',
    tone: 'bone',
    image: '/img/coka.webp',
    alt: 'Studio COKA house with a shaded entrance and landscaped courtyard',
    bridge: 'The spaces are built. Next, the objects that fill them.',
    bridgeTo: 'elevated',
  },
  {
    id: 'elevated',
    name: 'ELEvated',
    kind: 'Furniture and product design',
    audience:
      'For people furnishing homes, workplaces and hospitality spaces.',
    blurb:
      'Furniture and everyday objects rooted in African craft, material honesty and long-term use.',
    cta: 'Enquire about ELEvated',
    href: '#',
    tone: 'sand',
    image: '/img/elevated.webp',
    alt: 'Timber dining table and chairs in a warm, daylit interior',
    bridge: 'Good design needs good designers. Crystal teaches them.',
    bridgeTo: 'tea',
  },
  {
    id: 'tea',
    name: 'The Effective Architect',
    kind: 'Architecture education and media',
    audience:
      'For architects and built-environment professionals who want to grow their careers.',
    blurb:
      'Practical learning for architects and professionals who want to grow with clarity, confidence and purpose.',
    cta: 'Join the waitlist',
    href: '#',
    tone: 'cocoa',
    image: '/img/about.webp',
    bridge: 'Lessons travel further when they are spoken.',
    bridgeTo: 'speaking',
  },
  {
    id: 'speaking',
    name: 'Speaking',
    kind: 'Talks and conversations',
    audience: 'For conference, university and industry organisers.',
    blurb:
      'Keynotes and conversations on climate-responsive design, African cities, entrepreneurship and the future of the built environment.',
    cta: 'Invite Crystal to speak',
    href: '#',
    tone: 'bone',
    image: '/img/talks.webp',
    bridge: 'Some ideas need more room than a stage.',
    bridgeTo: 'writing',
  },
  {
    id: 'writing',
    name: 'Writing and research',
    kind: 'Essays, research and authorship',
    audience:
      'For readers, students and practitioners curious about place and culture.',
    blurb:
      'Essays, ideas and research exploring place, culture, architecture and the conditions that make communities thrive.',
    cta: 'Get in touch',
    href: '#',
    tone: 'sand',
    // TODO: these should become links to real articles.
    points: [
      'Climate-responsive design',
      'African cities',
      'Place and culture',
      'The built environment',
    ],
    bridge: 'All of it is for the people who inherit it.',
    bridgeTo: 'ako',
  },
  {
    id: 'ako',
    name: 'AKO Alliance',
    kind: 'Education access for young people',
    audience: 'For children and young people, and the partners who back them.',
    blurb:
      'Expanding access to education and opportunity for children and young people, creating pathways for a stronger future.',
    cta: 'Ask about AKO Alliance',
    href: '#',
    tone: 'moss',
    image: '/img/ako.webp',
    alt: 'Community members gathered in a rammed-earth building',
    bridge: 'Access opens the door. Identity and purpose keep it open.',
    bridgeTo: 'alive',
  },
  {
    id: 'alive',
    name: 'Alive and Free',
    kind: 'Christian youth movement',
    audience:
      'For young people seeking truth, healing, freedom and purpose in Christ.',
    blurb:
      'A youth movement helping young people walk in truth, identity, healing and purpose as they grow into themselves.',
    cta: 'Ask about Alive and Free',
    href: '#',
    tone: 'indigo',
    points: ['Truth', 'Healing', 'Freedom', 'Identity', 'Purpose'],
    bridge: 'Not sure where you fit?',
    bridgeTo: 'next',
  },
];

export const routes = [
  {
    ask: 'I want to build or renovate',
    go: 'Studio COKA',
    href: '#coka',
    interest: 'coka',
  },
  {
    ask: 'I am an architect who wants to grow',
    go: 'The Effective Architect',
    href: '#tea',
    interest: 'tea',
  },
  {
    ask: 'I am organising an event',
    go: 'Speaking',
    href: '#speaking',
    interest: 'speaking',
  },
  {
    ask: 'I want to help young people thrive',
    go: 'AKO Alliance and Alive and Free',
    href: '#ako',
    interest: 'ako',
  },
];
