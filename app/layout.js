
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const inter = Pixelify_Sans({
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Virtual Job Fair",
  description: "Helping employers and prospective employees meet face-to-face in the modern world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
