import Image from 'next/image';
import { chapters, routes, contactEmail, type Chapter } from '@/lib/brands';
import ChapterNav from '@/components/ChapterNav';

function Photo({
  src,
  alt,
  sizes,
  className,
  priority,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`photo ${className ?? ''}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
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
            <a className='btn' href={chapter.href}>
              {chapter.cta}
            </a>
          </div>
          <div className='chapter-media'>
            <ChapterMedia chapter={chapter} />
          </div>
        </div>
        {chapter.id === 'coka' ? (
          <figure className='project'>
            <Photo
              src='/img/centre-wide.webp'
              alt='Community centre with a curved thatched roof and people gathered outside'
              sizes='100vw'
              className='wide'
            />
            <div className='thumbs'>
              <Photo
                src='/img/centre-court.webp'
                alt='Courtyard with a large tree opening through the roof'
                sizes='(max-width: 800px) 50vw, 25vw'
              />
              <Photo
                src='/img/centre-hall.webp'
                alt='Interior gallery with perforated brick walls and a timber roof'
                sizes='(max-width: 800px) 50vw, 25vw'
              />
            </div>
            <figcaption>
              Featured project: Community Centre. Earth, timber and shade
              doing the work of air conditioning.
            </figcaption>
          </figure>
        ) : null}
        <a className='bridge' href={`#${chapter.bridgeTo}`}>
          <span className='bridge-text'>{chapter.bridge}</span>
          <span className='bridge-next'>{bridgeLabel(chapter.bridgeTo)}</span>
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
              <a href='#next'>Contact</a>
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
          </div>
          <Photo
            src='/img/portrait.webp'
            alt='Crystal Kizor seated in her design studio'
            sizes='(max-width: 800px) 90vw, 40vw'
            className='arch'
            priority
          />
        </section>

        <section className='index' aria-labelledby='index-title'>
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
                <a href={r.href}>
                  <span className='ask'>{r.ask}</span>
                  <span className='go'>{r.go}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className='foot'>
        <Image
          src='/img/logo-mono.png'
          alt='CK monogram'
          width={202}
          height={160}
          className='mono'
        />
        <p>Crystal Kizor &middot; Architect, designer and founder</p>
        <a className='link' href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
      </footer>
    </>
  );
}
