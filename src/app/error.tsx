"use client";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center

        px-6
      "
    >
      <div className="text-center">
        <h1
          className="
            text-5xl
            font-black

            text-white
          "
        >
          Algo deu
          <span className="text-red-500">
            {" "}errado
          </span>
        </h1>

        <button
          onClick={() => reset()}
          className="
            mt-8

            rounded-full

            bg-red-500

            px-8
            py-4

            text-white
          "
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}