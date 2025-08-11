"use client";
import { useEffect } from "react";

export default function TrackingWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const fbclid = urlParams.get("fbclid");

    if (fbclid) {
      fetch("/api/events/pageview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fbclid,
          timestamp: new Date().toISOString(),
          path: window.location.pathname,
          referrer: document.referrer
        })
      });
    }

    const button = document.getElementById("ClickBookButton");
    if (button) {
      button.addEventListener("click", () => {
        if (fbclid) {
          fetch("/api/events/clickbookbutton", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fbclid,
              timestamp: new Date().toISOString(),
              path: window.location.pathname
            })
          });
        }
      });
    }
  }, []);

  return <>{children}</>;
}
