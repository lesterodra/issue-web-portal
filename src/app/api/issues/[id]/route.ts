import { issues } from "@/utils/constants";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const issue = issues.find((issue) => issue.id === id);

    if (!issue) {
      return new NextResponse(JSON.stringify({ message: "issue not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new NextResponse(JSON.stringify(issue), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log({ error });

    throw error;
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const issue = issues.find((issue) => issue.id === id);

    if (!issue) {
      return new NextResponse(JSON.stringify({ message: "issue not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("Delete Issue for id:", { id });

    return new NextResponse(JSON.stringify({ message: "success" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log({ error });

    throw error;
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const body = await request.json();
    const issue = issues.find((issue) => issue.id === id);

    if (!issue) {
      return new NextResponse(JSON.stringify({ message: "issue not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log(
      "Update Issue Request for id:",
      { id },
      JSON.stringify({ body })
    );

    return new NextResponse(JSON.stringify({ id, ...body }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log({ error });

    throw error;
  }
}
