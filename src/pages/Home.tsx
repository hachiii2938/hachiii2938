import { IllustrationButton } from '../components/IllustrationButton';

export function HomePage() {
  return (
    <section className="page page-home">
      <div className="hero">
        <div className="hero-text">
          <p className="hero-kicker">Portfolio</p>
          <h1 className="hero-title">Hello, I&apos;m Hachiii.</h1>
          <p className="hero-subtitle">
            A student artist who loves drawing, capturing everyday moments, and creating small
            worlds with mixed media.
          </p>

          <div className="hero-actions">
            <IllustrationButton
              onClick={() => {
                const worksSection = document.getElementById('works-highlight');
                worksSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View my works
            </IllustrationButton>
            <IllustrationButton
              className="ghost"
              onClick={() => {
                const aboutSection = document.getElementById('about-highlight');
                aboutSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About me
            </IllustrationButton>
          </div>
        </div>

        <div className="hero-card" id="about-highlight">
          <h2>About this portfolio</h2>
          <p>
            This website collects my school life, my hobbies and sketches, and a selection of
            artworks in different mediums.
          </p>
          <p className="hero-note">
            Background and buttons are designed to be replaced with my own illustration assets
            later.
          </p>
        </div>
      </div>

      <section className="section" id="works-highlight">
        <div className="section-header">
          <h2>Highlights</h2>
          <p>Some mixed media pieces from my recent projects.</p>
        </div>

        <div className="highlight-grid">
          <article className="highlight-card">
            <h3>Morning Window</h3>
            <p className="meta">Illustration · Digital · 2025</p>
            <p>
              A quiet morning scene inspired by dorm life, with soft light and plants on the
              windowsill.
            </p>
          </article>
          <article className="highlight-card">
            <h3>City Notes</h3>
            <p className="meta">Photography + Sketch · 2024</p>
            <p>
              Street snapshots combined with handwritten notes, collecting small, unnoticed corners
              of the city.
            </p>
          </article>
          <article className="highlight-card">
            <h3>Fragmented Memories</h3>
            <p className="meta">Mixed media · 2024</p>
            <p>
              Collage of tickets, doodles, and textures, arranged like a diary page that cannot be
              turned back.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}

