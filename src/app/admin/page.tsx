import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateAppSettings, updateUserRole } from "./actions";

export default async function AdminPage() {
  const [settings, users] = await Promise.all([
    prisma.appSettings.upsert({ where: { id: "app-settings" }, update: {}, create: { id: "app-settings" } }),
    prisma.user.findMany({ orderBy: { createdAt: "desc" } })
  ]);

  return (
    <main className="mx-auto min-h-screen max-w-5xl space-y-6 px-6 py-10">
      <header>
        <h1 className="text-3xl font-bold">Módulo administrativo</h1>
        <p className="text-muted-foreground">Personalize a marca, logins e administre usuários/cargos.</p>
      </header>

      <form action={updateAppSettings} className="space-y-4 rounded-lg border border-border p-6">
        <h2 className="text-xl font-semibold">Configurações gerais</h2>
        <Input name="appName" placeholder="Nome do aplicativo" defaultValue={settings.appName} />
        <Input name="logoUrl" placeholder="URL da logo .svg" defaultValue={settings.logoUrl ?? ""} />
        <Input name="faviconUrl" placeholder="URL do favicon" defaultValue={settings.faviconUrl ?? ""} />
        <div className="grid gap-3 md:grid-cols-2">
          <label className="text-sm">Upload da logo (.svg)<Input type="file" accept=".svg" /></label>
          <label className="text-sm">Upload do favicon (.ico/.png)<Input type="file" /></label>
        </div>

        <section className="space-y-2">
          <h3 className="font-medium">Logins permitidos</h3>
          <label className="flex items-center gap-2 text-sm"><input name="enableCredentials" defaultChecked={settings.enableCredentials} type="checkbox" />Email e senha</label>
          <label className="flex items-center gap-2 text-sm"><input name="enableGoogle" defaultChecked={settings.enableGoogle} type="checkbox" />Google</label>
          <label className="flex items-center gap-2 text-sm"><input name="enableGithub" defaultChecked={settings.enableGithub} type="checkbox" />GitHub</label>
          <label className="flex items-center gap-2 text-sm"><input name="enableMicrosoft" defaultChecked={settings.enableMicrosoft} type="checkbox" />Microsoft</label>
        </section>

        <Button type="submit">Salvar configurações</Button>
      </form>

      <section className="space-y-4 rounded-lg border border-border p-6">
        <h2 className="text-xl font-semibold">Usuários e cargos</h2>
        <div className="space-y-2">
          {users.length === 0 && <p className="text-sm text-muted-foreground">Nenhum usuário cadastrado.</p>}
          {users.map((user) => (
            <form key={user.id} action={updateUserRole} className="grid gap-2 rounded-md border border-border p-3 md:grid-cols-5 md:items-center">
              <input type="hidden" name="userId" value={user.id} />
              <p className="md:col-span-2">
                <span className="font-medium">{user.name ?? "Sem nome"}</span>
                <br />
                <span className="text-sm text-muted-foreground">{user.email}</span>
              </p>
              <p className="text-sm text-muted-foreground">{new Date(user.createdAt).toLocaleDateString("pt-BR")}</p>
              <select name="role" defaultValue={user.role} className="h-10 rounded-md border border-border bg-transparent px-2 text-sm">
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
              <Button type="submit" variant="outline">Atualizar cargo</Button>
            </form>
          ))}
        </div>
      </section>
    </main>
  );
}
