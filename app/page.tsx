import Image from 'next/image';
import { build, teach, serve, routes, contactEmail, type Brand } from '@/lib/brands';

function Photo({ src, alt, sizes, className, priority }: { src: string; alt: string; sizes: string; className?: string; priority?: boolean }) {
  return (
    <div className={`photo ${className ?? ''}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
    </div>
  );
}

function Feature({ b }: { b: Brand }) {
  return (
    <article className="feature">
      {b.image && <Photo src={b.image} alt={b.alt ?? ''} sizes="(max-width: 800px) 100vw, 45vw" />}
      <h3>{b.name}</h3>
      <p>{b.blurb}</p>
      <a className="link" href={b.href}>{b.cta}</a>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <header className="bar">
        <a href="#top" aria-label="Crystal Kizor home">
          <Image src="/img/logo-wide.png" alt="Crystal Kizor" width={534} height={43} className="bar-logo" priority />
        </a>
        <nav aria-label="Primary">
          <a href="#build">Build</a>
          <a href="#teach">Teach</a>
          <a href="#serve">Serve</a>
          <a href="#next">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <h1>Designing places, products and young people&rsquo;s futures.</h1>
            <p className="lede">
              Crystal Kizor is an architect, designer and entrepreneur. Her work moves from climate-responsive buildings
              and African-rooted furniture to the education of architects and the next generation, with one belief
              underneath: good design gives people room to flourish.
            </p>
            <div className="actions">
              <a className="btn" href="#build">Explore the work</a>
              <a className="btn ghost" href="#next">Find your next step</a>
            </div>
          </div>
          <Photo src="/img/portrait.webp" alt="Crystal Kizor seated in her design studio" sizes="(max-width: 800px) 90vw, 40vw" className="arch" priority />
        </section>

        <section id="build" className="band">
          <div className="head">
            <h2>Build</h2>
            <p>Buildings and objects, designed for their climate and the people who use them.</p>
          </div>
          <div className="duo">{build.map((b) => <Feature key={b.name} b={b} />)}</div>
          <figure className="project">
            <Photo src="/img/centre-wide.webp" alt="Community centre with a curved thatched roof and people gathered outside" sizes="100vw" className="wide" />
            <div className="thumbs">
              <Photo src="/img/centre-court.webp" alt="Courtyard with a large tree opening through the roof" sizes="(max-width: 800px) 50vw, 25vw" />
              <Photo src="/img/centre-hall.webp" alt="Interior gallery with perforated brick walls and a timber roof" sizes="(max-width: 800px) 50vw, 25vw" />
            </div>
            <figcaption>Community Centre Project, Studio COKA. Earth, timber and shade doing the work of air conditioning.</figcaption>
          </figure>
        </section>

        <section id="teach" className="band teach">
          <div className="head">
            <h2>Teach and share</h2>
            <p>What Crystal has learned, passed on to architects, audiences and readers.</p>
          </div>
          <div className="split">
            <ul className="rows">
              {teach.map((b) => (
                <li key={b.name}>
                  <h3>{b.name}</h3>
                  <p>{b.blurb}</p>
                  <a className="link" href={b.href}>{b.cta}</a>
                </li>
              ))}
            </ul>
            <Photo src="/img/talks.webp" alt="Crystal Kizor at her desk with a podcast microphone" sizes="(max-width: 800px) 100vw, 40vw" className="side" />
          </div>
        </section>

        <section id="serve" className="band dark">
          <div className="head">
            <h2>Serve</h2>
            <p>Opportunity and purpose for children and young people.</p>
          </div>
          <div className="duo even">
            {serve.map((b) => (
              <article className="feature" key={b.name}>
                {b.image ? <Photo src={b.image} alt={b.alt ?? ''} sizes="(max-width: 800px) 100vw, 45vw" /> : null}
                <h3>{b.name}</h3>
                <p>{b.blurb}</p>
                <a className="link" href={b.href}>{b.cta}</a>
              </article>
            ))}
          </div>
        </section>

        <section id="next" className="band next">
          <div className="head">
            <h2>Where to next?</h2>
            <p>Tell us why you are here and we will point you to the right door.</p>
          </div>
          <ul className="routes">
            {routes.map((r) => (
              <li key={r.ask}>
                <a href={r.href}>
                  <span className="ask">{r.ask}</span>
                  <span className="go">{r.go}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="foot">
        <Image src="/img/logo-mono.png" alt="CK monogram" width={202} height={160} className="mono" />
        <p>Crystal Kizor &middot; Architect, designer and founder</p>
        <a className="link" href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </footer>
    </>
  );
}
