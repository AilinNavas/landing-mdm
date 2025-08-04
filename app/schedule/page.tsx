"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function SchedulePage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="min-h-screen p-4 bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-4 text-center text-black dark:text-white">
        Book Your Free Design Meeting
      </h1>
      <div className="w-full h-[80vh] max-w-4xl mx-auto">
        <Cal
          namespace="15min"
          calLink="joel-chavez-adkjvb/15min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </div>
  );
}
