"use client";
import LoadingSpinner from "@/components/loading";
import ModalOverlay from "@/components/model";
import { changeFee, Level, ProgramData } from "@/lib/actions";
import { fmt } from "@/lib/components/resources";
import { Dispatch, SetStateAction, useState } from "react";

export default function EditFee({
  setEditFeeOpen,
  setProgram,
  program,
  faculty,
  level,
}: {
  setEditFeeOpen: Dispatch<SetStateAction<boolean>>;
  setProgram: Dispatch<SetStateAction<ProgramData[]>>;
  program: string;
  faculty: string;
  level: Level;
}) {
  const [editVal, setEditVal] = useState<string>();
  const [addErr, setAddErr] = useState<string>();
  const [loading, setLoading] = useState(false);

  const handleSaveFee = async () => {
    if (!editVal) return;
    setLoading(true);
    const res = await changeFee(program, Number(level.level), BigInt(editVal));
    setLoading(false);
    if (!res.success) return setAddErr(res.message);
    setProgram((prev) =>
      prev.map((pre) => {
        return {
          ...pre,
          levels: pre.levels.map((l) =>
            l.level === level.level
              ? {
                  ...l,
                  fee: BigInt(editVal),
                }
              : l,
          ),
        };
      }),
    );
    setEditFeeOpen(false);
  };
  return (
    <ModalOverlay close={true} setClose={setEditFeeOpen}>
      <div className="text-center mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl mx-auto mb-3">
          💰
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Edit Fee</h2>
        <p className="text-slate-400 text-sm mt-1 leading-relaxed">
          <span className="font-semibold text-blue-600">{program}</span>
          <br />
          {faculty} · {level.level} Level
        </p>
      </div>
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center mb-5">
        <div className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-semibold">
          Current Fee
        </div>
        <div className="text-2xl font-bold text-blue-700">{fmt(level.fee)}</div>
      </div>
      <label className="block text-xs font-bold text-blue-600 uppercase tracking-widest mb-1.5">
        New Amount (₦)
      </label>
      <input
        type="number"
        placeholder="e.g. 750000"
        value={editVal}
        onChange={(e) => setEditVal(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSaveFee()}
        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-400 text-slate-800 mb-5"
      />
      {addErr && <p className="text-red-500 text-sm mb-3">⚠ {addErr}</p>}

      <div className="flex gap-3">
        <button
          onClick={() => setEditFeeOpen(false)}
          className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition"
        >
          Cancel
        </button>
        <button
          disabled={loading}
          onClick={handleSaveFee}
          className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition shadow-lg shadow-blue-200"
        >
          {loading ? <LoadingSpinner /> : "Save Changes ✓"}
        </button>
      </div>
    </ModalOverlay>
  );
}
