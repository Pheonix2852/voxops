import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "@/trpc/client";

const interHeading = Inter({ subsets: ["latin"], variable: "--font-heading" });

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VoxOps",
    template: "%s | VoxOps",
  },
  description: "AI Powered TTS for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <TRPCReactProvider>
        <html
          lang="en"
          className={cn("font-sans", dmSans.variable, interHeading.variable)}
          suppressContentEditableWarning
        >
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            {children}
            <Toaster />
          </body>
        </html>
      </TRPCReactProvider>
    </ClerkProvider>
  );
}
