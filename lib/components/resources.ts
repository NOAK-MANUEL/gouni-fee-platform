export const OTHER_FEES: Record<number, number> = {
  100: 201500,
  200: 137000,
  300: 144000,
  400: 182000,
  500: 202000,
  600: 180000,
};

export const getLevels = (faculty: string) => {
  if (faculty === "Faculty of Law") return [100, 200, 300, 400, 500];
  if (faculty === "College of Medicine & Nursing")
    return [100, 200, 300, 400, 500, 600];
  return [100, 200, 300, 400];
};

export const fmt = (n: number | bigint) =>
  n != null ? "₦" + n.toLocaleString("en-NG") : "—";
