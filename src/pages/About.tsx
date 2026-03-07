import { IllustrationButton } from '../components/IllustrationButton';
import { aboutText, hobbies } from '../data/about';

export function AboutPage() {
  return (
    <section className="page">
      <header className="section-header">
        <h1>About & Hobbies</h1>
        <p>A short introduction and the small things that keep me inspired.</p>
      </header>

      <div className="about-layout">
        <section className="about-main">
          <h2>Who am I?</h2>
          <p>{aboutText.intro}</p>
          <p>{aboutText.studyFocus}</p>

          <IllustrationButton
            className="mt"
            onClick={() => {
              window.location.href = 'mailto:example@example.com';
            }}
          >
            Contact me by email
          </IllustrationButton>
        </section>

        <aside className="about-side">
          <h2>Things I enjoy</h2>
          <ul className="hobby-list">
            {hobbies.map((hobby) => (
              <li key={hobby.id} className="hobby-item">
                <h3>{hobby.name}</h3>
                <p>{hobby.description}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

