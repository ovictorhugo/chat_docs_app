import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  appName: z.string().min(2),
  logoUrl: z.string().optional().or(z.literal("")),
  faviconUrl: z.string().optional().or(z.literal("")),
  enableCredentials: z.boolean(),
  enableGoogle: z.boolean(),
  enableGithub: z.boolean(),
  enableMicrosoft: z.boolean()
});

export async function GET() {
  const settings = await prisma.appSettings.upsert({
    where: { id: "app-settings" },
    update: {},
    create: { id: "app-settings" }
  });

  return NextResponse.json({ settings });
}

export async function PUT(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Dados inválidos", details: parsed.error.flatten() }, { status: 400 });
  }

  const settings = await prisma.appSettings.upsert({
    where: { id: "app-settings" },
    update: {
      ...parsed.data,
      logoUrl: parsed.data.logoUrl || null,
      faviconUrl: parsed.data.faviconUrl || null
    },
    create: {
      id: "app-settings",
      ...parsed.data,
      logoUrl: parsed.data.logoUrl || null,
      faviconUrl: parsed.data.faviconUrl || null
    }
  });

  return NextResponse.json({ settings });
}
