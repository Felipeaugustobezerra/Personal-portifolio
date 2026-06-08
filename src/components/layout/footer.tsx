import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h3 className="font-semibold">
              Felipe Augusto
            </h3>

            <p className="text-sm text-zinc-500">
              Front-End Developer
            </p>
          </div>

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Todos os
            direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}