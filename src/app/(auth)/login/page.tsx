import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="mx-auto grid min-h-screen max-w-md place-items-center px-6">
      <form className="w-full space-y-4 rounded-xl border border-border p-6">
        <h1 className="text-2xl font-semibold">Entrar</h1>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Senha" type="password" />
        <Button className="w-full" type="submit">
          Entrar com e-mail
        </Button>
        <div className="grid grid-cols-1 gap-2">
          <Button variant="outline" type="button">Entrar com Google</Button>
          <Button variant="outline" type="button">Entrar com GitHub</Button>
          <Button variant="outline" type="button">Entrar com Microsoft</Button>
        </div>
        <Link href="/forgot-password" className="block text-sm text-muted-foreground hover:underline">
          Esqueci minha senha
        </Link>
        <Link href="/register" className="block text-sm text-muted-foreground hover:underline">
          Ainda não tenho conta
        </Link>
      </form>
    </main>
  );
}
