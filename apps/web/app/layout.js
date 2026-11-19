import './globals.css';

export const metadata = {
  title: 'Moneyframe — Amahirwe yo kuri internet',
  description: 'Shakisha imirimo mito, serivisi n’ubumenyi bigufasha gutera imbere.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="rw">
      <body>{children}</body>
    </html>
  );
}
