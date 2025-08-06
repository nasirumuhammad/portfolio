import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Portfolio | Muhammad",
  description:
    "Explore the developer portfolio of Muhammad Nasiru — showcasing full-stack projects, scalable APIs, modern UI design, and cross-platform mobile applications built with Next.js, React, and more.",
  icons: ["/handshake.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className}  antialiased`}>{children}</body>
    </html>
  );
}
