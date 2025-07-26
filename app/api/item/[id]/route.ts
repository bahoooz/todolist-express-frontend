import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  try {
    const id = Number((await params).id);
    const body = await req.json();

    const { title, quantity, color } = body;

    const existingItem = await prisma.item.findUnique({ where: { id } });

    if (!existingItem) {
      return NextResponse.json(
        { error: "Item doesn't exist" },
        { status: 404 }
      );
    }

    const updatedItem = await prisma.item.update({
      where: { id },
      data: {
        title,
        quantity,
        color,
      },
    });

    return NextResponse.json(
      { message: "Item updated successfully", updatedItem },
      { status: 200 }
    );
  } catch (error) {
    console.error("PATCH /api/item/[id]/error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  const id = Number((await params).id);

  try {
    const existingItem = await prisma.item.findUnique({ where: { id } });

    if (!existingItem) {
      return NextResponse.json(
        { error: "Item doesn't exist" },
        { status: 404 }
      );
    }

    const deletedItem = await prisma.item.delete({ where: { id } });

    return NextResponse.json(
      {
        message: "item deleted successfully",
        deletedItem,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE /api/item/[id]/error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
