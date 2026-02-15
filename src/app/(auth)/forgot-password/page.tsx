import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  return (
    <main className="mx-auto grid min-h-screen max-w-md place-items-center px-6">
      <form className="w-full space-y-4 rounded-xl border border-border p-6">
        <h1 className="text-2xl font-semibold">Recuperar senha</h1>
        <Input placeholder="Informe seu e-mail" type="email" />
        <Button className="w-full" type="submit">Enviar link de recuperação</Button>
      </form>
    </main>
  );
}
