
// "use client";
// import { useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";

// export default function TrackingWrapper({ children }: { children: React.ReactNode }) {
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const fbclid = urlParams.get("fbclid");
//     const fullUrl = window.location.href;
//     const path = window.location.pathname + window.location.search;

//     // Crear fbc en formato requerido por Meta
//     const fbc = fbclid ? `fb.1.${Math.floor(Date.now() / 1000)}.${fbclid}` : null;

//     // Registrar PageView server-side
//     if (fbc) {
//       fetch("/api/events/pageview", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           fbc,
//           timestamp: new Date().toISOString(),
//           path,
//           fullUrl,
//           referrer: document.referrer
//         })
//       });
//     }

//     // Vincular a todos los botones con data-track
//     const buttons = document.querySelectorAll<HTMLButtonElement>('[data-track="book-button"]');
//     buttons.forEach((btn) => {
//       btn.addEventListener("click", () => {
//         if (fbc) {
//           fetch("/api/events/clickbookbutton", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               fbc,
//               timestamp: new Date().toISOString(),
//               path,
//               fullUrl,
//               eventId: uuidv4()
//             })
//           });
//         }
//       });
//     });
//   }, []);

//   return <>{children}</>;
// }

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
