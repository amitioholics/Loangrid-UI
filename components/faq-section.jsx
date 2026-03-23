'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is a personal loan?',
    answer: 'A personal loan is an unsecured loan that you can use for any personal purpose. It is typically offered by banks and financial institutions without any collateral requirement.',
  },
  {
    question: 'How fast can I get a personal loan?',
    answer: 'With LoanGrid, you can get instant approval within minutes and receive funds in your account within 24 hours after approval and document verification.',
  },
  {
    question: 'What is the maximum loan amount I can get?',
    answer: 'You can get a personal loan of up to ₹10 Lakhs depending on your income, credit score, and employment status.',
  },
  {
    question: 'Do I need to provide any collateral?',
    answer: 'No, personal loans are unsecured loans and do not require any collateral. Your eligibility is based on your income, credit score, and employment history.',
  },
  {
    question: 'What documents do I need to provide?',
    answer: 'You will need basic documents like Aadhaar, PAN, bank statements, salary slips, and address proof. All documents can be uploaded digitally.',
  },
  {
    question: 'Can I prepay the loan without penalty?',
    answer: 'Yes, you can prepay your loan at any time without any prepayment penalty. This helps you save on interest.',
  },
];

export function FaqSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Frequently Asked Questions
          </Typography>
        </Box>

        <Box>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1, boxShadow: 'none', border: 1, borderColor: 'divider', '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ChevronDown color="#61C768" />}>
                <Typography sx={{ fontWeight: '600' }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ borderTop: 1, borderColor: 'divider', bgcolor: 'rgba(0,0,0,0.02)' }}>
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
