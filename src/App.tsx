import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Applicants from './pages/Applicants';
import PreachersClub from './pages/PreachersClub';
import BookClub from './pages/BookClub';
import BackToTopButton from './shared/hooks/BackToTopButton.tsx';

// ScrollToTop component to reset scroll on route change or scroll to hash
const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
  
    React.useEffect(() => {
      if (!hash) {
        window.scrollTo(0, 0);
      } else {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Retry for cases where content might load slightly later
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }, [pathname, hash]);
  
    return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <BackToTopButton />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/applicants" element={<Applicants />} />
          <Route path="/preachers-club" element={<PreachersClub />} />
          <Route path="/book-club" element={<BookClub />} />
          <Route path="*" element={<Home />} /> {/* Fallback */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;