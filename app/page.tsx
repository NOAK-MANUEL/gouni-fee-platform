import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50 pt-16 pb-24 px-4 sm:px-6">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle,#93c5fd 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-200/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl pointer-events-none" />
        <div
          className="relative max-w-4xl mx-auto text-center"
          style={{ animation: "fadeUp 0.7s ease" }}
        >
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            {new Date().getFullYear() - 1}/{new Date().getFullYear()} Academic
            Session
          </span>
          <h1
            className="font-extrabold text-slate-900 leading-tight mb-6"
            style={{
              fontSize: "clamp(2.2rem,6vw,3.8rem)",
              fontFamily: "'Playfair Display',Georgia,serif",
            }}
          >
            Find Your <span className="text-blue-600 italic">Exact Fees</span>
            <br />
            Instantly
          </h1>
          <p
            className="text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontSize: "clamp(1rem,2.5vw,1.2rem)" }}
          >
            The official fee checker for Godfrey Okoye University students.
            Search your tuition by faculty, programme, and level — accurate,
            fast, and always up to date.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Link
              href={"/check-fees"}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-blue-200 transition text-sm sm:text-base"
            >
              Check My Fees →
            </Link>
            <a
              href="https://gouni.edu.ng"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 font-bold px-8 py-3.5 rounded-full transition text-sm sm:text-base inline-block"
            >
              Visit GOUNI ↗
            </a>
          </div>
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-400 text-xs px-5 py-2.5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Fees updated · {new Date().getFullYear() - 1}/
            {new Date().getFullYear()} session
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              { v: "8", l: "Faculties" },
              { v: "50+", l: "Programmes" },
              {
                v: `${new Date().getFullYear() - 1}/${new Date().getFullYear()}`,
                l: "Session",
              },
              { v: "100%", l: "Official Data" },
            ].map((s, i) => (
              <div
                key={i}
                className={`py-7 px-4 text-center ${i > 0 ? "border-l border-blue-500/40" : ""}`}
              >
                <div
                  className="text-2xl sm:text-3xl font-extrabold"
                  style={{ fontFamily: "'Playfair Display',serif" }}
                >
                  {s.v}
                </div>
                <div className="text-blue-200 text-xs uppercase tracking-widest mt-1 font-medium">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Simple Process
          </span>
          <h2
            className="font-extrabold text-slate-800 mt-5"
            style={{
              fontSize: "clamp(1.8rem,4vw,2.5rem)",
              fontFamily: "'Playfair Display',serif",
            }}
          >
            Three Steps to Your Fee Details
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              n: "01",
              t: "Select Faculty",
              d: "Choose your faculty from the eight available at GOUNI.",
            },
            {
              n: "02",
              t: "Pick Programme & Level",
              d: "Select your specific programme and academic level (100–600).",
            },
            {
              n: "03",
              t: "View Your Fees",
              d: "Get a full fee breakdown — tuition, accommodation, and all levies.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div
                className="text-5xl font-extrabold text-blue-100 mb-4"
                style={{ fontFamily: "'Playfair Display',serif" }}
              >
                {s.n}
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">{s.t}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: "🔍",
              t: "Instant Search",
              d: "Find your exact fees in seconds.",
            },
            {
              icon: "📊",
              t: "Full Breakdown",
              d: "Tuition, accommodation & all levies.",
            },
            {
              icon: "🔒",
              t: "Always Current",
              d: "Managed by authorised GOUNI admins.",
            },
            {
              icon: "📱",
              t: "Mobile Friendly",
              d: "Works on phone, tablet, or desktop.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h4 className="font-bold text-slate-800 mb-1.5 text-sm">{f.t}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 sm:p-14 text-center shadow-2xl shadow-blue-200">
          <h2
            className="font-extrabold text-white mb-4"
            style={{
              fontSize: "clamp(1.6rem,4vw,2.4rem)",
              fontFamily: "'Playfair Display',serif",
            }}
          >
            Ready to check your fees?
          </h2>
          <p className="text-blue-200 mb-8 leading-relaxed text-sm sm:text-base">
            Get a complete, accurate fee breakdown in seconds.
          </p>
          <Link
            href={"/check-fees"}
            className="bg-white text-blue-700 font-bold px-10 py-3.5 rounded-full hover:bg-blue-50 transition shadow-lg text-sm sm:text-base"
          >
            Check My Fees →
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white px-4 sm:px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div>
            © {new Date().getFullYear() - 1}/{new Date().getFullYear()} GoUni
            Fees Portal · Data from{" "}
            <a
              href="https://gouni.edu.ng/payments/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              gouni.edu.ng
            </a>
          </div>
          <div>📞 08067160418 · ✉ info@gouni.edu.ng</div>
        </div>
      </footer>
    </main>
  );
}
