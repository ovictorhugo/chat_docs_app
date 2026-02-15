"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function updateUserRole(formData: FormData) {
  const userId = String(formData.get("userId") || "");
  const role = String(formData.get("role") || "USER");
  if (!userId || (role !== "USER" && role !== "ADMIN")) return;

  await prisma.user.update({
    where: { id: userId },
    data: { role: role as "USER" | "ADMIN" }
  });

  revalidatePath("/admin");
}

export async function updateAppSettings(formData: FormData) {
  const appName = String(formData.get("appName") || "Chat Docs App");
  const logoUrl = String(formData.get("logoUrl") || "");
  const faviconUrl = String(formData.get("faviconUrl") || "");

  await prisma.appSettings.upsert({
    where: { id: "app-settings" },
    update: {
      appName,
      logoUrl: logoUrl || null,
      faviconUrl: faviconUrl || null,
      enableCredentials: formData.get("enableCredentials") === "on",
      enableGoogle: formData.get("enableGoogle") === "on",
      enableGithub: formData.get("enableGithub") === "on",
      enableMicrosoft: formData.get("enableMicrosoft") === "on"
    },
    create: {
      id: "app-settings",
      appName,
      logoUrl: logoUrl || null,
      faviconUrl: faviconUrl || null,
      enableCredentials: formData.get("enableCredentials") === "on",
      enableGoogle: formData.get("enableGoogle") === "on",
      enableGithub: formData.get("enableGithub") === "on",
      enableMicrosoft: formData.get("enableMicrosoft") === "on"
    }
  });

  revalidatePath("/admin");
}
