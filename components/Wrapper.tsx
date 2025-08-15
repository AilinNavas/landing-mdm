
"use client";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const fullUrl = window.location.href;

    // Enviar pageview sin fbc ni fbp, el backend lo genera
    fetch("/api/events/pageview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullUrl })
    });

    // Escuchar clicks en botones con data-track="book-button"
    const buttons = document.querySelectorAll('[data-track="book-button"]');
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        fetch("/api/events/clickbookbutton", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullUrl,
            eventId: uuidv4()
          })
        });
      });
    });
  }, []);

  return <>{children}</>;
}
