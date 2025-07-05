import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test Project",
  description: "Just trying out react, tailwind and typescript for the first",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

          <header>
          <nav>
            <ul>
              <li>Home</li>
              <li>Work</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>


      </body>
    </html>
  );
}



