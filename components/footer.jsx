'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  Divider
} from '@mui/material';

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ mb: 6 }}>
          {/* Company Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
              <Box sx={{
                width: 32,
                height: 32,
                bgcolor: 'white',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'primary.main',
                fontWeight: 'bold'
              }}>L</Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>LoanGrid</Typography>
            </Stack>
            <Typography variant="body2" sx={{ opacity: 0.8, maxWidth: 300 }}>
              Trusted loan solutions for millions of customers across India.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>Product</Typography>
            <Stack spacing={1}>
              {['Personal Loans', 'Business Loans', 'Eligibility'].map((link) => (
                <Link key={link} href="#" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>
                  <Typography variant="body2" sx={{ '&:hover': { opacity: 1 } }}>{link}</Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Support */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>Support</Typography>
            <Stack spacing={1}>
              {['Contact Us', 'FAQ', 'Privacy Policy'].map((link) => (
                <Link key={link} href="#" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>
                  <Typography variant="body2" sx={{ '&:hover': { opacity: 1 } }}>{link}</Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Social Links */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>Follow us</Typography>
            <Stack direction="row" spacing={2}>
              {['f', '𝕏', 'in'].map((social) => (
                <IconButton
                  key={social}
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
                  }}
                >
                  <Typography variant="body2">{social}</Typography>
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 4 }} />
        <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.7 }}>
          © 2024 LoanGrid. All rights reserved. | Terms & Conditions | Privacy Policy
        </Typography>
      </Container>
    </Box>
  );
}
