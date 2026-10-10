import Image from 'next/image';
import { chapters, routes, type Chapter } from '@/lib/brands';
import ChapterNav from '@/components/ChapterNav';
import ContactForm from '@/components/ContactForm';

function Photo({
  src,
  alt,
  sizes,
  className,
  priority,
  quality,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  quality?: number;
}) {
  return (
    <div className={`photo ${className ?? ''}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
      />
    </div>
  );
}

function ChapterMedia({ chapter }: { chapter: Chapter }) {
  if (chapter.image) {
    return (
      <Photo
        src={chapter.image}
        alt={chapter.alt ?? chapter.name}
        sizes='(max-width: 800px) 100vw, 45vw'
      />
    );
  }
  if (chapter.points && chapter.points.length > 0) {
    return (
      <ul className='points'>
        {chapter.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    );
  }
  return null;
}

function bridgeLabel(bridgeTo: string): string {
  if (bridgeTo === 'next') return 'Next: Where to go from here';
  const destination = chapters.find((c) => c.id === bridgeTo);
  return destination ? `Next: ${destination.name}` : 'Next';
}

function ChapterSection({
  chapter,
  index,
}: {
  chapter: Chapter;
  index: number;
}) {
  const flip = index % 2 === 1;
  const cokaHref = chapters.find((c) => c.id === 'coka')?.href ?? '#contact';
  const cokaPlaceholder = cokaHref === '#';
  return (
    <section
      id={chapter.id}
      data-tone={chapter.tone}
      className='chapter'
      aria-labelledby={`${chapter.id}-title`}
    >
      <div className='chapter-inner'>
        <div className={`chapter-grid${flip ? ' flip' : ''}`}>
          <div className='chapter-copy'>
            <span className='tag'>{chapter.kind}</span>
            <h2 id={`${chapter.id}-title`}>{chapter.name}</h2>
            <p>{chapter.blurb}</p>
            <p className='audience'>{chapter.audience}</p>
            <a
              className='btn'
              href={chapter.href === '#' ? '#contact' : chapter.href}
              {...(chapter.href === '#'
                ? { 'data-interest': chapter.id }
                : {})}
            >
              {chapter.cta}
            </a>
          </div>
          <div className='chapter-media'>
            <ChapterMedia chapter={chapter} />
          </div>
        </div>
        {chapter.id === 'coka' ? (
          <figure className='project'>
            <p className='project-label'>Featured project</p>
            <h3 className='project-title'>Community Centre</h3>
            {/* TODO: replace this intro with the real project details. */}
            <p className='project-intro'>
              A community building designed for shade, airflow and gathering.
            </p>
            {/* TODO: check the three caption texts against the real project details. */}
            <div className='shot'>
              <Photo
                src='/img/centre-wide.webp'
                alt='Community centre with a curved thatched roof and people gathered outside'
                sizes='100vw'
                className='wide'
              />
              <figcaption className='shot-caption'>
                <strong>Shade</strong>
                <span>
                  Deep roof overhangs keep the building cool in the heat.
                </span>
              </figcaption>
            </div>
            <div className='shots'>
              <div className='shot'>
                <Photo
                  src='/img/centre-court.webp'
                  alt='Courtyard with a large tree opening through the roof'
                  sizes='(max-width: 800px) 100vw, 50vw'
                />
                <figcaption className='shot-caption'>
                  <strong>Gathering</strong>
                  <span>A courtyard opening around a large tree.</span>
                </figcaption>
              </div>
              <div className='shot'>
                <Photo
                  src='/img/centre-hall.webp'
                  alt='Interior gallery with perforated brick walls and a timber roof'
                  sizes='(max-width: 800px) 100vw, 50vw'
                />
                <figcaption className='shot-caption'>
                  <strong>Airflow</strong>
                  <span>Perforated brick walls let air through.</span>
                </figcaption>
              </div>
            </div>
            <a
              className='link project-more'
              href={cokaPlaceholder ? '#contact' : cokaHref}
              {...(cokaPlaceholder ? { 'data-interest': 'coka' } : {})}
            >
              See more Studio COKA work
            </a>
          </figure>
        ) : null}
        <a className='bridge' href={`#${chapter.bridgeTo}`}>
          <span className='bridge-text'>{chapter.bridge}</span>
          <span className='bridge-next' aria-hidden='true'>
            &gt;
          </span>
          <span className='visually-hidden'>
            {bridgeLabel(chapter.bridgeTo)}
          </span>
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className='bar'>
        <a href='#top' aria-label='Crystal Kizor home' className='bar-mark'>
          <Image
            src='/img/logo-mono.png'
            alt='Crystal Kizor'
            width={202}
            height={160}
            className='bar-mono'
          />
        </a>
        <div className='bar-main'>
          <div className='bar-top'>
            <a href='#top' aria-label='Crystal Kizor home'>
              <Image
                src='/img/logo-wide.png'
                alt='Crystal Kizor'
                width={534}
                height={43}
                className='bar-logo'
              />
            </a>
            <nav aria-label='Primary'>
              <a href='#contact'>
                <svg
                  className='phone-icon'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  aria-hidden='true'
                >
                  <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                </svg>
                Contact us
              </a>
            </nav>
          </div>
          <ChapterNav chapters={chapters} />
        </div>
      </header>

      <main id='top'>
        <section className='hero'>
          <div className='hero-copy'>
            <h1>Crystal Kizor designs buildings, furniture and futures.</h1>
            <p className='lede'>
              She is an architect, designer and founder. She runs an
              architecture studio, makes African-rooted furniture, teaches
              architects, speaks on design and cities, and leads two
              initiatives for young people.
            </p>
            <p className='thread'>
              Scroll to follow the thread, from the buildings to the people
              they are for.
            </p>
            <a
              href='#index'
              className='scroll-cue'
              aria-label='Scroll to see how her work reaches people'
            >
              <span aria-hidden='true' />
            </a>
          </div>
          <div className='hero-media'>
            <Photo
              src='/img/portrait.webp'
              alt='Crystal Kizor seated in her design studio'
              sizes='(max-width: 800px) 90vw, 40vw'
              className='arch'
              priority
              quality={70}
            />
            <Image
              src='/img/logo-signature.png'
              alt="Crystal Kizor's signature"
              width={405}
              height={132}
              className='signature'
            />
          </div>
        </section>

        <section id='index' className='index' aria-labelledby='index-title'>
          <div className='index-inner'>
            <h2 id='index-title'>Seven ways her work reaches people</h2>
            <p className='index-caption'>
              Studio COKA is the practice. Everything else grows from it.
            </p>
            <ul className='tiles'>
              {chapters.map((c) => (
                <li
                  key={c.id}
                  data-tone={c.tone}
                  className={c.id === 'coka' ? 'tile-lead' : undefined}
                >
                  <a href={`#${c.id}`}>
                    <span className='tile-name'>{c.name}</span>
                    <span className='tile-kind'>{c.kind}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {chapters.map((c, i) => (
          <ChapterSection key={c.id} chapter={c} index={i} />
        ))}

        <section id='next' className='band next'>
          <div className='head'>
            <h2>Where to next?</h2>
            <p>
              Tell us what brings you here and we will point you to the right
              door.
            </p>
          </div>
          <ul className='routes'>
            {routes.map((r) => (
              <li key={r.ask}>
                <a href={r.href} data-interest={r.interest}>
                  <span className='ask'>{r.ask}</span>
                  <span className='go'>{r.go}</span>
                </a>
              </li>
            ))}
          </ul>
          <ContactForm />
        </section>
      </main>

      <footer className='foot'>
        <Image
          src='/img/logo-mono.png'
          alt='CK monogram'
          width={202}
          height={160}
          className='mono'
          loading='lazy'
        />
        <Image
          src='/img/logo-signature.png'
          alt="Crystal Kizor's signature"
          width={405}
          height={132}
          className='foot-signature'
          loading='lazy'
        />
      </footer>
    </>
  );
}
