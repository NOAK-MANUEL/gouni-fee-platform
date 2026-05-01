// Levels (years)
// type Level = 100 | 200 | 300 | 400 | 500 | 600;

type LevelFees = Partial<Record<number, number>>;

type Programs = Record<string, LevelFees>;
interface FacultyContent {
  icon: string;
  programs: Programs;
}
// type FacultyContent = Record<
// type Faculty = Record<string,FacultyContent>;

// Entire faculties object
export type Faculties = Record<string, FacultyContent>;
export const FACULTIES: Faculties = {
  "Mgt & Social Sciences": {
    icon: "📈",
    programs: {
      Accounting: { 100: 750000, 200: 750000, 300: 700000, 400: 710000 },
      "Banking & Finance": {
        100: 750000,
        200: 750000,
        300: 700000,
        400: 710000,
      },
      Management: { 100: 750000, 200: 750000, 300: 700000, 400: 710000 },
      Marketing: { 100: 750000, 200: 750000, 300: 700000, 400: 710000 },
      "Public Administration": {
        100: 750000,
        200: 750000,
        300: 700000,
        400: 710000,
      },
      Economics: { 100: 750000, 200: 750000, 300: 700000, 400: 710000 },
      "Political Science": {
        100: 750000,
        200: 750000,
        300: 700000,
        400: 710000,
      },
      "International Relations": {
        100: 750000,
        200: 750000,
        300: 700000,
        400: 710000,
      },
      "Mass Communications": {
        100: 770000,
        200: 770000,
        300: 720000,
        400: 730000,
      },
      Philosophy: { 100: 750000, 200: 750000, 300: 700000, 400: 710000 },
      Psychology: { 100: 750000, 200: 750000, 300: 700000, 400: 710000 },
      "Religious Studies": {
        100: 750000,
        200: 750000,
        300: 700000,
        400: 710000,
      },
      Sociology: { 100: 750000, 200: 750000, 300: 700000, 400: 710000 },
    },
  },
  "Natural Sciences & Env. Studies": {
    icon: "🔬",
    programs: {
      "Applied Biology": { 100: 820000, 200: 790000, 300: 740000, 400: 750000 },
      Biotechnology: { 100: 820000, 200: 790000, 300: 740000, 400: 750000 },
      Microbiology: { 100: 820000, 200: 790000, 300: 740000, 400: 750000 },
      Chemistry: { 100: 820000, 200: 790000, 300: 740000, 400: 750000 },
      Biochemistry: { 100: 820000, 200: 790000, 300: 740000, 400: 750000 },
      "Industrial Chemistry": {
        100: 820000,
        200: 790000,
        300: 740000,
        400: 750000,
      },
      Physics: { 100: 820000, 200: 790000, 300: 740000, 400: 750000 },
      Mathematics: { 100: 820000, 200: 790000, 300: 740000, 400: 750000 },
      "Statistics & Demography": {
        100: 820000,
        200: 790000,
        300: 740000,
        400: 750000,
      },
      Architecture: { 100: 870000, 200: 870000, 300: 820000, 400: 830000 },
    },
  },
  // "Architecture & Design": {
  //   icon: "🏛️",
  //   programs: {
  //     "Industrial Design": {
  //       100: 870000,
  //       200: 870000,
  //       300: 820000,
  //       400: 830000,
  //     },
  //   },
  // },
  "Computing & IT": {
    icon: "💻",
    programs: {
      "Computer Science": {
        100: 1220000,
        200: 1120000,
        300: 1120000,
        400: 1200000,
      },
      Mathematics: { 100: 820000, 200: 790000, 300: 740000, 400: 750000 },
      "Statistics & Demography": {
        100: 820000,
        200: 790000,
        300: 740000,
        400: 750000,
      },
    },
  },
  Education: {
    icon: "📚",
    programs: {
      "Biology Education": {
        100: 631200,
        200: 631200,
        300: 588200,
        400: 591200,
      },
      "Chemistry Education": {
        100: 631200,
        200: 631200,
        300: 588200,
        400: 591200,
      },
      "Mathematics Education": {
        100: 631200,
        200: 631200,
        300: 588200,
        400: 591200,
      },
      "Physics Education": {
        100: 631200,
        200: 631200,
        300: 588200,
        400: 591200,
      },
      "English & Lit Studies Edu": {
        100: 651200,
        200: 651200,
        300: 608200,
        400: 611200,
      },
      "History/Int. Studies Edu": {
        100: 631200,
        200: 631200,
        300: 588200,
        400: 591200,
      },
      "Economics Education": {
        100: 631200,
        200: 631200,
        300: 588200,
        400: 591200,
      },
      "Pol. Science & Govt. Education": {
        100: 631200,
        200: 631200,
        300: 588200,
        400: 591200,
      },
      "Social Studies Education": {
        100: 631200,
        200: 631200,
        300: 588200,
        400: 591200,
      },
      "Business Education": {
        100: 631200,
        200: 631200,
        300: 588200,
        400: 591200,
      },
      "Computer Science Education": {
        100: 631200,
        200: 631200,
        300: 588200,
        400: 591200,
      },
    },
  },
  Arts: {
    icon: "🎨",
    programs: {
      "History, Int. Relations & Diplomacy": {
        100: 631200,
        200: 631200,
        300: 588200,
        400: 591200,
      },
      Music: { 100: 631200, 200: 631200, 300: 588200, 400: 591200 },
      "English and Literary Studies": {
        100: 651200,
        200: 651200,
        300: 608200,
        400: 611200,
      },
      Philosophy: { 100: 631200, 200: 631200, 300: 588200, 400: 591200 },
    },
  },
  "Faculty of Law": {
    icon: "⚖️",
    programs: {
      "Jurisprudence & International Law": {
        100: 1700000,
        200: 1300000,
        300: 1165000,
        400: 1165000,
        500: 1165000,
      },
      "Public Law": {
        100: 1700000,
        200: 1300000,
        300: 1165000,
        400: 1165000,
        500: 1165000,
      },
      "Private & Business Law": {
        100: 1700000,
        200: 1300000,
        300: 1165000,
        400: 1165000,
        500: 1165000,
      },
    },
  },
  "College of Medicine & Nursing": {
    icon: "🏥",
    programs: {
      "Medicine and Surgery": {
        100: 4600000,
        200: 4050000,
        300: 4050000,
        400: 4050000,
      },
      "Nursing Sciences": { 500: 1902000, 600: 1854000 },
    },
  },
};
