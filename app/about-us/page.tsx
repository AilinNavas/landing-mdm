import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Star,
  ChevronRight,
  BarChart,
  Shield,
  DollarSign,
  Check,
  Globe,
  MessageCircle,
  CheckCircle,
  Heart,
  ThumbsUp,
  TrendingUp,
  Rocket,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import FaqSection from "@/components/FaqSection"
import { generalFaqs } from "@/app/data/faqs"

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
     

      <main className="flex-1">
        {/* 1️⃣ Hero Section */}
        <section className="relative overflow-hidden bg-[#1D3557] py-20 text-white">
        

          <div className="container grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold uppercase leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                A Marketing Partner Who <span className="text-[#F4A261]">Puts Dentists First.</span>
              </h1>
              <p className="text-xl">
                We make marketing simple, effective, and stress-free—so you can focus on your patients.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">No Long-Term Contracts</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">90-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">Transparent Pricing</span>
                </div>
              </div>

              <div className="pt-4">
                <Button className="group bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                  <span>Schedule a Free Consultation</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Team Image */}
            <div className="relative mx-auto max-w-md rounded-lg bg-white p-3 shadow-xl">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="MUCHODENTALMARKETING team"
                  width={700}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Play Button Overlay for Video Option */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-white/80 p-4 shadow-lg transition-transform hover:scale-110">
                  <div className="h-12 w-12 rounded-full bg-[#F4A261] p-3 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2️⃣ Our Mission Section */}
        <section className="bg-[#F5F5F5] py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-block rounded-full bg-[#F4A261]/20 px-6 py-2">
                <h2 className="text-xl font-bold text-[#F4A261]">
                  Marketing for Dentists, Designed by Experts Who Care
                </h2>
              </div>

              <p className="mb-8 text-lg text-[#1D3557]">
                We started MUCHODENTALMARKETING because dentists deserve better marketing solutions.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1D3557]/10">
                    <DollarSign className="h-6 w-6 text-[#1D3557]" />
                  </div>
                  <p className="text-[#1D3557]">Too many agencies overcharge without delivering real results.</p>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1D3557]/10">
                    <MessageCircle className="h-6 w-6 text-[#1D3557]" />
                  </div>
                  <p className="text-[#1D3557]">Most dentists feel lost with complicated marketing jargon.</p>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1D3557]/10">
                    <CheckCircle className="h-6 w-6 text-[#1D3557]" />
                  </div>
                  <p className="text-[#1D3557]">
                    We simplify everything—so you get real results, without the headache.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Button className="bg-[#1D3557] hover:bg-[#1D3557]/90">
                  <span>See Our Services</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 3️⃣ What Makes Us Different Section */}
        <section className="relative bg-white py-16">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">What Makes Us Different?</h2>
              <p className="text-lg text-[#1D3557]">
                Key differentiators that set us apart from other dental marketing agencies
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <DollarSign className="h-10 w-10 text-[#F4A261]" />,
                  title: "The Best Value in the Industry",
                  description: [
                    "SEO for just $697/month—while others charge $3,000+ for the same quality.",
                    "Save up to $50,000/year with our budget-friendly marketing systems.",
                  ],
                },
                {
                  icon: <BarChart className="h-10 w-10 text-[#F4A261]" />,
                  title: "Clear, Simple Pricing",
                  description: [
                    "No hidden fees. No nonsense. You know exactly what you're paying for.",
                    "Pay month-to-month with zero pressure.",
                  ],
                },
                {
                  icon: <ThumbsUp className="h-10 w-10 text-[#F4A261]" />,
                  title: "No Contracts, Just Results",
                  description: [
                    "We believe in earning your trust, not locking you into long-term contracts.",
                    "If we don't deliver results, you don't stay—it's that simple.",
                  ],
                },
                {
                  icon: <Shield className="h-10 w-10 text-[#F4A261]" />,
                  title: "Risk-Free Guarantee",
                  description: [
                    "90-day money-back guarantee. No questions asked.",
                    "We put our money where our mouth is.",
                  ],
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 rounded-full bg-[#1D3557]/10 p-4 w-fit">{item.icon}</div>
                  <h3 className="mb-4 text-xl font-bold text-[#1D3557]">{item.title}</h3>
                  <div className="space-y-3">
                    {item.description.map((desc, j) => (
                      <p key={j} className="text-[#1D3557]">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button className="bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                Get a Marketing Plan That Works
              </Button>
            </div>
          </div>
        </section>


        {/* 6️⃣ Our Commitment Section */}
        <section className="bg-[#1D3557] py-16 text-white">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase md:text-4xl">Our Commitment</h2>
              <p className="text-lg">We're in this for the long haul</p>
            </div>

            <div className="mx-auto max-w-4xl">
              <p className="mb-8 text-center text-xl">
                We don't just want to be your marketing provider—we want to be your trusted partner for years to come.
              </p>

              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    icon: <Globe className="h-10 w-10 text-[#F4A261]" />,
                    title: "Always Transparent",
                    description: "No BS, no hype—just real results. We tell you exactly what we're doing and why.",
                  },
                  {
                    icon: <TrendingUp className="h-10 w-10 text-[#F4A261]" />,
                    title: "Always Improving",
                    description: "We're early adopters of the latest marketing trends and AI innovations.",
                  },
                  {
                    icon: <Heart className="h-10 w-10 text-[#F4A261]" />,
                    title: "Always Here For You",
                    description: "We prioritize relationships over sales, and your success is our success.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
                  >
                    <div className="mb-4 rounded-full bg-white/10 p-4 w-fit">{item.icon}</div>
                    <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button className="group bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                <span>Let's Grow Your Practice Together</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* 7️⃣ Trusted By Section */}
        {/* <section className="bg-white py-16">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1D3557] md:text-4xl">Trusted By</h2>
              <p className="text-lg text-[#1D3557]">
                Dental practices across the country rely on our marketing expertise
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <div className="h-16 w-48 rounded-lg bg-gray-100 p-4">
                      <div className="flex h-full items-center justify-center text-center text-[#1D3557] font-medium">
                        Dental Practice Logo
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 rounded-lg bg-[#F5F5F5] p-8">
              <div className="mx-auto max-w-3xl text-center">
                <h3 className="mb-6 text-2xl font-bold text-[#1D3557]">Ready to Join These Success Stories?</h3>
                <p className="mb-8 text-lg text-[#1D3557]">
                  Let's create a marketing strategy that helps your practice thrive.
                </p>
                <Button className="bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                  Let's Grow Your Practice
                </Button>
              </div>
            </div>
          </div>
        </section> */}
        <FaqSection  faqs={generalFaqs} />
      </main>

      {/* Sticky CTA Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white py-4 shadow-lg md:hidden">
        <div className="container">
          <Button className="w-full bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90">
            <Rocket className="mr-2 h-5 w-5" />
            <span>Work With Us</span>
          </Button>
        </div>
      </div>

    
    </div>
  )
}
