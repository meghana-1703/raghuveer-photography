import "./globals.css";
import { Cormorant_SC } from "next/font/google";

const cormorant = Cormorant_SC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Raghuveer Photography | Cinematic Wedding Photographer in Hanamkonda, Hyderabad",
  description:
    "6 years of professional photography experience. Specialised in Cinematic Weddings, Pre-Wedding, Maternity Shoots, Portraits & Corporate Photography.",
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









