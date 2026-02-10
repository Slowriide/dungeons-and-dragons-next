"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main>
          <h1>Hubo un error crítico</h1>
          <button onClick={() => reset()}>Reintentar</button>
        </main>
      </body>
    </html>
  );
}
