import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test Github Actions deployment",
  description:
    "Understanding SSL connection details between Github Actions and Vercel platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-purple-100 dark:bg-black">{children}</body>
    </html>
  );
}
