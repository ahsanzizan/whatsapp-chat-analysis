import { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WhatsApp Chat Analyzer by Ahsan Azizan",
  description:
    "A WhatsApp-exported .txt file analyzer with a couple of analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} antialiased`}>{children}</body>
    </html>
  );
}
