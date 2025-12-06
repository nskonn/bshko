import React, { useState } from 'react';
import RegistrationModal from '../components/RegistrationModal';
import HomeNavbar from '../components/home/HomeNavbar';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import StatsSection from '../components/home/StatsSection';
import DirectionsSection from '../components/home/DirectionsSection';
import AdmissionInfoSection from '../components/home/AdmissionInfoSection';
import BlogSection from '../components/home/BlogSection';
import TeachersSection from '../components/home/TeachersSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import RegistrationSection from '../components/home/RegistrationSection';
import FaqSection from '../components/home/FaqSection';
import ContactsSection from '../components/home/ContactsSection';
import HomeFooter from '../components/home/HomeFooter';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-slate-800 selection:bg-amber-100 selection:text-amber-900">
      {/* Import Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap');
        .font-heading { fontFamily: 'Montserrat', sans-serif; }
        .font-sans { fontFamily: 'Inter', sans-serif; }
        .glass-card { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); }
      `}} />

      {/* Navigation */}
      <HomeNavbar onOpenModal={() => setShowModal(true)} />

      {/* MODAL WINDOW */}
      <RegistrationModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Hero Section */}
      <HeroSection onOpenModal={() => setShowModal(true)} />

      {/* Stats Section (Moved here to overlap Hero) */}
      <StatsSection />

      {/* About School Section */}
      <AboutSection />

      {/* Main Directions (Cards) */}
      <DirectionsSection />

      {/* Info for Applicants */}
      <AdmissionInfoSection />

      {/* Featured Content / Blog */}
      <BlogSection />

      {/* Teachers Section */}
      <TeachersSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Registration Section */}
      <RegistrationSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Contacts Section */}
      <ContactsSection />

      {/* Footer */}
      <HomeFooter />
    </div>
  );
};

export default Home;