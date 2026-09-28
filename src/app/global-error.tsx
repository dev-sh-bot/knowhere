"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#0D0E0A",
          color: "#F2EFE4",
          fontFamily: "monospace",
          textAlign: "center",
          padding: 24,
        }}
      >
        <div>
          <p style={{ letterSpacing: "0.2em", fontSize: 12, color: "#C6FF3F" }}>
            SOMETHING WENT WRONG
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 24,
              padding: "12px 20px",
              background: "#C6FF3F",
              color: "#0D0E0A",
              border: "none",
              font: "600 11px monospace",
              letterSpacing: "0.16em",
              cursor: "pointer",
            }}
          >
            TRY AGAIN
          </button>
        </div>
      </body>
    </html>
  );
}
