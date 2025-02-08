import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server.js";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const projects = await prisma.projects.findMany({
      include: {
        ProjectDescription: true,
      },
    });

    return NextResponse.json(projects);
  } catch (error) {
    throw error;
  }
}
