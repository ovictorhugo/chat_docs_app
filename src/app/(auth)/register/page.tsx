import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  return (
    <main className="mx-auto grid min-h-screen max-w-md place-items-center px-6">
      <form className="w-full space-y-4 rounded-xl border border-border p-6">
        <h1 className="text-2xl font-semibold">Criar conta</h1>
        <Input placeholder="Nome" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Senha" type="password" />
        <Button className="w-full" type="submit">Criar conta</Button>
        <p className="text-sm text-muted-foreground">
          Após cadastro, enviamos um link de verificação de e-mail antes do primeiro acesso.
        </p>
        <Link href="/login" className="block text-sm text-muted-foreground hover:underline">
          Já tenho conta
        </Link>
      </form>
    </main>
  );
}
