import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
// comm
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanket Rannore | Frontend Developer",
  description: "Sanket Rannore's portfolio showcasing expertise in React JS, Next JS, and modern frontend development.",
  keywords:
    "Sanket Rannore, Frontend Developer, React JS, React Native, Redux, Redux Toolkit, Tailwind CSS, React Router, JavaScript, TypeScript, HTML, CSS, Git, Material UI, Next JS, UI/UX Design, Web Development, Mobile App Development",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/next.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
