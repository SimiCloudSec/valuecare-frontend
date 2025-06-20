import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Value Care Staffing',
  description: 'Professional Home Health Staffing Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <nav className="bg-white border-b shadow-sm px-6 py-4 flex justify-between sticky top-0 z-50">
          <Link href="/" className="text-xl font-bold text-blue-600">
            ValueCare
          </Link>
          <ul className="flex gap-4 text-sm text-gray-600">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/join">Join</Link></li>
            <li><Link href="/request">Request Staff</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <main className="px-6 pt-10 pb-20">{children}</main>
      </body>
    </html>
  );
}
