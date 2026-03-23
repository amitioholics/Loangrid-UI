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
  Stack
} from '@mui/material';

const eligibilityCriteria = [
  {
    icon: '👤',
    title: 'Age',
    description: '21-60 yrs',
  },
  {
    icon: '💼',
    title: 'Salaried',
    description: '₹12,000 per month',
  },
  {
    icon: '📊',
    title: 'Credit Score',
    description: '+650',
  },
];

export function EligibilitySection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'primary.light', opacity: 0.9 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Eligibility Criteria for Personal Loan
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            Loan eligibility can vary based on lenders' credit risk policies. Here are some criteria that may influence approval.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
          {eligibilityCriteria.map((criteria, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index} sx={{ maxWidth: 300 }}>
              <Card sx={{ textAlign: 'center', border: 0, boxShadow: 'none', '&:hover': { boxShadow: 2 } }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h2" sx={{ mb: 2 }}>{criteria.icon}</Typography>
                  <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'text.secondary', display: 'block', mb: 1 }}>
                    {criteria.title}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {criteria.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Button variant="contained" size="large" color="primary" sx={{ px: 4, py: 1.5, fontWeight: 'bold' }}>
            Check Eligibility
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
