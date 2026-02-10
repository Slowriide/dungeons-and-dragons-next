// src/app/not-found.tsx
export const dynamic = "force-dynamic"; // 👈 Agrega esto

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "4rem", margin: 0 }}>404</h1>
            <p style={{ fontSize: "1.25rem", color: "#666" }}>Page Not Found</p>
            <a
              href="/"
              style={{
                display: "inline-block",
                marginTop: "1rem",
                padding: "0.75rem 1.5rem",
                backgroundColor: "#E63946",
                color: "white",
                textDecoration: "none",
                borderRadius: "0.375rem",
              }}
            >
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
