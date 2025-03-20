import { Poppins } from "next/font/google"; // Import Poppins font
import "./globals.css";
import Navbar from "./Module/Navbar";
import Footer from "./Module/Footer";
import Script from "next/script";

// Load Poppins font with specific weights (e.g., 400 and 700) and subsets
const poppins = Poppins({
  variable: "--font-poppins", // Custom variable name for the font
  weight: ["400", "700"], // Define font weights (normal and bold)
  subsets: ["latin"], // Use the latin subset
});

export const metadata = {
  title: "Best Resort in Gazipur Bangladesh | Turag Waterfront Resort",
  description:
    "Our eco-friendly resort in Gazipur features cozy cottages, river-view rooms, authentic Bangladeshi cuisine, playgrounds, fishing ponds, and recreational lakes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="G0hd8hYMXK5n2nwBw7HXbHT8JXabFgoQRlfJ6OJsO9A"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EY16V9T8CW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EY16V9T8CW');
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
