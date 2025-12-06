import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
    const { pathname } = React.useMemo(() => window.location, []);
  
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} /> {/* Fallback */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;