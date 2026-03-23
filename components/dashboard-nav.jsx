'use client';

import React from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Stack
} from '@mui/material';

export function DashboardNav() {
  return (
    <AppBar position="sticky" color="inherit" elevation={1} sx={{ bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Box sx={{
              width: 32,
              height: 32,
              bgcolor: 'primary.main',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold'
            }}>L</Box>
            <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 'bold', display: { xs: 'none', sm: 'block' } }}>
              LoanGrid
            </Typography>
          </Link>

          {/* Navigation */}
          <Stack direction="row" spacing={3} alignItems="center">
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'text.primary' } }}>
                Home
              </Typography>
            </Link>
            <Link href="/dashboard" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                Loans
              </Typography>
            </Link>
          </Stack>

          {/* User Menu */}
          <Stack direction="row" spacing={2}>
            <Button variant="text" color="inherit">Profile</Button>
            <Button variant="outlined" color="inherit">Logout</Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
