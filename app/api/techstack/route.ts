import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server.js";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const techStack = await prisma.techStack.findMany();

    console.log(techStack);

    return NextResponse.json(techStack);
  } catch (error) {
    throw error;
  }
};
