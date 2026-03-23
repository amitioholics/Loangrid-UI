'use client';

import React from 'react';
import { Box } from '@mui/material';
import { DashboardNav } from '@/components/dashboard-nav';
import { DashboardHero } from '@/components/dashboard-hero';
import { LoanProducts } from '@/components/loan-products';
import { MarketingSection } from '@/components/marketing-section';
import { ComparisonSection } from '@/components/comparison-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { Footer } from '@/components/footer';

export default function DashboardPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <DashboardNav />
      <Box component="main">
        <DashboardHero />
        <LoanProducts />
        <MarketingSection />
        <ComparisonSection />
        <TestimonialsSection />
      </Box>
      <Footer />
    </Box>
  );
}
