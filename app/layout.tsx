"use client";

import Link from "next/link";
import "../src/styles/globals.css";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const onClickUrl = (url: string) => {
    router.push(url);
  };

  return (
    <html>
      <head />
      <body>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/setting">Setting</Link>
          </li>
          <li>
            <Link href="/calculator">Calculator</Link>
          </li>
          <li>
            <Link href="/cari">Cari Orang</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
