import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const { title, quantity, color } = body;

    if (!title)
      return NextResponse.json(
        { error: "title is required" },
        { status: 400 }
      );

      const data: any = {title}

      if (quantity !== undefined) data.quantity = quantity
      if (color !== undefined) data.color = color

    const newItem = await prisma.item.create({
      data
    });

    return NextResponse.json(
      { message: "Item created successfully :", newItem },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/item/error :", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(_req: Request): Promise<Response> {
  try {
    const items = await prisma.item.findMany();
    return NextResponse.json(
      { message: "All items", items },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /users error :", error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
