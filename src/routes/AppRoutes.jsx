import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import ResumePage from '../pages/ResumePage';
import PortfolioPage from '../pages/PortfolioPage';
import PhotographyPage from '../pages/PhotographyPage';
import ContactPage from '../pages/ContactPage';
import AlbumViewPage from '../pages/AlbumViewPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<Layout />}>
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/photography/:location" element={<AlbumViewPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes; 