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
  Divider,
  Rating
} from '@mui/material';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    message: 'LoanGrid made it incredibly easy to get a business loan. The entire process was transparent and quick.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Software Engineer',
    message: 'I got approved for my home loan within 24 hours. The best interest rates I found in the market.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Entrepreneur',
    message: 'Outstanding customer service! They guided me through every step of the loan application.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            What Our Customers Say
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Join thousands of satisfied customers who've benefited from LoanGrid
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card sx={{ height: '100%', border: 1, borderColor: 'divider', boxShadow: 'none' }}>
                <CardContent sx={{ p: 4 }}>
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2, color: 'primary.main' }} />
                  <Typography variant="body1" sx={{ mb: 4, fontStyle: 'italic', color: 'text.secondary' }}>
                    "{testimonial.message}"
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{testimonial.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{testimonial.role}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
