'use client';
import Notifier from '@/components/functions/Notifier';
import ScrollToTop from '@/components/functions/ScrollToTop';
import Footer from '@/components/partials/Footer';
import Header from '@/components/partials/Header';
import RenderMain from '@/components/partials/Main';
import AboutPage from '@/components/ui/include/AboutSection';
import HeroSection from '@/components/ui/include/HeroSection';
import ProjectSection from '@/components/ui/include/ProjectSection';
import React from 'react';

import CallToAction from '@/components/ui/layout/CallToAction';
import { StoreContext } from '../global/store/StoreContext';

export default function Home() {
  const { store } = React.useContext(StoreContext);
  return (
    <main className='relative'>
      <Header />
      <RenderMain>
        <HeroSection />
        <AboutPage />
        <ProjectSection />
        <CallToAction />
      </RenderMain>

      <Footer />
      <ScrollToTop />

      {store.success && <Notifier />}
    </main>
  );
}
