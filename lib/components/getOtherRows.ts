// ── Main fee builder ─────────────────────────────────────────────────────────
export default function getOtherRows(selLevel: string, selProgram: string) {
  const level = parseInt(selLevel) || 0;
  const is100L = level === 100;
  const isFinalYear = level >= 400;

  // ── Derive program group from selProgram only ────────────────────────────────
  const isLaw = selProgram === "LL.B. LAW";
  const isNursing = selProgram === "NURSING SCIENCES";
  const isMedicine = selProgram === "MEDICINE AND SURGERY";
  const isMedSchool = isNursing || isMedicine;

  const FCIT_PROGRAMS = [
    "COMPUTER SCIENCE",
    "SOFTWARE ENGINEERING",
    "CYBER SECURITY",
    "DATA SCIENCE",
    "MATHEMATICS",
  ];
  const BIO_CHEM_PROGRAMS = [
    "APPLIED BIOLOGY",
    "BIOTECHNOLOGY",
    "MICROBIOLOGY",
    "CHEMISTRY",
    "BIOCHEMISTRY",
    "INDUSTRIAL CHEMISTRY",
  ];
  const isFCIT = FCIT_PROGRAMS.includes(selProgram);
  const NASES_PROGRAMS = [
    ...BIO_CHEM_PROGRAMS,
    "PHYSICS",
    "ARCHITECTURE",
    "INDUSTRIAL DESIGN",
  ];
  const isNASES = NASES_PROGRAMS.includes(selProgram);
  const isBioChemSci = BIO_CHEM_PROGRAMS.includes(selProgram);
  const isAccounting = selProgram === "ACCOUNTING";
  const isEconomics = selProgram === "ECONOMICS";

  // ── NURSING / MEDICINE ───────────────────────────────────────────────────
  if (isMedSchool) {
    const rows = [
      { label: "Online Course Reg / ICT Fee", amount: 60000 },
      ...(is100L
        ? [
            { label: "Acceptance Fee", amount: 30000 },
            { label: "Matriculation Fee", amount: 20000 },
            { label: "ID Card Fee", amount: 3500 },
            { label: "Publication Fee", amount: 5000 },
          ]
        : []),
      { label: "Faculty Fee", amount: 10000 },
      { label: "Departmental Fee", amount: 5000 },
      { label: "GOUMSA / NUNSA Fee", amount: 10000 },
      { label: "Bazaar Levy", amount: 1000 },
      { label: "COHON Fee", amount: 4000 },
      { label: "Parents' Forum Fee", amount: 10000 },
      { label: "Sports Levy", amount: 5000 },
      { label: "Library Fee", amount: 25000 },
      { label: "Medical & Drug Test Fee", amount: 10000 },
      { label: "Sanitation", amount: 3000 },
      { label: "Entrepreneurship Fee", amount: 7000 },
      { label: "Health Insurance", amount: 5000 },
      { label: "Community Service Levy", amount: 2000 },
      { label: "Student Affairs Fee", amount: is100L ? 8000 : 2000 },
      { label: "Competition Fee", amount: 3000 },
      ...(level === 400
        ? [{ label: "Journal / Logbook Fee", amount: 100000 }]
        : []),
    ];

    // Nursing-specific fees (100–300L only)
    if (isNursing && level >= 100 && level <= 300) {
      rows.push(
        { label: "Examination Fee", amount: 30000 },
        { label: "FN Nurses Week", amount: 15000 },
        ...(is100L
          ? [
              { label: "Nursing Students Handbook", amount: 5000 },
              { label: "N&MCB Schedule Booklet", amount: 5000 },
              { label: "Procedure Booklet", amount: 6000 },
              { label: "Departmental File", amount: 1500 },
            ]
          : []),
        ...(level >= 200
          ? [
              { label: "Clinical Experience Fee", amount: 100000 },
              { label: "Scrub Badge Fee", amount: 3000 },
              {
                label: "Practical / Pre-Council Exams",
                amount: level === 200 ? 20000 : 30000,
              },
            ]
          : []),
      );
    }

    return rows;
  }

  // ── GENERAL (all other programs) ─────────────────────────────────────────
  return [
    { label: "Online Course Reg / ICT Fee", amount: 60000 },
    ...(is100L
      ? [
          { label: "Acceptance Fee", amount: 30000 },
          { label: "Matriculation Fee", amount: 20000 },
          { label: "ID Card Fee", amount: 3500 },
          { label: "Publication Fee", amount: 5000 },
        ]
      : []),
    { label: "Faculty Fee", amount: isLaw ? 10000 : 5000 },
    { label: "Departmental Fee", amount: isLaw ? 5000 : 3000 },
    ...(isLaw ? [{ label: "LawSA Fee", amount: 15000 }] : []),
    { label: "Bazaar Levy", amount: 1000 },
    { label: "COHON Fee", amount: 4000 },
    { label: "Parents' Forum Fee", amount: 10000 },
    ...(level === 300 && (isFCIT || isNASES)
      ? [{ label: "IT / SIWES Fee", amount: 7000 }]
      : []),
    ...(isFinalYear ? [{ label: "Project Levy", amount: 20000 }] : []),
    { label: "Sports Levy", amount: 5000 },
    { label: "Library Fee", amount: 20000 },
    { label: "Medical & Drug Test Fee", amount: isFinalYear ? 20000 : 10000 },
    { label: "Sanitation", amount: 3000 },
    { label: "Entrepreneurship Fee", amount: 7000 },
    { label: "Health Insurance", amount: 5000 },
    ...(isFinalYear ? [{ label: "Regularization Fee", amount: 5000 }] : []),
    { label: "Community Service Levy", amount: 2000 },
    ...(isFinalYear
      ? [
          { label: "External Examiner Fee", amount: 20000 },
          { label: "Plagiarism Test", amount: 10000 },
        ]
      : []),
    { label: "Student Affairs Fee", amount: is100L ? 8000 : 2000 },
    { label: "Competition Fee", amount: 3000 },
    ...(isFCIT && level <= 400
      ? [
          { label: "Practical Manual Fee", amount: 10000 },
          { label: "GOTECHPRENEURSHIP Fee", amount: 80000 },
        ]
      : []),
    ...(isBioChemSci && level <= 400
      ? [{ label: "Laboratory Fee", amount: 50000 }]
      : []),
    ...(isFinalYear ? [{ label: "GCCP Fee", amount: 30000 }] : []),
    ...((isAccounting || isEconomics) && level <= 400
      ? [{ label: "ICAN ATS Fee", amount: 40000 }]
      : []),
    ...(isAccounting && level <= 400
      ? [{ label: "NUASA Fee", amount: 3000 }]
      : []),
  ];
}
