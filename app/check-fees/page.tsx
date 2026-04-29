"use client";
import { getFaculties, getLevelsData, getPrograms } from "@/lib/actions";
import { fmt, OTHER_FEES } from "@/lib/components/resources";
import { useEffect, useState } from "react";

export default function FeesPage() {
  interface ResultType {
    tuition: bigint | null;
    lvl: number;
    other: number;
    total: bigint | number;
  }
  type Level = { fee: bigint; level: number };

  // const [selFaculty, setSelFaculty] = useState("");
  const [selProgram, setSelProgram] = useState("");
  const [selLevel, setSelLevel] = useState("");
  const [result, setResult] = useState<ResultType | null>();
  const [searched, setSearched] = useState(false);
  // const [faculties, setFaculties] = useState<string[]>([]);
  const [programs, setPrograms] = useState<string[]>([]);
  const [levels, setLevels] = useState<Level[]>([]);
  const handleSearch = () => {
    if (!selProgram || !selLevel) return;
    const lvl = parseInt(selLevel);
    const tuition = levels.find((level) => level.level === lvl)?.fee ?? null;
    const other = OTHER_FEES[lvl] ?? 0;
    setResult({
      tuition,
      other,
      total: tuition != null ? tuition + BigInt(other) : 0,
      lvl,
    });
    setSearched(true);
  };

  const otherRows = [
    { label: "Online Course Reg / ICT Fee", amount: 60000 },
    { label: "Faculty Fee", amount: 5000 },
    { label: "Departmental Fee", amount: 3000 },
    { label: "Library Fee", amount: 20000 },
    {
      label: "Medical & Drug Test Fee",
      amount: (parseInt(selLevel) || 0) >= 400 ? 20000 : 10000,
    },
    { label: "Parents' Forum Fee", amount: 10000 },
    { label: "Entrepreneurship Fee", amount: 7000 },
    { label: "Sports Levy", amount: 5000 },
    { label: "COHON Fee", amount: 4000 },
    { label: "Health Insurance", amount: 5000 },
    { label: "Sanitation", amount: 3000 },
    { label: "Community Service Levy", amount: 2000 },
    { label: "Bazaar Levy", amount: 1000 },
  ];
  useEffect(() => {
    // getFaculties().then((res) => {
    //   if (res.success) {
    //     setFaculties(res.faculties);
    //   }
    // });
    getPrograms().then((res) => {
      if (res.success) {
        setPrograms(res.programs);
        //  setSelFaculty(faculty);
        setSelProgram(res.programs[0]);
        setLevels(res.programData[0].levels);
        setSelLevel(res.programData[0].levels[0].level.toString());
      }
    });
  }, []);
  // const selectPrograms = (faculty: string) => {

  // };
  const selectLevel = (program: string) => {
    getLevelsData(program).then((res) => {
      if (res.success) {
        setLevels(res.levels);
        setSelProgram(program);
        setSelLevel(res.levels[0].level.toString());
      }
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div
          className="text-center mb-10"
          style={{ animation: "fadeUp 0.6s ease" }}
        >
          <span className="bg-blue-100 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            2025/2026 Session
          </span>
          <h1
            className="font-extrabold text-slate-800 mt-4 mb-2"
            style={{
              fontSize: "clamp(1.8rem,5vw,2.8rem)",
              fontFamily: "'Playfair Display',serif",
            }}
          >
            Fee Finder
          </h1>
          <p className="text-slate-500 text-sm sm:text-base">
            Select your faculty, programme, and level to view your complete fee
            breakdown.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 mb-6">
          <div className="grid sm:grid-cols-3 gap-6 mb-6 ">
            {/* <div>
              <label className="block text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                Faculty
              </label>
              <div className="relative">
                <select
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none pr-8"
                  value={selFaculty}
                  onChange={(e) => {
                    selectPrograms(e.target.value);
                    setSelProgram("");
                    setSelLevel("");
                    setLevels([]);
                    setResult(null);
                    setSearched(false);
                  }}
                >
                  <option value="">— Select Faculty —</option>
                  {faculties.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                  ▼
                </div>
              </div>
            </div> */}
            <div>
              <label className="block text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                Programme
              </label>
              <div className="relative">
                <select
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none pr-8 disabled:opacity-40 disabled:cursor-not-allowed"
                  value={selProgram}
                  onChange={(e) => {
                    selectLevel(e.target.value);
                    setResult(null);
                    setSearched(false);
                  }}
                  // disabled={!selFaculty}
                >
                  <option value="">— Select Program —</option>

                  {programs.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                  ▼
                </div>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                Level
              </label>
              <div className="relative">
                <select
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none pr-8 disabled:opacity-40 disabled:cursor-not-allowed"
                  value={selLevel}
                  onChange={(e) => {
                    setSelLevel(e.target.value);
                    setResult(null);
                    setSearched(false);
                  }}
                  disabled={!selProgram}
                >
                  {levels.map((l) => (
                    <option key={l.level} value={l.level}>
                      {l.level} Level
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                  ▼
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleSearch}
            disabled={!selProgram || !selLevel}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold px-10 py-3.5 rounded-full transition shadow-lg shadow-blue-200/50 text-sm"
          >
            Search Fees →
          </button>
        </div>

        {/* Result */}
        {searched && result && (
          <div
            style={{ animation: "scaleUp 0.4s cubic-bezier(0.34,1.56,0.64,1)" }}
          >
            {result.tuition === null ? (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-3">🔍</div>
                <p className="text-amber-700 font-semibold">
                  Fee data not available for this combination. Please contact
                  the Bursary office at <strong>08067160418</strong>.
                </p>
              </div>
            ) : (
              <>
                {/* Summary card */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 sm:p-8 text-white mb-4 shadow-xl shadow-blue-200/60">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <div className="text-blue-200 text-xs uppercase tracking-widest font-bold mb-1">
                        Fee Breakdown
                      </div>
                      <div
                        className="font-extrabold text-xl sm:text-2xl"
                        style={{ fontFamily: "'Playfair Display',serif" }}
                      >
                        {selProgram}
                      </div>
                      <div className="text-blue-200 text-sm mt-1">
                        {selLevel} Level
                      </div>
                    </div>
                    <div className="sm:text-right">
                      <div className="text-blue-200 text-xs uppercase tracking-widest font-bold mb-1">
                        Estimated Total
                      </div>
                      <div
                        className="font-extrabold text-3xl sm:text-4xl"
                        style={{ fontFamily: "'Playfair Display',serif" }}
                      >
                        {fmt(result.total)}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 border-t border-blue-500/40 pt-5">
                    <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                      <div className="text-blue-200 text-xs mb-1">
                        Tuition & Accommodation
                      </div>
                      <div className="font-bold text-base sm:text-lg">
                        {fmt(result.tuition)}
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                      <div className="text-blue-200 text-xs mb-1">
                        Other Fees
                      </div>
                      <div className="font-bold text-base sm:text-lg">
                        {fmt(result.other)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Breakdown table */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-4">
                  <div className="px-5 sm:px-6 py-4 border-b border-slate-100">
                    <h3 className="font-bold text-slate-700 text-sm">
                      Other Fees Breakdown
                    </h3>
                    <p className="text-slate-400 text-xs mt-0.5">
                      Standard levies applicable to {selLevel} Level students
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full" style={{ minWidth: 380 }}>
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="text-left px-5 sm:px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Fee Item
                          </th>
                          <th className="text-right px-5 sm:px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {otherRows.map((r, i) => (
                          <tr
                            key={i}
                            className="hover:bg-blue-50/40 transition"
                          >
                            <td className="px-5 sm:px-6 py-3 text-sm text-slate-600">
                              {r.label}
                            </td>
                            <td className="px-5 sm:px-6 py-3 text-sm text-slate-800 font-semibold text-right whitespace-nowrap">
                              {fmt(r.amount)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800 leading-relaxed mb-3">
                  <strong>⚠ Payment Note:</strong> Fees are sessional (yearly).
                  60% can be paid in 1st semester; 40% balance within 3 months.
                  Additional professional fees (Lab, ICAN, DNALC, etc.) may
                  apply. Pay only via the official{" "}
                  <a
                    href="https://student.erp.gouni.edu.ng/payment/generate-invoice"
                    target="_blank"
                    className="underline font-semibold"
                  >
                    GOUNI ERP
                  </a>
                  .
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 text-sm text-red-700 leading-relaxed">
                  <strong>⛔ Disclaimer:</strong> Godfrey Okoye University
                  mandates payment through the official ERP only. Never pay to
                  any personal account.
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
