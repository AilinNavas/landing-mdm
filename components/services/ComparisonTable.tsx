// components/ComparisonTable.tsx
import { Check, X } from "lucide-react";

type ComparisonItem = {
  feature: string;
  ours: boolean;
  theirs: boolean;
};

const data: ComparisonItem[] = [
  { feature: "Complete SEO Package", ours: true, theirs: true },
  { feature: "Google & Meta Ads", ours: true, theirs: true },
  { feature: "Automated Lead Follow-Up", ours: true, theirs: false },
  { feature: "AI-Powered Nurturing", ours: true, theirs: false },
  { feature: "Dedicated Account Manager", ours: true, theirs: true },
  { feature: "No Long-Term Contracts", ours: true, theirs: false },
  { feature: "Money-Back Guarantee", ours: true, theirs: false },
];

export default function ComparisonTable() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-[#1D3557] mb-4">
            How We Compare to Other Agencies
          </h2>
          <p className="text-lg text-[#1D3557]">
            Get more value and better results than agencies charging twice as much
          </p>
        </div>

        {/* Encabezado (solo desktop) */}
        <div className="hidden md:grid grid-cols-4 bg-[#1D3557] text-white font-bold rounded-t-lg p-4">
          <div>Feature</div>
          <div>Our System ($3,497)</div>
          <div className="col-span-2">Typical Agency ($5,000-$10,000)</div>
        </div>

        {/* Cuerpo */}
        <div className="border rounded-b-lg shadow-md overflow-hidden">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:grid md:grid-cols-4 border-b p-4 text-[#1D3557] bg-white"
            >
              <div className="font-semibold mb-2 md:mb-0">{item.feature}</div>

              <div className="flex items-center justify-between md:justify-center md:block md:text-center">
                <span className="md:hidden font-medium">Our System:</span>
                {item.ours ? (
                  <Check className="text-[#4CAF50] w-6 h-6 md:mx-auto" />
                ) : (
                  <X className="text-red-500 w-6 h-6 md:mx-auto" />
                )}
              </div>

              <div className=" flex items-center justify-between md:justify-center md:items-center md:block md:text-center mt-2 md:mt-0 md:col-span-2">
                <span className="md:hidden font-medium">Typical Agency:</span>
                {item.theirs ? (
                  <Check className="text-[#4CAF50] w-6 h-6 md:mx-auto" />
                ) : (
                  <X className="text-red-500 w-6 h-6 md:mx-auto" />
                )}
              </div>
            </div>
          ))}

          {/* Fila de precios */}
          <div className="bg-[#F5F5F5] p-4 text-[#1D3557] font-bold">
            <div className="hidden md:grid md:grid-cols-4">
              <div>Monthly Investment</div>
              <div className="text-[#4CAF50] text-center">$3,497/month</div>
              <div className="text-red-500 text-center col-span-2">$5,000–$10,000/month</div>
            </div>

            {/* Mobile: diseño separado y claro */}
            <div className="md:hidden space-y-4">
              <div className="flex justify-between items-center border-t pt-4">
                <span>Our System</span>
                <span className="text-[#4CAF50]">$3,497/month</span>
              </div>
              <div className="flex justify-between items-center border-t pt-4">
                <span>Typical Agency</span>
                <span className="text-red-500">$5,000 – $10,000/month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
