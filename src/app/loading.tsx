export default function Loading() {
  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
      "
    >
      <div className="flex flex-col items-center gap-6">
        <div
          className="
            h-14
            w-14

            animate-spin

            rounded-full

            border-4
            border-zinc-800

            border-t-red-500
          "
        />

        <p className="text-zinc-400">
          Carregando...
        </p>
      </div>
    </div>
  );
}