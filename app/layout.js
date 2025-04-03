import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import {Inter} from 'next/font/google'
import { Header } from "@/components/Header";

const inter = Inter({subsets:['latin']})

export const metadata = {
  title: "Welth",
  description: "AI Powered Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    // Warp the whole HTML with ClerkProvider
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >

        {/* Header */}
      <Header/>
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-blue-50 py-4">
        <p className="container mx-auto px-4 text-center text-gray-800 font-bold">
        Made with 💗 By <a href="" target="_blank">Uday Sharma</a>
        </p>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
