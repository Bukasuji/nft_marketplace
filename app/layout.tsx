import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import StoreProvider from './StoreProvider';


const inter = Inter({ subsets: ["latin"],
  variable:'--font-inter'
 });

const sora = Sora({ subsets: ['latin'],
  weight: ['400','600', '700'],
   variable:'--font-sora' 
}); 

export const metadata: Metadata = {
  title: "Nft marketplace",
  description: "an nft marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${sora.variable}`}>
          <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}


