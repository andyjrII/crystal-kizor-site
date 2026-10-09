// All copy and links live here. Replace every "#" with the real URL before launch.
export type Brand = {
  name: string;
  blurb: string;
  cta: string;
  href: string;
  image?: string;
  alt?: string;
};

export const contactEmail = 'hello@example.com'; // TODO: confirm Crystal's contact email

export const build: Brand[] = [
  {
    name: 'Studio COKA',
    blurb: 'Architecture, interior design and construction, shaped by climate and the way people actually live.',
    cta: 'Visit Studio COKA',
    href: '#',
    image: '/img/coka.webp',
    alt: 'Studio COKA house with a shaded entrance and landscaped courtyard',
  },
  {
    name: 'ELEvated',
    blurb: 'Furniture and products rooted in African materials, context and ideas, made to be used every day.',
    cta: 'See ELEvated',
    href: '#',
    image: '/img/elevated.webp',
    alt: 'Timber dining table and chairs in a warm, daylit interior',
  },
];

export const teach: Brand[] = [
  {
    name: 'The Effective Architect',
    blurb: 'Learning and media for architects and built-environment professionals who want to grow and build better careers.',
    cta: 'Start learning',
    href: '#',
  },
  {
    name: 'Speaking',
    blurb: 'Talks and conversations on climate-responsive design, African cities, entrepreneurship and the built environment.',
    cta: 'Invite Crystal to speak',
    href: '#',
  },
  {
    name: 'Writing and research',
    blurb: 'Ideas, authorship and research published under Crystal Kizor.',
    cta: 'Read the latest',
    href: '#',
  },
];

export const serve: Brand[] = [
  {
    name: 'AKO Alliance',
    blurb: 'Expanding access to education and opening up opportunities for children and young people.',
    cta: 'Support AKO Alliance',
    href: '#',
    image: '/img/ako.webp',
    alt: 'Community members gathered in a rammed-earth building',
  },
  {
    name: 'Alive and Free',
    blurb: 'A Christian youth movement helping young people walk in truth, healing, freedom, identity and purpose in Christ.',
    cta: 'Join Alive and Free',
    href: '#',
  },
];

export const routes = [
  { ask: 'I want to build or renovate', go: 'Studio COKA', href: '#' },
  { ask: 'I am an architect who wants to grow', go: 'The Effective Architect', href: '#' },
  { ask: 'I am organising an event', go: 'Speaking', href: '#' },
  { ask: 'I want to help young people thrive', go: 'AKO Alliance and Alive and Free', href: '#' },
];
