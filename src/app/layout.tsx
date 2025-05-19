import "./globals.css";

import type {Metadata} from "next";
import Symbol from "@assets/symbol.svg";

export const metadata: Metadata = {
  title: "Real Teeth",
  description: "real teeth",
  icons: {
    icon: [
      {rel: "icon", url: "/icons/favicon.ico"},
      {rel: "icon", sizes: "144x144", url: "/icons/icon-144.png"},
    ],
    apple: [{url: "/icons/apple-touch-icon.png"}],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <main className="min-h-screen min-w-screen">{children}</main>
        <Symbol style={{display: "none"}} />
      </body>
    </html>
  );
}
