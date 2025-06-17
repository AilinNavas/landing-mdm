// components/FaqSection.tsx

import { FC } from "react";
import { ChevronRight } from "lucide-react";
import { FaqItem } from "../app/data/faqs"; // Adjust the import path as necessary

interface FaqSectionProps {
  faqs: FaqItem[];
  id?: string;
}

const FaqSection: FC<FaqSectionProps> = ({ faqs, id }) => {
  return (
    <section id={id} className="relative bg-white py-16 overflow-hidden">

      <div className="container relative z-10">
        <h2 className="mb-6 text-4xl md:text-5xl font-extrabold text-[#1D3557] leading-tight uppercase text-center">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-5xl space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="group cursor-pointer rounded-lg border p-6 transition-all hover:border-[#4CAF50] hover:shadow-md animate-[fadeIn_0.5s_ease-in-out]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="mb-2 flex items-center justify-between text-xl font-bold text-[#1D3557]">
                {faq.question}
                <ChevronRight className="hidden md:block h-5 w-5 transition-transform group-hover:rotate-90" />
              </h3>
              <p className="text-[#1D3557]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
