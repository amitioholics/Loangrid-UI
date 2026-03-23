'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
  Divider
} from '@mui/material';

const benefits = [
  {
    icon: '⚡',
    title: 'Fastest Approvals',
    description: 'Get approved in just minutes with our streamlined digital process. No paperwork, no waiting.',
  },
  {
    icon: '📊',
    title: 'Best Interest Rates',
    description: 'Competitive rates starting from 8.5% p.a. Lowest in the market with transparent pricing.',
  },
  {
    icon: '📱',
    title: '100% Digital Process',
    description: 'Apply completely online from the comfort of your home. Instant approval and disbursement.',
  },
  {
    icon: '🔒',
    title: 'Completely Secure',
    description: 'Bank-level security with encrypted transactions and complete data protection.',
  },
  {
    icon: '🎯',
    title: 'Flexible Repayment',
    description: 'Choose your tenure and EMI amount. Flexible options to fit your budget perfectly.',
  },
  {
    icon: '👥',
    title: '24/7 Support',
    description: 'Round-the-clock customer support team ready to help you with any queries.',
  },
];

export function MarketingSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: (theme) => `linear-gradient(to bottom, ${theme.palette.secondary.light}11, ${theme.palette.background.default})` }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Why Choose LoanGrid?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            We're committed to providing the best lending experience with industry-leading rates and customer service.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Card sx={{
                height: '100%',
                border: 1,
                borderColor: 'divider',
                boxShadow: 'none',
                transition: '0.3s',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.02)' }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h2" sx={{ mb: 2 }}>{benefit.icon}</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>{benefit.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{benefit.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Special Offer Section */}
        <Box sx={{
          mt: 8,
          p: { xs: 4, md: 8 },
          textAlign: 'center',
          borderRadius: 4,
          border: 1,
          borderColor: 'primary.light',
          background: (theme) => `linear-gradient(to right, ${theme.palette.primary.light}33, ${theme.palette.secondary.light}33)`
        }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Special Offers This Month
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Get up to ₹5,000 cashback on your first loan application. Limited time offer!
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 4, sm: 8 }}
            justifyContent="center"
            alignItems="center"
            divider={<Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />}
          >
            <Box>
              <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>₹5,000</Typography>
              <Typography variant="body2" color="text.secondary">Instant Cashback</Typography>
            </Box>
            <Box>
              <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>0% Fee</Typography>
              <Typography variant="body2" color="text.secondary">Processing Charges</Typography>
            </Box>
            <Box>
              <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>Instant</Typography>
              <Typography variant="body2" color="text.secondary">Disbursement</Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
