import "./globals.css";

export const metadata = {
  title: "PRISM — Adaptive Chemistry Learning",
  description: "Master chemistry through AI-powered adaptive learning. Personalized questions, real-time performance tracking, and intelligent study paths.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
