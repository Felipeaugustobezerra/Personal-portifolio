import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center

        px-6
      "
    >
      <div className="text-center">
        <span
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.3em]

            text-red-500
          "
        >
          Error 404
        </span>

        <h1
          className="
            mt-6

            text-7xl
            font-black

            text-white

            md:text-9xl
          "
        >
          Página
          <span className="text-red-500">
            {" "}não encontrada
          </span>
        </h1>

        <p
          className="
            mx-auto
            mt-6
            max-w-xl

            text-zinc-400
          "
        >
          Parece que você acessou uma rota que não existe.
        </p>

        <Link
          href="/"
          className="
            mt-10
            inline-flex

            rounded-full

            bg-red-500

            px-8
            py-4

            font-semibold

            text-white

            transition-all

            hover:bg-red-600
          "
        >
          Voltar para Home
        </Link>
      </div>
    </main>
  );
}