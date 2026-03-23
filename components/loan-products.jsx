'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  Divider
} from '@mui/material';

const loans = [
  {
    id: 1,
    title: 'Personal Loan',
    description: 'Quick personal loans for your immediate needs with flexible repayment options.',
    amount: 'Up to ₹10 Lakhs',
    rate: 'Starting from 12.25%',
    tenure: '12-60 months',
    icon: '👤',
  },
  {
    id: 2,
    title: 'Home Loan',
    description: 'Affordable home loans to help you own your dream home with competitive rates.',
    amount: 'Up to ₹50 Lakhs',
    rate: 'Starting from 8.5%',
    tenure: '5-20 years',
    icon: '🏠',
  },
  {
    id: 3,
    title: 'Auto Loan',
    description: 'Finance your vehicle purchase with hassle-free approval and quick disbursement.',
    amount: 'Up to ₹25 Lakhs',
    rate: 'Starting from 9.99%',
    tenure: '12-84 months',
    icon: '🚗',
  },
  {
    id: 4,
    title: 'Business Loan',
    description: 'Grow your business with our competitive business loan options and expert support.',
    amount: 'Up to ₹1 Crore',
    rate: 'Starting from 11.5%',
    tenure: '12-84 months',
    icon: '💼',
  },
  {
    id: 5,
    title: 'Education Loan',
    description: 'Invest in your future with affordable education loans for higher studies.',
    amount: 'Up to ₹30 Lakhs',
    rate: 'Starting from 10.5%',
    tenure: '12-120 months',
    icon: '🎓',
  },
  {
    id: 6,
    title: 'Wedding Loan',
    description: 'Plan your dream wedding with flexible wedding loan options and easy EMI.',
    amount: 'Up to ₹15 Lakhs',
    rate: 'Starting from 13.5%',
    tenure: '12-60 months',
    icon: '💍',
  },
];

export function LoanProducts() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Our Loan Products
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            Choose from a wide range of loan products tailored to your financial needs. Quick approvals and best market rates.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {loans.map((loan) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={loan.id}>
              <Card sx={{
                height: '100%',
                border: 1,
                borderColor: 'divider',
                boxShadow: 'none',
                transition: '0.3s',
                '&:hover': { boxShadow: 4, transform: 'translateY(-4px)' }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h2" sx={{ mb: 2 }}>{loan.icon}</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>{loan.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>{loan.description}</Typography>

                  <Divider sx={{ mb: 3 }} />

                  <Stack spacing={2} sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">Loan Amount</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{loan.amount}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">Interest Rate</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>{loan.rate}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">Tenure</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{loan.tenure}</Typography>
                    </Box>
                  </Stack>

                  <Button fullWidth variant="contained" color="primary" sx={{ fontWeight: 'bold' }}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
