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
import { Check } from 'lucide-react';

export function DashboardHero() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 8, md: 12 } }}>
      {/* Background gradient */}
      <Box sx={{
        position: 'absolute',
        inset: 0,
        background: (theme) => `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)} 0%, ${theme.palette.background.default} 50%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
        zIndex: 0
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ display: 'inline-block', mb: 2, px: 2, py: 1, bgcolor: 'primary.light', borderRadius: 10, opacity: 0.8 }}>
              <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                Welcome back, User! 👋
              </Typography>
            </Box>

            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3, lineHeight: 1.2 }}>
              Your Financial Success Starts Here
            </Typography>

            <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 500, lineHeight: 1.6 }}>
              Get instant access to loans up to 10 lakhs with competitive interest rates, zero processing fees, and approval in just minutes.
            </Typography>

            {/* Quick Stats */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {[
                { label: 'Happy Customers', value: '50K+' },
                { label: 'Loans Disbursed', value: '₹500 Cr' },
                { label: 'Fast Approval', value: '2 mins' }
              ].map((stat, i) => (
                <Grid size={{ xs: 4 }} key={i}>
                  <Paper variant="outlined" sx={{ p: 2, textAlign: 'center', bgcolor: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(4px)' }}>
                    <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>{stat.value}</Typography>
                    <Typography variant="caption" color="text.secondary">{stat.label}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            {/* Key Points */}
            <Stack spacing={2} sx={{ mb: 4 }}>
              {[
                'Get approved instantly without any paperwork',
                'Flexible repayment options from 12 to 60 months',
                'Best interest rates starting from 9.99% p.a.'
              ].map((point, i) => (
                <Stack direction="row" spacing={1.5} alignItems="center" key={i}>
                  <Check size={20} color="#61C768" />
                  <Typography variant="body1">{point}</Typography>
                </Stack>
              ))}
            </Stack>

            {/* CTA Buttons */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained" size="large" color="primary">Apply Now</Button>
              <Button variant="outlined" size="large" color="primary">Check Eligibility</Button>
            </Stack>
          </Grid>

          {/* Right Visual */}
          <Grid size={{ xs: 12, lg: 6 }} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Box sx={{ position: 'relative' }}>
              <Box sx={{
                p: 4,
                borderRadius: 4,
                border: 1,
                borderColor: 'primary.light',
                background: (theme) => `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.2)}, ${alpha(theme.palette.secondary.main, 0.1)})`
              }}>
                <Stack spacing={3}>
                  {[
                    { icon: '📱', title: '100% Digital', desc: 'Apply from home' },
                    { icon: '⚡', title: 'Instant Approval', desc: 'In 2-5 minutes' },
                    { icon: '🎯', title: 'Best Rates', desc: 'Starting 9.99% p.a.' }
                  ].map((item, i) => (
                    <Paper key={i} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, bgcolor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(4px)' }}>
                      <Box sx={{ width: 48, height: 48, bgcolor: 'primary.light', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
                        <Typography variant="caption" color="text.secondary">{item.desc}</Typography>
                      </Box>
                    </Paper>
                  ))}
                </Stack>
              </Box>

              {/* Decorative blobs */}
              <Box sx={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, bgcolor: 'primary.light', borderRadius: '50%', filter: 'blur(60px)', zIndex: -1, opacity: 0.5 }} />
              <Box sx={{ position: 'absolute', bottom: -40, left: -40, width: 160, height: 160, bgcolor: 'secondary.light', borderRadius: '50%', filter: 'blur(60px)', zIndex: -1, opacity: 0.5 }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
