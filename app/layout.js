import './globals.css';

export const metadata = {
  title: 'DevBoost',
  description: 'A JavaScript-native dev loop experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
