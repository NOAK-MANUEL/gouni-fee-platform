"use client";
import { FACULTIES } from "@/lib/components/faculties";
import { fmt, getLevels } from "@/lib/components/resources";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  interface adminType {
    username: string;
    email: string;
  }
  const [loggedAdmin, setLoggedAdmin] = useState<adminType | null>({
    username: "noak",
    email: "sooo",
  });
  const [addAdmin, setAddAdmin] = useState(false);
  const [openFaculty, setOpenFaculty] = useState<string | null>("");

  const totalProgs = Object.values(FACULTIES).reduce(
    (a, f) => a + Object.keys(f.programs).length,
    0,
  );
  useEffect(() => {}, []);

  return (
    loggedAdmin && (
      <div className="flex min-h-screen bg-slate-50">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-60 bg-white border-r border-slate-100 fixed top-0 left-0 h-full z-40">
          <div className="px-5 py-5 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm">
                G
              </div>
              <div>
                <div className="font-bold text-slate-800 text-sm">
                  GoUni Admin
                </div>
                <div className="text-slate-400 text-xs">Fees Management</div>
              </div>
            </div>
          </div>
          {/* <nav className="flex-1 px-3 py-4 space-y-1">
            {[
              { icon: "📊", l: "Dashboard" },
              { icon: "💰", l: "Manage Fees" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold ${i === 0 ? "bg-blue-50 text-blue-600" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"} cursor-default transition`}
              >
                {item.icon} {item.l}
              </div>
            ))}
          </nav> */}
          <div className="px-3 py-4 border-t border-slate-100 space-y-2">
            <div className="bg-blue-50 rounded-xl px-3 py-2.5">
              <div className="font-bold text-blue-700 text-sm">
                {loggedAdmin.username}
              </div>
              <div className="text-slate-400 text-xs truncate">
                {loggedAdmin.email}
              </div>
            </div>
            <button
              onClick={() => {
                setLoggedAdmin(null);
              }}
              className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-500 text-sm font-semibold hover:bg-slate-50 transition"
            >
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 md:ml-60 p-4 sm:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1
                className="font-extrabold text-slate-800"
                style={{
                  fontSize: "clamp(1.6rem,4vw,2.2rem)",
                  fontFamily: "'Playfair Display',serif",
                }}
              >
                Fees <span className="text-blue-600">Dashboard</span>
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                2025/2026 Academic Session
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setAddAdmin(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-full text-sm transition shadow-md shadow-blue-200 flex items-center gap-1.5"
              >
                <span className="text-base">+</span> Add Admin
              </button>
              <Link
                href={"/check-fees"}
                className="border border-slate-200 text-slate-600 hover:bg-slate-100 font-semibold px-5 py-2.5 rounded-full text-sm transition"
              >
                View Site ↗
              </Link>
              <button
                onClick={() => {
                  setLoggedAdmin(null);
                }}
                className="md:hidden border border-red-200 text-red-500 hover:bg-red-50 font-semibold px-5 py-2.5 rounded-full text-sm transition"
              >
                Sign Out
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                icon: "🏛️",
                label: "Faculties",
                value: Object.keys(FACULTIES).length,
                bg: "bg-blue-50",
                tc: "text-blue-600",
              },
              {
                icon: "📚",
                label: "Programmes",
                value: totalProgs,
                bg: "bg-sky-50",
                tc: "text-sky-600",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${s.bg} ${s.tc} flex items-center justify-center text-xl mb-3`}
                >
                  {s.icon}
                </div>
                <div
                  className="font-extrabold text-slate-800 text-2xl"
                  style={{ fontFamily: "'Playfair Display',serif" }}
                >
                  {s.value}
                </div>
                <div className="text-slate-400 text-xs uppercase tracking-wider mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Admin users table */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-6">
            <div className="px-5 sm:px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-bold text-slate-700">Admin Users</h2>

              <button
                onClick={() => setAddAdmin(true)}
                className="text-blue-600 hover:text-blue-800 text-sm font-bold flex items-center gap-1"
              >
                <span>+</span> Add New
              </button>
            </div>
          </div>

          {/* Fees management */}
          <div className="flex items-center gap-3 mb-4">
            <h2 className="font-bold text-slate-700 text-base sm:text-lg">
              Manage Fees by Programme
            </h2>
            <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full hidden sm:inline">
              Click a level button to edit
            </span>
          </div>

          <div className="space-y-3">
            {Object.entries(FACULTIES).map(([faculty, fData]) => {
              const isOpen = openFaculty === faculty;
              const levels = getLevels(faculty);
              return (
                <div
                  key={faculty}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaculty(isOpen ? null : faculty)}
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition text-left"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-lg flex-shrink-0">
                        {fData.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-slate-800 text-sm truncate">
                          {faculty}
                        </div>
                        <div className="text-slate-400 text-xs">
                          {Object.keys(fData.programs).length} programmes
                        </div>
                      </div>
                    </div>
                    <span
                      className={`text-blue-500 text-xl flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                    >
                      ›
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="border-t border-slate-100"
                      style={{ animation: "slideDown 0.25s ease" }}
                    >
                      <div className="overflow-x-auto">
                        <table
                          className="w-full"
                          style={{
                            minWidth:
                              Math.max(500, 240 + levels.length * 120 + 120) +
                              "px",
                          }}
                        >
                          <thead className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wider">
                            <tr>
                              <th className="text-left px-5 py-3 font-bold">
                                Programme
                              </th>
                              {levels.map((l) => (
                                <th
                                  key={l}
                                  className="text-right px-4 py-3 font-bold whitespace-nowrap"
                                >
                                  {l}L
                                </th>
                              ))}
                              <th className="text-center px-4 py-3 font-bold">
                                Edit
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-50">
                            {Object.entries(fData.programs).map(
                              ([prog, levelFees]) => (
                                <tr
                                  key={prog}
                                  className="hover:bg-blue-50/30 transition"
                                >
                                  <td className="px-5 py-3.5 text-sm font-medium text-slate-700 max-w-[200px]">
                                    <span
                                      className="block"
                                      style={{
                                        whiteSpace: "normal",
                                        wordBreak: "break-word",
                                      }}
                                    >
                                      {prog}
                                    </span>
                                  </td>
                                  {levels.map((l) => (
                                    <td
                                      key={l}
                                      className="px-4 py-3.5 text-sm text-right font-mono text-slate-600 whitespace-nowrap"
                                    >
                                      {levelFees[l] != null ? (
                                        fmt(levelFees[l])
                                      ) : (
                                        <span className="text-slate-200">
                                          —
                                        </span>
                                      )}
                                    </td>
                                  ))}
                                  <td className="px-4 py-3.5">
                                    <div className="flex gap-1.5 justify-center flex-wrap">
                                      {levels
                                        .filter((l) => levelFees[l] != null)
                                        .map((l) => (
                                          <button
                                            key={l}
                                            onClick={
                                              () => {}
                                              // openEditFee(faculty, prog, l)
                                            }
                                            className="bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-200 text-xs font-bold px-2.5 py-1 rounded-lg transition whitespace-nowrap"
                                          >
                                            {l}L
                                          </button>
                                        ))}
                                    </div>
                                  </td>
                                </tr>
                              ),
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center text-xs text-slate-300">
            GoUni Fees Portal Admin · {new Date().getFullYear()}
          </div>
        </main>
      </div>
    )
  );
}
