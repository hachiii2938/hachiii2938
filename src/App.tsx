import { NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { SchoolPage } from './pages/School';
import { AboutPage } from './pages/About';
import { WorksPage } from './pages/Works';
import { GameUiPage } from './pages/GameUi';
import { BackgroundScene } from './components/BackgroundScene';

export default function App() {
  return (
    <div className="app-root">
      <BackgroundScene />
      <header className="app-header">
        <div className="brand">
          <span className="brand-mark">H</span>
          <span className="brand-text">Hachiii Portfolio</span>
        </div>
        <nav className="nav">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/school" className="nav-link">
            School Life
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About & Hobbies
          </NavLink>
          <NavLink to="/works" className="nav-link">
            Works
          </NavLink>
          <NavLink to="/game-ui" className="nav-link">
            Game UI
          </NavLink>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/school" element={<SchoolPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/game-ui" element={<GameUiPage />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <span>© {new Date().getFullYear()} Hachiii</span>
        <span className="footer-note">Built with React & GitHub Pages</span>
      </footer>
    </div>
  );
}

