import React from 'react';
import HeroSection from '@/components/organisms/Hero';
import AboutMe from '@/components/organisms/About';
import Projects from '@/components/organisms/Projects';
import Services from '@/components/organisms/Services';
import SocialFooter from '@/layout/SocialFooter';
import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <AboutMe />
      <Services />
      <SocialFooter />
    </>
  );
}
