"use server";

import { FACULTIES } from "@/lib/components/faculties";
import prismaClient from "@/lib/prisma";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export type FacultyData = { name: string; _count: { programs: number } };

type FacultyResponse =
  | {
      success: true;
      faculties: string[];
      facultiesData: FacultyData[];
    }
  | { success: false; message: string };
export type ProgramData = { name: string; levels: Level[] };

type ProgramResponse =
  | {
      success: true;
      programs: string[];
      programData: ProgramData[];
    }
  | { success: false; message: string };
export type Level = {
  fee: bigint;
  level: number;
  // program: { faculty_name: string };
};
type LevelResponse =
  | { success: true; levels: Level[] }
  | { success: false; message: string };
type Admin = { username: string; email: string };
type AdminResponse = { success: true } | { success: false; message: string };
export const getFaculties = async (): Promise<FacultyResponse> => {
  try {
    const faculties = await prismaClient.faculties.findMany({
      select: {
        name: true,
        _count: {
          select: {
            programs: true,
          },
        },
      },
    });
    return {
      success: true,
      faculties: faculties.map((faculty) => faculty.name),
      facultiesData: faculties,
    };
  } catch (error) {
    return sendError(error as Error) as FacultyResponse;
  }
};
export const getPrograms = async (
  faculty: string,
): Promise<ProgramResponse> => {
  try {
    const programs = await prismaClient.programs.findMany({
      where: {
        faculty_name: faculty,
      },
      orderBy: {
        name: "asc",
      },
      select: {
        name: true,

        levels: {
          select: {
            fee: true,
            level: true,
          },
          orderBy: {
            level: "asc",
          },
        },
      },
    });

    return {
      success: true,
      programs: programs.map((faculty) => faculty.name),
      programData: programs,
    };
  } catch (error) {
    return sendError(error as Error) as ProgramResponse;
  }
};
export const getLevelsData = async (
  program: string,
): Promise<LevelResponse> => {
  try {
    const levels = await prismaClient.levels.findMany({
      where: {
        program_name: program,
      },
      select: {
        level: true,
        fee: true,
      },
    });
    return {
      success: true,
      levels,
    };
  } catch (error) {
    return sendError(error as Error) as LevelResponse;
  }
};

export const logAdmin = async (
  username: string,
  password: string,
): Promise<AdminResponse> => {
  try {
    if (!username || !password) throw new Error("Invalid Felids");
    const isAdmin = await prismaClient.admin.findFirst({
      where: {
        username,
        onBlock: false,
      },
      select: {
        username: true,
        password: true,
        email: true,
      },
    });
    if (!isAdmin) throw new Error("Username or Password Incorrect");
    const legit = bcrypt.compareSync(password, isAdmin.password);
    if (!legit) throw new Error("Username or Password Incorrect");
    const updateAdmin = {
      ...isAdmin,
      date: new Date().setDate(new Date().getDate() + 1),
    };
    (await cookies()).set("_a", JSON.stringify(updateAdmin), {
      maxAge: 60 * 60 * 24,
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: true,
    });
    return {
      success: true,
    };
  } catch (error) {
    return sendError(error as Error) as AdminResponse;
  }
};

export const isAdmin = async (): Promise<Admin | null> => {
  const data = (await cookies()).get("_a");
  if (!data) return null;
  const { username, password, email, date } = JSON.parse(data.value);
  if (!username || !password || !date) return null;
  const lastDate = new Date(date).getTime();
  const currentDate = Date.now();
  if (lastDate < currentDate) return null;
  return {
    username,
    email,
  };
};

export const createAdmin = async (
  username: string,
  email: string,
  password: string,
): Promise<AdminResponse> => {
  try {
    if (!username || !password || !email) throw new Error("Invalid Input");
    const hasInfo = await isAdmin();
    if (!hasInfo) throw new Error("Admin not authorized");
    const isLegit = await prismaClient.admin.findFirst({
      where: { ...hasInfo },
    });
    if (!isLegit) throw new Error("Admin not authorized");

    await prismaClient.admin.create({
      data: {
        username,
        email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    return sendError(error as Error);
  }
};
export const changeFee = async (
  program: string,
  level: number,
  fee: bigint,
): Promise<AdminResponse> => {
  try {
    if (!program || !level || !fee || fee <= 0)
      throw new Error("Invalid Input");
    const hasInfo = await isAdmin();
    if (!hasInfo) throw new Error("Admin not authorized");
    const isLegit = await prismaClient.admin.findFirst({
      where: { ...hasInfo },
    });
    if (!isLegit) throw new Error("Admin not authorized");
    const f = await prismaClient.levels.findFirst({
      where: {
        program_name: program,
        level,
      },
      select: {
        id: true,
      },
    });
    await prismaClient.levels.update({
      data: {
        fee,
      },
      where: {
        id: f?.id,
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    return sendError(error as Error);
  }
};

export const saveData = async () => {
  Object.keys(FACULTIES).map(async (faculty) => {
    await prismaClient.faculties.create({
      data: {
        name: faculty,
      },
    });
    Object.keys(FACULTIES[faculty].programs).map(async (program) => {
      await prismaClient.programs.create({
        data: {
          name: program,
          faculty_name: faculty,
        },
      });
      Object.entries(FACULTIES[faculty].programs[program]).map(
        async ([level, fee]) => {
          await prismaClient.levels.create({
            data: {
              level: Number(level),
              fee: Number(fee),
              program_name: program,
            },
          });
        },
      );
    });
  });
};

const sendError = (error: Error) => {
  return {
    success: false,
    message: error.message,
  };
};
