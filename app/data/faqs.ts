// data/faqs.ts

export type FaqItem = {
  question: string;
  answer: string;
};

export const generalFaqs: FaqItem[] = [
  {
    question: "How soon will I see results?",
    answer:
      "Most clients see initial improvements within 30-60 days. SEO results typically become significant after 90 days, while paid advertising can drive new patients immediately.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No. All our services are month-to-month with no long-term commitments required. We earn your business every month through results.",
  },
  {
    question: "What makes you different from other dental marketing agencies?",
    answer:
      "We specialize exclusively in dental marketing with proven systems specifically designed for patient acquisition. Our pricing is transparent, and we focus on ROI rather than vanity metrics.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Absolutely. As your practice grows, you can easily upgrade to more comprehensive services. If you need to scale back, you can downgrade with 30 days' notice.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "Yes. We offer a 100% satisfaction guarantee. If you don't see measurable improvements within the first 90 days, we'll refund your investment.",
  },
];

// Puedes exportar más arrays según las páginas:
export const seoPackageFaqs: FaqItem[] = [
  {
    question: "How soon will I see results from SEO?",
    answer:
      "Most clients see initial improvements within 30-60 days. Significant results typically become visible after 90 days, as Google needs time to recognize and reward the optimizations we make.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No. Our SEO package is month-to-month with no long-term commitments required. We earn your business every month through results, not contracts.",
  },
  {
    question: "What makes your SEO different from other agencies?",
    answer:
      "We specialize exclusively in dental SEO with proven systems specifically designed for patient acquisition. Our pricing is transparent, and we focus on ROI rather than vanity metrics",
  },
   {
    question: "How does the money-back guarantee work?",
    answer:
      "If you don't see measurable improvements in your search rankings within 60 days, we'll refund your investment in full. We're that confident in our ability to deliver results.",
  },
  {
    question: "Will I get a dedicated account manager?",
    answer:
      "Yes! Every client gets a dedicated SEO specialist who understands the dental industry and will be your point of contact throughout our partnership.",
  },
  
];


export const marketingSystemFaqs: FaqItem[] = [
  {
    question: "How soon will I see results?",
    answer:
      "Most clients see initial improvements within 30-60 days. Google Ads can start bringing in leads immediately, while SEO results typically become significant after 90 days.",
  },
   {
    question: "What if it doesn't work for my practice?",
    answer:
      "We offer a 90-day money-back guarantee. If you don't see measurable improvements in your lead flow and new patient numbers, we'll refund your investment in full.",
  },
   {
    question: "Is there a long-term contract?",
    answer:
      "No. Our Marketing System is month-to-month with no long-term commitments required. You can cancel anytime with 30 days' notice.",
  },
   {
    question: "How is this different from other marketing agencies?",
    answer:
      "Most agencies just bring traffic to your website. We provide a complete patient acquisition system that not only attracts potential patients but also nurtures them through automated follow-up until they book an appointment.",
  },
   {
    question: "How do I get started?",
    answer:
      "The process begins with a free consultation where we learn about your practice goals and challenges. Then we create a custom marketing plan tailored to your specific needs. Once approved, we can have your system up and running within 2-3 weeks.",
  },

];

export const webDesignFaqs: FaqItem[] = [
  {
    question: "How long does it take to build my website?",
    answer:
      "Our Single Page Website can be completed in as little as 10 days. For Traditional Multi-Page Websites, the timeline is typically 4-6 weeks, depending on the complexity and your feedback turnaround time.",
  },
   {
    question: "Do I own my website?",
    answer:
      "Yes, 100%. Once your website is completed and paid for, you own all the content, design, and code. We don't lock you into proprietary platforms or hold your website hostage.",
  },
   {
    question: "Can I add more pages later?",
    answer:
      "Both our website packages are designed to be scalable. For the Single Page Website, we can add additional pages as your practice grows. The Traditional Multi-Page Website already includes the ability to add unlimited pages.",
  },
   {
    question: "What if I'm not happy with my website?",
    answer:
      "We offer a 90-day money-back guarantee. If you're not completely satisfied with your website within the first 90 days after launch, we'll refund your investment in full. We're that confident in our work.",
  },
   {
    question: "Do you provide hosting and maintenance?",
    answer:
      "Yes, we offer optional hosting and maintenance packages to keep your website secure, up-to-date, and performing optimally. However, you're free to host your website wherever you prefer.",
  },

];