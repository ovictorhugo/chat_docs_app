import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const assets = [
  { name: "Lei Federal 12.345.pdf", type: "arquivo", category: "lei federal" },
  { name: "Manual de Construção", type: "link", category: "construção" },
  { name: "Resolução Colegiado", type: "imagem", category: "colegiado de curso" }
];

export default function KnowledgePage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl space-y-6 px-6 py-10">
      <header>
        <h1 className="text-3xl font-bold">Base de conhecimento</h1>
        <p className="text-muted-foreground">Envie imagens, arquivos e links. O chat responde apenas com base nesses conteúdos.</p>
      </header>

      <section className="grid gap-3 rounded-lg border border-border p-6 md:grid-cols-3">
        <Input type="file" accept="image/*,.pdf,.doc,.docx" />
        <Input placeholder="Cole um link" />
        <Button>Adicionar conteúdo</Button>
      </section>

      <section className="rounded-lg border border-border p-6">
        <h2 className="mb-4 text-xl font-semibold">Documentos e categorias</h2>
        <div className="space-y-2">
          {assets.map((asset) => (
            <article key={asset.name} className="grid gap-2 rounded-md border border-border p-3 md:grid-cols-4 md:items-center">
              <p className="font-medium md:col-span-2">{asset.name}</p>
              <p className="text-sm text-muted-foreground">{asset.type}</p>
              <select defaultValue={asset.category} className="h-10 rounded-md border border-border bg-transparent px-2 text-sm">
                <option>lei federal</option>
                <option>construção</option>
                <option>colegiado de curso</option>
                <option>prae</option>
              </select>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
