import "./globals.css";

export const metadata = {
  title: "HAS MEDIA",
  description: "HAS MEDIA Kuwait",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
