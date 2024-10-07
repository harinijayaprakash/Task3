import React from 'react';
import { ServicesSection,  TestimonialsSection, Footer } from './Sections';
import DashboardPreview from './DashboardPreview';
import { ThemeToggle } from './Common';

import LoginPage from './LoginPage';
import { Button } from './Common';
import HeroSection from './HeroSection';
import ClientGathering from './ClientGathering';
import Header from './Header';


const LandingPage = ({ }) => {
  return (
    <div>
     
      
      <Header/>
      <HeroSection/>
      <ClientGathering/>
      <ServicesSection />
      <DashboardPreview/>
      <TestimonialsSection />
      <Footer />
     
    </div>
  );
};

export default LandingPage;
