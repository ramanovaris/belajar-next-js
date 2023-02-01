"use client";

import Link from "next/link";
import "../src/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const menuItem = (url: string, title: string, className?: string) => (
    <Link className="no-underline" href={url}>
      <div className={`bg-black text-white py-2 px-3 rounded-lg ${className}`}>{title}</div>
    </Link>
  );

  return (
    <html>
      <head />
      <body className="container mx-auto py-[10px]">
        {/* Menu */}
        <div className="inline-flex w-full">
          {menuItem("/", "Home", "bg-white text-blue-500 text-lg")}
          <div className="inline-flex justify-end space-x-3 w-full">
            {menuItem("/dashboard", "Dashboard")}
            {menuItem("/setting", "Setting")}
            {menuItem("/calculator", "Calculator")}
            {menuItem("/cari", "Cari")}
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
