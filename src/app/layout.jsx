import { Poppins } from 'next/font/google'; // Import Poppins from next/font/google
import './globals.css';
import Navbar from './Module/Navbar';
import Footer from './Module/Footer';

// Load Poppins font with specific weights (e.g., 400 and 700) and subsets
const poppins = Poppins({
  variable: '--font-poppins', // Custom variable name for the font
  weight: ['400', '700'], // Define font weights (normal and bold)
  subsets: ['latin'], // Use the latin subset
});

export const metadata = {
  title: 'Turag Waterfront Resort',
  description: 'A resort by nature',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
