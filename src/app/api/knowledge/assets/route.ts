import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  title: z.string().min(2),
  sourceType: z.enum(["FILE", "IMAGE", "LINK"]),
  sourceUrl: z.string().optional(),
  filePath: z.string().optional(),
  category: z.string().min(2)
});

export async function GET() {
  const assets = await prisma.knowledgeAsset.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json({ assets });
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Dados inválidos", details: parsed.error.flatten() }, { status: 400 });
  }

  const asset = await prisma.knowledgeAsset.create({
    data: {
      ...parsed.data,
      sourceUrl: parsed.data.sourceUrl || null,
      filePath: parsed.data.filePath || null
    }
  });

  return NextResponse.json({ asset });
}
