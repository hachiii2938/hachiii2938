import { schoolLifeEntries } from '../data/school';

export function SchoolPage() {
  return (
    <section className="page">
      <header className="section-header">
        <h1>School Life</h1>
        <p>
          Snippets from everyday school life — studio nights, campus corners, and small moments with
          friends.
        </p>
      </header>

      <div className="card-grid">
        {schoolLifeEntries.map((entry) => (
          <article key={entry.id} className="card school-card">
            {entry.image && (
              <div className="card-image">
                <img src={`/school/${entry.image}`} alt={entry.title} loading="lazy" />
              </div>
            )}
            <div className="card-body">
              <h2>{entry.title}</h2>
              <p className="meta">
                <span>{entry.semester}</span>
                {entry.location && <span> · {entry.location}</span>}
              </p>
              <p>{entry.description}</p>
              {entry.tags.length > 0 && (
                <ul className="tag-list">
                  {entry.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

