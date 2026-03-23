'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

export function ComparisonSection() {
  const rows = [
    { feature: 'Interest Rate', loangrid: 'From 8.5%', bankA: 'From 10.5%', bankB: 'From 12%' },
    { feature: 'Processing Fee', loangrid: '0%', bankA: '2%', bankB: '3%' },
    { feature: 'Approval Time', loangrid: 'Minutes', bankA: '2-3 Days', bankB: '5-7 Days' },
    { feature: 'Digital Process', loangrid: '✓ 100%', bankA: '✗ Partial', bankB: '✗ Minimal' },
    { feature: 'Customer Support', loangrid: '24/7 Online', bankA: 'Business Hours', bankB: 'Business Hours' },
    { feature: 'Loan Amount', loangrid: 'Up to ₹1 Crore', bankA: 'Up to ₹50 Lakhs', bankB: 'Up to ₹75 Lakhs' },
  ];

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: (theme) => `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.secondary.light}11)` }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Why LoanGrid Beats the Competition
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Compare our rates and features with other lenders
          </Typography>
        </Box>

        <TableContainer component={Paper} elevation={0} sx={{ border: 1, borderColor: 'divider', borderRadius: 2 }}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow sx={{ borderBottom: 2, borderColor: 'primary.main' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>Features</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', color: 'primary.main' }}>LoanGrid</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>Bank A</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>Bank B</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    bgcolor: index % 2 === 0 ? 'rgba(32, 146, 78, 0.03)' : 'inherit',
                    '&:last-child td, &:last-child th': { border: 0 }
                  }}
                >
                  <TableCell component="th" scope="row" sx={{ fontWeight: '600' }}>
                    {row.feature}
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'primary.main', fontWeight: 'bold' }}>{row.loangrid}</TableCell>
                  <TableCell align="center" color="text.secondary">{row.bankA}</TableCell>
                  <TableCell align="center" color="text.secondary">{row.bankB}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
