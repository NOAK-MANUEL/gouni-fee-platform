// Levels (years)
// type Level = 100 | 200 | 300 | 400 | 500 | 600;

type LevelFees = Partial<Record<number, number>>;

type Programs = Record<string, LevelFees>;
interface FacultyContent {
  icon: string;
  programs: Programs;
}

// Entire faculties object
export type Faculties = Record<string, FacultyContent>;
export const FACULTIES: Faculties = {
  "Mgt & Social Sciences": {
    icon: "📈",
    programs: {
      Accounting: { 100: 750000, 200: 750000, 300: 750000, 400: 700000 },
      Management: { 100: 750000, 200: 750000, 300: 750000, 400: 700000 },
      "Public Administration": {
        100: 750000,
        200: 750000,
        300: 750000,
        400: 700000,
      },
      Economics: { 100: 750000, 200: 750000, 300: 750000, 400: 700000 },
      "Political Science": {
        100: 750000,
        200: 750000,
        300: 750000,
        400: 700000,
      },
      "International Relations": {
        100: 750000,
        200: 750000,
        300: 750000,
        400: 700000,
      },
      "Mass Communications": {
        100: 770000,
        200: 770000,
        300: 770000,
        400: 720000,
      },
      Psychology: { 100: 750000, 200: 750000, 300: 750000, 400: 700000 },
      Sociology: { 100: 750000, 200: 750000, 300: 750000, 400: 700000 },
    },
  },
  "Natural Sciences & Env. Studies": {
    icon: "🔬",
    programs: {
      "Applied Biology": { 100: 820000, 200: 820000, 300: 790000, 400: 740000 },
      Biotechnology: { 100: 820000, 200: 820000, 300: 790000, 400: 740000 },
      Microbiology: { 100: 820000, 200: 820000, 300: 790000, 400: 740000 },
      Chemistry: { 100: 820000, 200: 820000, 300: 790000, 400: 740000 },
      Biochemistry: { 100: 820000, 200: 820000, 300: 790000, 400: 740000 },
      "Industrial Chemistry": {
        100: 820000,
        200: 820000,
        300: 790000,
        400: 740000,
      },
      Physics: { 100: 820000, 200: 820000, 300: 790000, 400: 740000 },
      Mathematics: { 100: 820000, 200: 820000, 300: 790000, 400: 740000 },
      "Statistics & Demography": {
        100: 820000,
        200: 820000,
        300: 790000,
        400: 740000,
      },
      Architecture: { 100: 870000, 200: 870000, 300: 870000, 400: 820000 },
      "Industrial Design": {
        100: 870000,
        200: 870000,
        300: 870000,
        400: 820000,
      },
    },
  },
  "Computing & IT": {
    icon: "💻",
    programs: {
      "Computer Science": {
        100: 1220000,
        200: 1220000,
        300: 1120000,
        400: 1120000,
      },
      Mathematics: { 100: 820000, 200: 820000, 300: 790000, 400: 740000 },
      "Statistics & Demography": {
        100: 820000,
        200: 820000,
        300: 790000,
        400: 740000,
      },
      "Software Engineering": { 100: 1220000, 200: 1220000 },
      "Cyber Security": { 100: 1220000, 200: 1220000 },
      "Data Science": { 100: 1220000, 200: 1220000 },
    },
  },
  Education: {
    icon: "📚",
    programs: {
      "Biology Education": {
        100: 631200,
        200: 631200,
        300: 638200,
        400: 588200,
      },
      "Chemistry Education": {
        100: 631200,
        200: 631200,
        300: 638200,
        400: 588200,
      },
      "Mathematics Education": {
        100: 631200,
        200: 631200,
        300: 638200,
        400: 588200,
      },
      "Physics Education": {
        100: 631200,
        200: 631200,
        300: 638200,
        400: 588200,
      },
      "English & Lit Studies Edu": {
        100: 651200,
        200: 651200,
        300: 658200,
        400: 608200,
      },
      "Economics Education": {
        100: 631200,
        200: 631200,
        300: 638200,
        400: 588200,
      },
      "Pol. Science & Govt. Education": {
        100: 631200,
        200: 631200,
        300: 638200,
        400: 588200,
      },
      "Social Studies Education": {
        100: 631200,
        200: 631200,
        300: 638200,
        400: 588200,
      },
      "Business Education": {
        100: 631200,
        200: 631200,
        300: 638200,
        400: 588200,
      },
      "Computer Science Education": {
        100: 631200,
        200: 631200,
        300: 638200,
        400: 588200,
      },
    },
  },
  Arts: {
    icon: "🎨",
    programs: {
      "History, Int. Relations & Diplomacy": {
        100: 631200,
        200: 631200,
        300: 658200,
        400: 588200,
      },
      Music: { 100: 631200, 200: 631200, 300: 638200, 400: 588200 },
      "English and Literary Studies": {
        100: 651200,
        200: 651200,
        300: 638200,
        400: 608200,
      },
      Philosophy: { 100: 631200, 200: 631200, 300: 638200, 400: 588200 },
      "Religious Studies": {
        100: 631200,
        200: 631200,
        300: 638200,
        400: 588200,
      },
    },
  },
  "Faculty of Law": {
    icon: "⚖️",
    programs: {
      "LL.B. Law": {
        100: 1700000,
        200: 1700000,
        300: 1300000,
        400: 1165000,
        500: 1165000,
      },
    },
  },
  "College of Medicine & Nursing": {
    icon: "🏥",
    programs: {
      "Medicine and Surgery": {
        100: 4773500,
        200: 4838000,
        300: 4838000,
        400: 5338000,
        500: 5338000,
      },
      "Nursing Sciences": { 100: 1961000, 200: 1920000, 300: 1920000 },
    },
  },
};
