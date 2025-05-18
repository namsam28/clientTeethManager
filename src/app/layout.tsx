import "./globals.css";

import type {Metadata} from "next";
import Symbol from "@assets/symbol.svg";

export const metadata: Metadata = {
  title: "Real Teeth",
  description: "real teeth",
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
