import { useState } from 'react';
import { works, type Work, type WorkKind } from '../data/works';

const filters: { id: 'all' | WorkKind; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'illustration', label: 'Illustration' },
  { id: 'photo', label: 'Photography' },
  { id: 'mixed', label: 'Mixed media' },
];

export function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]['id']>('all');
  const [activeWork, setActiveWork] = useState<Work | null>(null);

  const filtered = works.filter((work) =>
    activeFilter === 'all' ? true : work.kind === activeFilter,
  );

  return (
    <section className="page">
      <header className="section-header">
        <h1>Works</h1>
        <p>Illustrations, photos, and mixed media pieces.</p>
      </header>

      <div className="filter-row">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={['pill', activeFilter === filter.id && 'pill-active']
              .filter(Boolean)
              .join(' ')}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {filtered.map((work) => (
          <article
            key={work.id}
            className="card work-card"
            role="button"
            tabIndex={0}
            onClick={() => setActiveWork(work)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setActiveWork(work);
              }
            }}
          >
            {work.image && (
              <div className="card-image">
                <img src={`/works/${work.image}`} alt={work.title} loading="lazy" />
              </div>
            )}
            <div className="card-body">
              <h2>{work.title}</h2>
              <p className="meta">
                <span>{work.medium}</span> · <span>{work.year}</span>
              </p>
              <p>{work.description}</p>
            </div>
          </article>
        ))}
      </div>

      {activeWork && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveWork(null)}
          role="presentation"
        >
          <div
            className="modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setActiveWork(null)}
              aria-label="Close"
            >
              ×
            </button>
            <h2>{activeWork.title}</h2>
            <p className="meta">
              <span>{activeWork.medium}</span> · <span>{activeWork.year}</span>
            </p>
            {activeWork.image && (
              <div className="modal-image">
                <img src={`/works/${activeWork.image}`} alt={activeWork.title} />
              </div>
            )}
            <p>{activeWork.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

