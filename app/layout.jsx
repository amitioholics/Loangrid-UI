import { Providers } from '@/components/providers';
import './globals.css';

export const metadata = {
    title: 'LoanGrid - Get Instant Loans Up to 10 Lakhs',
    description: 'Fast, paperless personal loans up to 10 lakhs. Get approved in minutes with LoanGrid - the trusted loan solution.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
