import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Polar vs Nonpolar | Chemistry Explorer',
  description: 'Interactive explanation of polar and nonpolar molecules with examples and a polarity playground.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-wrapper">
          <header className="site-header">
            <div className="container">
              <h1 className="brand">Chemistry Explorer</h1>
              <nav>
                <a href="#overview">Overview</a>
                <a href="#examples">Examples</a>
                <a href="#playground">Playground</a>
                <a href="#faq">FAQ</a>
              </nav>
            </div>
          </header>
          <main className="container">{children}</main>
          <footer className="site-footer">
            <div className="container">
              <p>Built for fast learning. Deployed on Vercel.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
