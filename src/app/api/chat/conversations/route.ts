import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  userId: z.string().min(1),
  title: z.string().min(2)
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  if (!userId) return NextResponse.json({ error: "userId é obrigatório" }, { status: 400 });

  const conversations = await prisma.conversation.findMany({
    where: { userId },
    include: { messages: { orderBy: { createdAt: "asc" } } },
    orderBy: { updatedAt: "desc" }
  });

  return NextResponse.json({ conversations });
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
  }

  const conversation = await prisma.conversation.create({
    data: parsed.data
  });

  return NextResponse.json({ conversation });
}
