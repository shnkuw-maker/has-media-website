export const metadata = {
  title: "HAS MEDIA",
  description: "شركة هاس ميديا للدعاية والإعلان",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
