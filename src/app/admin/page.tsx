import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl space-y-6 px-6 py-10">
      <header>
        <h1 className="text-3xl font-bold">Módulo administrativo</h1>
        <p className="text-muted-foreground">Personalize a marca e os métodos de autenticação.</p>
      </header>

      <section className="space-y-4 rounded-lg border border-border p-6">
        <h2 className="text-xl font-semibold">Branding</h2>
        <Input placeholder="Nome do aplicativo" defaultValue="Chat Docs App" />
        <div className="grid gap-3 md:grid-cols-2">
          <label className="text-sm">Logo (.svg)<Input type="file" accept=".svg" /></label>
          <label className="text-sm">Favicon (.ico/.png)<Input type="file" /></label>
        </div>
      </section>

      <section className="space-y-4 rounded-lg border border-border p-6">
        <h2 className="text-xl font-semibold">Logins permitidos</h2>
        <label className="flex items-center gap-2 text-sm"><input defaultChecked type="checkbox" />Email e senha</label>
        <label className="flex items-center gap-2 text-sm"><input defaultChecked type="checkbox" />Google</label>
        <label className="flex items-center gap-2 text-sm"><input defaultChecked type="checkbox" />GitHub</label>
        <label className="flex items-center gap-2 text-sm"><input defaultChecked type="checkbox" />Microsoft</label>
      </section>

      <Button>Salvar configurações</Button>
    </main>
  );
}
