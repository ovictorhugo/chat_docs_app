import { Sidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const mockMessages = [
  { role: "user", text: "Qual a regra sobre estágio supervisionado?" },
  { role: "assistant", text: "Com base no documento 'Colegiado de curso 2025', a carga mínima é 160h." }
];

export default function ChatPage() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <section className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-border px-6 py-4">
          <h1 className="text-xl font-semibold">Chat</h1>
          <div className="flex gap-2">
            <Button variant="outline">Compartilhar</Button>
            <Button variant="outline">Excluir conversa</Button>
          </div>
        </header>
        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
          {mockMessages.map((message, idx) => (
            <article key={idx} className="rounded-lg border border-border p-4">
              <p className="mb-2 text-xs uppercase text-muted-foreground">{message.role}</p>
              <p>{message.text}</p>
            </article>
          ))}
        </div>
        <footer className="border-t border-border p-4">
          <div className="flex gap-2">
            <Input placeholder="Pergunte com base na base de conhecimento..." />
            <Button>Enviar</Button>
          </div>
        </footer>
      </section>
    </main>
  );
}
