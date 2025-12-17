import { NextResponse } from "next/server";
import { projectsData } from "@/lib/data";

export async function GET() {
  return NextResponse.json(projectsData);
}

import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  // handle the data (e.g., save to DB, log, etc.)
  return NextResponse.json({ status: "success", received: data });
}