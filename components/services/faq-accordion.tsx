"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, DollarSign, Clock, Shield, Brain, Lock, RotateCcw } from "lucide-react"

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const faqCategories = [
    {
      id: "pricing",
      title: "Pricing & Payment",
      icon: <DollarSign className="h-5 w-5" />,
    
      questions: [
        {
          id: "pricing-1",
          question: "Why does it cost $3,497? Can't I get this cheaper elsewhere?",
          answer:
            "You absolutely can find cheaper websites—but you'll usually get what you pay for: generic templates, slow loading times, and zero strategy. Our websites are custom-built to convert visitors into booked patients, come with HIPAA-compliant forms, advanced SEO, emergency tech support, and include unlimited content updates. It's a full marketing engine, not just a website.",
        },
        {
          id: "pricing-2",
          question: "Why do I only pay after seeing the draft? What's the catch?",
          answer:
            "No catch. We believe in earning your trust before asking for a dime. You'll see a fully designed homepage and service page first. If you love it, we move forward. If not, you walk away—no pressure, no payment.",
        },
        
        {
          id: "pricing-3",
          question: "What if I change my mind after paying?",
          answer:
            "You're covered by our 90-Day Money-Back Guarantee. If you're not satisfied for any reason within 90 days after launch, we'll refund you in full. No questions asked.",
        },
      ],
    },
    {
      id: "time",
      title: "Time & Effort",
      icon: <Clock className="h-5 w-5" />,
      questions: [
        {
          id: "time-1",
          question: "How much time will this take from me or my team?",
          answer:
            "Just three short meetings. We do the heavy lifting—from content writing to design to launch. You focus on your practice; we'll handle the rest.",
        },
        {
          id: "time-2",
          question: "How fast can you complete my website?",
          answer:
            "Most sites go from first meeting to launch in about 3 weeks. If you're in a hurry, we can often fast-track it—just let us know during our initial meeting.",
        },
      ],
    },
    {
      id: "trust",
      title: "Trust & Results",
      icon: <Shield className="h-5 w-5" />,
      questions: [
        {
          id: "trust-1",
          question: "How do I know you're legit? Can I see examples?",
          answer:
            "Absolutely. We've worked with dentists across the U.S. and can show you real sites we've launched. We also avoid sales pressure—what you see is what you get.",
        },
        {
          id: "trust-2",
          question: "What if my new site doesn't bring in new patients?",
          answer:
            "Our sites are built for growth, not just looks. We use proven conversion strategies, advanced SEO, and lead capture features to turn visitors into appointments. You'll even get analytics that show how many patients your site is generating.",
        },
        {
          id: "trust-3",
          question: "What's the risk if this doesn't work?",
          answer:
            "Zero. No contracts, no commitment, and a full 90-day refund policy. Try the draft, then decide. You're never locked in.",
        },
      ],
    },
    {
      id: "offer",
      title: "Offer Clarity",
      icon: <Brain className="h-5 w-5" />,
      questions: [
        {
          id: "offer-1",
          question: "What's included in the website?",
          answer:
            "Everything: Custom design, on-brand content, unlimited service pages, blog setup, lead forms, local SEO, ADA & HIPAA compliance, mobile optimization, voice search readiness, and more. No page limits. No hidden fees.",
        },
        {
          id: "offer-2",
          question: "I already have a website—can you improve it instead?",
          answer:
            "If your current site has solid bones, we can rebuild or redesign on top of it. But most dentists find a clean rebuild gives better speed, SEO, and conversion results.",
        },
        {
          id: "offer-3",
          question: "Do I really need a multi-page site? What's the difference from a single-page one?",
          answer:
            'Multi-page sites are better for SEO, patient education, and local rankings. Each service gets its own page to show up in "near me" searches. If you\'re just starting out, we do offer a simpler single-page option—ask us about it.',
        },
      ],
    },
    {
      id: "technical",
      title: "Technical & Compliance",
      icon: <Lock className="h-5 w-5" />,
      questions: [
        {
          id: "technical-1",
          question: "Is this HIPAA-compliant?",
          answer:
            "Yes. Your hosting, patient forms, and data handling all follow strict HIPAA guidelines. We bake this in from day one so you're fully protected.",
        },
        {
          id: "technical-2",
          question: "What happens after launch? Will I be able to make updates?",
          answer:
            "Yes. You can make simple updates yourself, or request unlimited updates from our team for the first 12 months—free of charge.",
        },
        {
          id: "technical-3",
          question: "Will my website work well on phones and tablets?",
          answer:
            "100%. Your site will be mobile-first, load in under 3 seconds, and include thumb-friendly booking buttons. It'll look and work beautifully on every device.",
        },
      ],
    },
    {
      id: "flexibility",
      title: "Flexibility & Control",
      icon: <RotateCcw className="h-5 w-5" />,
      questions: [
        {
          id: "flexibility-1",
          question: "Can I request changes after the site goes live?",
          answer:
            "Absolutely. You get unlimited updates for the first 12 months, and we offer ongoing support afterward too. Need to tweak copy or add a new service? Just ask.",
        },
        {
          id: "flexibility-2",
          question: "Do I own the website once it's built?",
          answer: "Yes. You own the entire site—design, content, hosting, everything. No fine print.",
        },
        {
          id: "flexibility-3",
          question: "Can I cancel if I don't like how things are going?",
          answer:
            "Yes. You're free to walk away after seeing your draft, no strings attached. Even after launch, our 90-day guarantee protects you. We're not here to trap you—we're here to earn your trust.",
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 sm:px-6 mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1D3557] mb-4 uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our dental website design process
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="bg-[#1D3557] px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="text-[#4CAF50]">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">{category.title}</h3>
                </div>
              </div>

              {/* Questions */}
              <div className="divide-y divide-gray-200">
                {category.questions.map((faq, questionIndex) => (
                  <motion.div
                    key={faq.id}
                    className="border-b border-gray-100 last:border-b-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: categoryIndex * 0.1 + questionIndex * 0.05 }}
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-[#1D3557] pr-4">{faq.question}</h4>
                        <motion.div
                          animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="h-5 w-5 text-[#4CAF50]" />
                        </motion.div>
                      </div>
                    </button>

                    <AnimatePresence>
                      {openItems.includes(faq.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-[#1D3557] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              We're here to help. Book a free consultation and get all your questions answered.
            </p>
            <motion.button
              className="bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white px-8 py-3 rounded-lg font-semibold uppercase tracking-wide hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQAccordion
