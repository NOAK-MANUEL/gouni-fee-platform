"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [loggedAdmin, setLoggedAdmin] = useState(false);
  const links = [
    { id: "/", label: "Home" },
    { id: "check-fees", label: "Check Fees" },
    { id: loggedAdmin ? "admin" : "auth/admin-login", label: "Admin" },
  ];
  const page = usePathname();
  const active = (id: string) => page === id;
  useEffect(() => {}, [page]);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm shadow">
            G
          </div>
          <span className="font-bold text-slate-800 text-sm sm:text-base">
            GoUni Fees Portal
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.id}
              href={`/${l.id}`}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${active(l.id) ? "bg-blue-600 text-white shadow" : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          onClick={() => setOpen(!open)}
        >
          <div className="w-5 space-y-1">
            <div className="h-0.5 bg-slate-600 rounded" />
            <div className="h-0.5 bg-slate-600 rounded" />
            <div className="h-0.5 bg-slate-600 rounded" />
          </div>
        </button>
      </div>
      {open && (
        <div
          className="md:hidden bg-white border-t border-slate-100 px-4 py-3 space-y-1"
          style={{ animation: "slideDown 0.2s ease" }}
        >
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => {
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition ${active(l.id) ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-blue-50"}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
