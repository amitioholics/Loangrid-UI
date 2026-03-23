'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Stack
} from '@mui/material';

const features = [
  {
    icon: '⚡',
    title: 'Instant Loan Approval',
    description: 'Get approved within minutes with our quick assessment process.',
  },
  {
    icon: '📋',
    title: 'Competitive Interest Rates',
    description: 'Starting from 12.25% interest rates that are designed to be affordable.',
  },
  {
    icon: '📱',
    title: '100% Paperless',
    description: 'Complete the entire process digitally without any physical paperwork.',
  },
  {
    icon: '💳',
    title: 'Easy Digital Process',
    description: 'Simple and intuitive interface for a seamless loan application.',
  },
  {
    icon: '✅',
    title: 'Instant Disbursal',
    description: 'Funds transferred directly to your account within 24 hours.',
  },
  {
    icon: '🔒',
    title: 'Safe & Secure Credit System',
    description: 'Bank-grade security for all your financial information and data.',
  },
];

export function FeaturesSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Trusted Loan Solution with LoanGrid
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            Experience the fastest and most transparent lending process with our advanced technology and customer-centric approach.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Card sx={{
                height: '100%',
                p: 2,
                border: 1,
                borderColor: 'divider',
                boxShadow: 'none',
                '&:hover': { boxShadow: 4, transform: 'translateY(-4px)' },
                transition: '0.3s'
              }}>
                <CardContent>
                  <Typography variant="h2" sx={{ mb: 2 }}>{feature.icon}</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
