'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Button,
  Paper,
  alpha
} from '@mui/material';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <Box component="section" sx={{
      py: { xs: 8, md: 12 },
      background: (theme) => `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      color: 'white'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={4}>
              <Typography variant="h2" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
                Get Upto 10 Lakhs in Just 5 Minutes
              </Typography>
              <Typography variant="h5" sx={{ opacity: 0.9 }}>
                Fast, paperless loans with instant approval. No collateral needed.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 'bold', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
                  endIcon={<ArrowRight />}
                >
                  Apply Now
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white', fontWeight: 'bold' }}
                >
                  Learn More
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative' }}>
              <Box sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: 10 }}>
                <img
                  src="/images/happy-family.jpg"
                  alt="Happy family"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Box>
              <Box sx={{
                position: 'absolute',
                bottom: -20,
                left: -20,
                bgcolor: 'white',
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
                display: { xs: 'none', sm: 'block' }
              }}>
                <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold' }}>50,000+</Typography>
                <Typography variant="caption" color="text.secondary">Happy Families</Typography>
              </Box>
              <Box sx={{
                position: 'absolute',
                top: -20,
                right: -20,
                bgcolor: 'white',
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
                display: { xs: 'none', sm: 'block' }
              }}>
                <Typography variant="subtitle1" color="secondary" sx={{ fontWeight: 'bold' }}>4.9/5</Typography>
                <Typography variant="caption" color="text.secondary">Customer Rating</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
