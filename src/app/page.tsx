import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-6 px-6">
      <h1 className="text-4xl font-bold">Plataforma estilo ChatGPT com base documental</h1>
      <p className="text-muted-foreground">
        Login com e-mail/senha e provedores sociais, chat com histórico e painel administrativo para configurar
        marca e formas de acesso.
      </p>
      <div className="flex gap-3">
        <Link href="/login">
          <Button>Entrar</Button>
        </Link>
        <Link href="/register">
          <Button variant="outline">Criar conta</Button>
        </Link>
      </div>
    </main>
  );
}
