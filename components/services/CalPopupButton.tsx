"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function CalPopupButton() {
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
    <button
      data-cal-namespace="15min"
      data-cal-link="joel-chavez-adkjvb/15min"
      data-cal-config='{"layout":"month_view"}'
      className="bg-gradient-to-r from-[#4CAF50] px-4 py-3 to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide"
    >
      Book My Free Design Meeting
    </button>
  );
}
