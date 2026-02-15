import Link from "next/link";

const items = [
  { href: "/chat", label: "Chat" },
  { href: "/knowledge", label: "Base de conhecimento" },
  { href: "/admin", label: "Admin" }
];

export function Sidebar() {
  return (
    <aside className="w-72 border-r border-border bg-muted/30 p-4">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Histórico</h2>
        <p className="text-sm text-muted-foreground">Converse e reutilize respostas.</p>
      </div>
      <nav className="space-y-2">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-sm hover:bg-muted">
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-6 space-y-2 text-sm text-muted-foreground">
        <p>• Compartilhar conversa</p>
        <p>• Excluir histórico</p>
      </div>
    </aside>
  );
}
