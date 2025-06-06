import './globals.css';
import Nav from './components/Nav';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Matt Davis',
  description: 'A site with big Geocities energy',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif', background: '#f0f0f0' }}>
        <Nav />
        <main style={{ padding: '1rem' }}>{children}</main>
      </body>
    </html>
  );
}
