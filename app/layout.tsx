import "./globals.css";
import { Cormorant_SC } from "next/font/google";

const cormorant = Cormorant_SC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
export const metadata = {
  verification: {
    google: "Gn8du1nZDsuSZsy7ujV-2rRhdiyTp4N2lfNEevoUcOE",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cormorant.className}>
      <body>{children}</body>
    </html>
  );
}









