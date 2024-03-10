import { issues } from "@/utils/constants";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    return new NextResponse(JSON.stringify(issues), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log({ error });

    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log("Create Issue Request:", JSON.stringify({ body }));

    return new NextResponse(JSON.stringify({ ...body }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log({ error });

    throw error;
  }
}
