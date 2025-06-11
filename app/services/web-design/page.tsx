'use client'
import Image from "next/image"
import googleAssistant from '@/public/icons/1.svg'
import alexa from '@/public/icons/2.svg'
import siri from '@/public/icons/3.svg'
import Link from "next/link"
import {
  ArrowRight,
  Star,
  ChevronRight,
  BarChart,
  Clock,
  Shield,
  DollarSign,
  Search,
  Check,
  X,
  Globe,
  Smartphone,
  CheckCircle,
  Laptop,
  Code,
  Rocket,
  Eye,
  Zap,
  MapPin,
  MessageCircle,
  ClipboardList,
  UserRound

} from "lucide-react"
import { webDesignFaqs } from "@/app/data/faqs"
import { Button } from "@/components/ui/button"
import FaqSection from "@/components/FaqSection"
import HeroVsl from "@/components/services/HeroVsl"
import VslFinalSection from "@/components/services/VslFinalSection"
import LightningProcess from "@/components/services/LightningProcess"


export default function WebDesignPage() {
  return (
    <div className="flex min-h-screen flex-col">


      <main className="flex-1">

        <HeroVsl />

        {/* NEW SECTION: From Meeting to Mockup Process - ENHANCED */}
        <section className="relative bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] py-20 overflow-hidden">

          <div className="container relative z-10">
            <div className="mx-auto text-center">
              {/* Enhanced Header */}
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#FFCE1B]/10 px-6 py-2">
                <svg className="h-5 w-5 text-[#FFCE1B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm  text-[#FFCE1B] uppercase tracking-wide">
                  Lightning Fast Process
                </span>
              </div>

              <h2 className="mb-6 text-4xl md:text-5xl font-bold text-[#1D3557] leading-tight uppercase">
                From Meeting to Mockup
                <br />
                <span className="text-[#4CAF50]">In Just Days, Not Weeks</span>
              </h2>

              <p className="mb-16 text-xl text-[#1D3557] leading-relaxed max-w-4xl mx-auto">
                Our process is fast, simple, and completely risk-free. No sales calls. No commitments.
                <br className="hidden md:block" />
                Just clarity, creativity, and a custom preview built around your practice.
              </p>

              {/* Enhanced 3-Step Timeline */}
              <div className="relative mb-16">
                {/* Connection line for desktop */}
                <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
                  <div className="relative h-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1D3557] via-[#4CAF50] to-[#1D3557]  rounded-full opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1D3557] via-[#4CAF50] to-[#1D3557]  rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
                  {/* Step 1 - Enhanced */}
                  <div className="relative group">
                    <div className="text-center">
                      {/* Time badge */}
                      <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#1D3557]/10 px-4 py-1">
                        <Clock className="h-4 w-4 text-[#1D3557] mr-2" />
                        <span className="text-sm font-semibold text-[#1D3557]">30 Minutes</span>
                      </div>

                      {/* Enhanced icon */}
                      <div className="mb-6 flex justify-center">
                        <div className="relative">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1D3557] shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                            <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          {/* Pulse ring */}
                          <div className="absolute -inset-2 rounded-full border-2 border-[#1D3557]/20 animate-ping"></div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                        <h3 className="mb-4 text-2xl font-bold text-[#003366]">Step 1: The Brand Deep-Dive</h3>
                        <p className="text-[#64748b] leading-relaxed mb-6 text-lg">
                          We meet for 30 minutes. You talk—we listen. We uncover your voice, your goals, your style, and
                          everything that makes your practice unique.
                        </p>
                        <div className="flex items-center justify-center text-[#F4A261] font-semibold">

                          <span className="text-[#003366]">You leave with zero pressure—and we get to work.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 - Enhanced */}
                  <div className="relative group">
                    <div className="text-center">
                      {/* Time badge */}
                      <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#4CAF50]/10 px-4 py-1">
                        <Zap className="h-4 w-4 text-[#4CAF50] mr-2" />
                        <span className="text-sm font-semibold text-[#4CAF50]">3-5 Days</span>
                      </div>

                      {/* Enhanced icon */}
                      <div className="mb-6 flex justify-center">
                        <div className="relative">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#4CAF50] shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                            <svg
                              className="h-10 w-10 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          {/* Pulse ring */}
                          <div
                            className="absolute -inset-2 rounded-full border-2 border-[#F4A261]/20 animate-ping"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border-2 border-[#4CAF50]/20">
                        <div className="mb-3 inline-flex items-center justify-center rounded-full bg-[#4CAF50]/10 px-3 py-1">
                          <span className="text-xs font-bold text-[#4CAF50] uppercase tracking-wide">FREE</span>
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-[#003366]">Step 2: Your Free Custom Preview</h3>
                        <p className="text-[#64748b] leading-relaxed mb-6 text-lg">
                          In just a few days, we present a fully custom homepage and service page—built around your
                          story, brand, and patients.
                        </p>
                        <div className="flex items-center justify-center text-[#4CAF50] font-semibold">

                          <span>You see exactly what your site could be, before paying a dime.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 - Enhanced */}
                  <div className="relative group">
                    <div className="text-center">
                      {/* Time badge */}
                      <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#1D3557]/10 px-4 py-1">
                        <Rocket className="h-4 w-4 text-[#1D3557] mr-2" />
                        <span className="text-sm font-semibold text-[#1D3557]">1-2 Weeks</span>
                      </div>

                      {/* Enhanced icon */}
                      <div className="mb-6 flex justify-center">
                        <div className="relative">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1D3557] shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                            <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                              />
                            </svg>
                          </div>
                          {/* Pulse ring */}
                          <div
                            className="absolute -inset-2 rounded-full border-2 border-[#4CAF50]/20 animate-ping"
                            style={{ animationDelay: "1s" }}
                          ></div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                        <h3 className="mb-4 text-2xl font-bold text-[#003366]">Step 3: Final Touches & Launch</h3>
                        <p className="text-[#64748b] leading-relaxed mb-6 text-lg">
                          You approve the design, we handle the tech. Then we meet again to launch your new site and
                          show you how to turn it into a revenue-generating machine.
                        </p>
                        <div className="flex items-center justify-center text-[#1D3557] font-semibold">

                          <span>You're live—and in control.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Section */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#F4A261]/20">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-[#1D3557] flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#F4A261] flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#4CAF50] flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-[#64748b] ml-3">Join 200+ Happy Practices</span>
                    </div>
                  </div>

                  <Button
                    className="group bg-gradient-to-r from-[#1D3557] to-[#2D4A6B] text-white hover:from-[#2D4A6B] hover:to-[#1D3557] mb-4 text-lg px-8 py-4 h-auto shadow-xl hover:shadow-2xl transition-all duration-300"
                    size="lg"
                    onClick={() => {
                      const element = document.getElementById("contact-form")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    <Check className="hidden md:block mr-3 h-6 w-6" />
                    <span className="hidden md:block uppercase">Book Your Free Preview — No Pressure. No Payment. Just Proof.</span>
                    <span className="md:hidden">Book Your Free Preview</span>
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1 hidden md:block" />
                  </Button>

                  <p className="text-[#4CAF50] font-semibold text-lg uppercase">See First. Pay Later. </p>

                  {/* Trust indicators */}
                  <div className="mt-6 flex flex-col md:flex-row items-center justify-center md:space-x-6 text-sm text-[#64748b]">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-[#4CAF50]" />
                      <span>100% Risk-Free</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-text-[#003366]" />
                      <span>Fast Turnaround</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2 text-[#F4A261] fill-current" />
                      <span>5-Star Process</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1️⃣ Hero Section */}
        <section className="relative overflow-hidden bg-[#1D3557] py-20 text-white">

          <div className="container grid gap-8 md:grid-cols-2 md:items-center">


            {/* Website Mockup */}
            <div className="relative mx-auto max-w-md">
              {/* Desktop Mockup */}
              <div className="rounded-lg bg-white p-3 shadow-xl">
                <div className="mb-2 flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/images/web-design.webp"
                    alt="Modern dental website design"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute -bottom-4 md:-bottom-10 right-6 md:-right-10 w-[40%] rounded-lg bg-white p-2 shadow-xl">
                <div className="mb-1 flex justify-center">
                  <div className="h-1 w-8 rounded-full bg-gray-300"></div>
                </div>
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/images/mobile.webp"
                    alt="Mobile dental website design"
                    width={150}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-1 flex justify-center">
                  <div className="h-3 w-3 rounded-full border border-gray-300"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="font-bold uppercase leading-tight tracking-tighter text-4xl md:text-5xl text-center md:text-left">
                Your Website Should Attract More Patients – <span className="text-[#4CAF50]">Not Just Sit There</span>
              </h1>
              <p className="text-xl leading-relaxed text-center md:text-left ">
                We create high-converting dental websites that look great, load fast, and bring in new patients.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">SEO-Optimized</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">Mobile-Friendly</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">No Contracts</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center md:justify-start">
                <Button className="group bg-[#4CAF50] text-white hover:bg-[#4CAF50]/90" size="lg">
                  <span className="uppercase text-lg">Get Started Today</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

          </div>
        </section>

        {/* 2️⃣ Why Your Website Matters Section */}
        <section className="bg-[#F5F5F5] py-16">
          <div className="container">
            <h2 className="mb-6 text-4xl md:text-5xl font-bold text-[#1D3557] leading-tight uppercase text-center">
              Why Your Website Matters
            </h2>

            <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
              <div className="mb-6 text-center">
                <div className="mb-2 inline-block rounded-full bg-[#4CAF50]/20 px-4 py-2 text-lg font-bold text-[#4CAF50]">
                  Did You Know?
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    icon: <Eye className="h-10 w-10 text-[#003366]" />,
                    stat: "75%",
                    description: "of patients judge a practice based on its website.",
                  },
                  {
                    icon: <Clock className="h-10 w-10 text-[#003366]" />,
                    stat: "3 seconds",
                    description: "is all you have before visitors leave a slow website.",
                  },
                  {
                    icon: <X className="h-10 w-10 text-[#003366]" />,
                    stat: "90%",
                    description: "of 'cheap' websites don't optimize for SEO or conversions.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-[#1D3557]/10 p-4">{item.icon}</div>
                    <div className="mb-2 text-3xl font-bold text-[#003366]">{item.stat}</div>
                    <p className="text-[#1D3557]">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="mb-6 text-lg font-medium text-[#1D3557]">
                  <span className="text-[#4CAF50] font-bold">Solution:</span> We build high-performance websites
                  designed to grow your practice.
                </p>
                <Button className="bg-[#1D3557] hover:bg-[#1D3557]/90">
                  <span>See Our Designs</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 3️⃣ Web Design Packages Section */}
        <section className="relative bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-6 text-4xl md:text-5xl font-bold text-[#1D3557] leading-tight uppercase text-center">Our Web Design Packages</h2>
              <p className="text-xl leading-relaxed text-[#1D3557]">Choose the right website for your practice</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 justify-center">
              {/* Single Page Website */}
              <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-lg ">
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-full bg-[#1D3557]/10 p-4">
                    <Laptop className="h-10 w-10 text-[#1D3557]" />
                  </div>
                  <div className="rounded-full bg-[#003366]/10 px-4 py-2 text-sm font-medium text-[#003366]">
                    Ready in 10 Days
                  </div>
                </div>

                <h3 className="mb-2 text-2xl font-bold text-[#003366] uppercase">1. Single Page Website</h3>
                <div className="mb-4 text-3xl font-bold text-[#4CAF50]">$1,247</div>
                <p className="mb-6 text-[#1D3557]">
                  Perfect for new practices or those who need a strong online presence FAST.
                </p>

                <div className="mb-6 flex-1 space-y-3">
                  {[
                    "All Essential Sections (Services, About, Contact, Reviews)",
                    "Mobile-Friendly & SEO-Optimized",
                    "Blazing-Fast Speed & Security",
                    "Call-to-Action Strategy to Convert Visitors into Patients",
                    "Custom Domain Setup",
                    "Basic Analytics Integration",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4CAF50]" />
                      <span className="text-[#1D3557]">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="group bg-[#1D3557] hover:bg-[#1D3557]/90 w-full">
                  <span className="uppercase text-lg">Get My Website in 10 Days</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Traditional Multi-Page Website */}
              <div className="flex flex-col rounded-lg border-2 border-[#4CAF50] bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-full bg-[#4CAF50]/10 p-4">
                    <Globe className="h-10 w-10 text-[#4CAF50]" />
                  </div>
                  <div className="rounded-full bg-[#4CAF50]/10 px-4 py-2 text-sm font-medium text-[#4CAF50]">
                    Most Popular
                  </div>
                </div>

                <h3 className="mb-2 text-2xl font-bold text-[#003366] uppercase">2. Traditional Multi-Page Website</h3>
                <div className="mb-4 text-3xl font-bold text-[#4CAF50]">$4,497</div>
                <p className="mb-6 text-[#1D3557]">
                  For practices that want a premium website optimized for SEO & conversions.
                </p>

                <div className="mb-6 flex-1 space-y-3">
                  {[
                    "Unlimited Service Pages (Realistically up to 25)",
                    "SEO-Optimized Structure for Higher Google Rankings",
                    "Custom Design Tailored to Your Brand",
                    "Patient Forms, Blog, & Lead Capture Features",
                    "Full Conversion Strategy Built In",
                    "Advanced Analytics & Tracking",
                    "Content Management System",
                    "Ongoing Technical Support",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4CAF50]" />
                      <span className="text-[#1D3557]">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="group bg-[#4CAF50] text-white hover:bg-[#4CAF50]/90 w-full">
                  <span className="uppercase text-lg">Get a High-Converting Website</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4️⃣ What Makes Us Different Section */}
        <section className="bg-[#1D3557] py-16 text-white">
          <div className="container">
            <div className="mx-auto mb-12 text-center">
              <h2 className="mb-6 text-4xl md:text-5xl font-bold text-white leading-tight uppercase text-center">
                Not Just a Website. A Patient-Generating Machine
              </h2>
              <p className="text-xl leading-relaxed">What makes our web design services different.</p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  {
                    icon: <Search className="h-10 w-10 text-[#4CAF50]" />,
                    title: "SEO + Conversion Focused",
                    description:
                      "Built to rank & turn visitors into patients. Every element is designed with conversion in mind.",
                  },
                  {
                    icon: <DollarSign className="h-10 w-10 text-[#4CAF50]" />,
                    title: "Best Value for Your Investment",
                    description:
                      "No overpriced, bloated agency fees. Just high-quality websites that deliver real results.",
                  },
                  {
                    icon: <Smartphone className="h-10 w-10 text-[#4CAF50]" />,
                    title: "Mobile-First Approach",
                    description:
                      "Over 70% of visitors will be on their phones. We design for mobile first, then adapt to desktop.",
                  },
                  {
                    icon: <Shield className="h-10 w-10 text-[#4CAF50]" />,
                    title: "No Contracts. No Risk.",
                    description:
                      "We earn your trust, not force you into contracts. Plus, a 90-day money-back guarantee.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 text-center"
                  >
                    <div className="mb-4 rounded-full bg-white/10 p-4 w-fit mx-auto">{item.icon}</div>
                    <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button className="bg-[#4CAF50] text-white uppercase hover:bg-[#4CAF50]/90" size="lg">
                See Why Dentists Choose Us
              </Button>
            </div>
          </div>
        </section>


        {/* NUEVA SECCIÓN: Performance That Pays for Itself */}
        <section className="bg-[#f9f9f9] py-20">
          <div className="container">
            <div className="mx-auto text-center mb-12">
              <h2 className="mb-6 text-4xl md:text-5xl font-bold text-[#1D3557] leading-tight uppercase text-center">Performance That Pays for Itself</h2>
              <h3 className="text-xl leading-relaxed text-[#1D3557]">
                Smart features that turn your website into your #1 patient generator.
              </h3>

            </div>

            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Card 1 */}
                <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md hover:scale-[1.02] text-center">
                  <div className="mb-4 rounded-full bg-[#4CAF50]/10 p-4 w-fit mx-auto">
                    <MapPin className="h-10 w-10 text-[#4CAF50]" />
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-[#003366]">Local SEO Domination</h4>
                  <p className="mb-4 text-[#1D3557]">
                    Appear in Google's Local Pack, Maps, and "near me" searches for every service you offer.
                  </p>
                  <p className="text-sm font-semibold text-[#4CAF50]">Built to rank where it counts—your neighborhood.</p>
                </div>

                {/* Card 2 */}
                <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md hover:scale-[1.02] text-center">
                  <div className="mb-4 rounded-full bg-[#4CAF50]/10 p-4 w-fit mx-auto">
                    <Zap className="h-10 w-10 text-[#4CAF50]" />
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-[#003366]">AI Search Optimization</h4>
                  <p className="mb-4 text-[#1D3557]">
                    We optimize your site to show up in Google's generative AI results and answer boxes.
                  </p>
                  <p className="text-sm font-semibold text-[#4CAF50]">
                    Stay ahead of the search curve. Be the answer patients find first.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md hover:scale-[1.02] text-center">
                  <div className="mb-4 rounded-full bg-[#4CAF50]/10 p-4 w-fit mx-auto">
                    <MessageCircle className="h-10 w-10 text-[#4CAF50]" />
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-[#003366]">Exit-Intent Popup Conversion</h4>
                  <p className="mb-4 text-[#1D3557]">
                    Recover up to 25% of visitors who were about to leave—with one simple, patient-friendly prompt.
                  </p>
                  <p className="text-sm font-semibold text-[#4CAF50]">
                    Don't lose potential patients. Capture them before they click away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NUEVA SECCIÓN: Built for Today's Patient Journey */}
        <section className="bg-[#1D3557] text-white py-20">
          <div className="container">
            <div className="mx-auto  text-center mb-12">
              <h2 className="mb-6 text-4xl md:text-5xl font-bold leading-tight uppercase text-center">Built for Today's Patient Journey</h2>
              <h3 className="text-xl leading-relaxed]">
                Mobile-first. Lightning-fast. Built to convert from the first tap.
              </h3>

            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Card 1 */}
                <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 shadow-md  hover:shadow-lg hover:translate-y-[-2px] text-center">
                  <div className="mb-4 rounded-full bg-white/10 p-4 w-fit mx-auto">
                    <Smartphone className="h-10 w-10 text-[#4CAF50]" />
                  </div>
                  <h4 className="mb-3 text-xl font-semibold ">Mobile-First, Responsive Design</h4>
                  <p className="mb-4 text-white/80">
                    Looks flawless on every screen size, from phones to tablets to desktop monitors.
                  </p>
                  <p className="text-sm font-semibold text-[#4CAF50]">
                    Designed to impress—wherever your patients are searching.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 shadow-md  hover:shadow-lg hover:translate-y-[-2px] text-center">
                  <div className="mb-4 rounded-full bg-white/10 p-4 w-fit mx-auto">
                    <Clock className="h-10 w-10 text-[#4CAF50]" />
                  </div>
                  <h4 className="mb-3 text-xl font-semibold ">3-Second Load Time Guarantee</h4>
                  <p className="mb-4 text-white/80">
                    Slow sites lose 40% of visitors. We build yours to load lightning-fast—or we rebuild it for free.
                  </p>
                  <p className="text-sm font-semibold text-[#4CAF50]">
                    Speed isn't optional. It's the difference between a visit and a bounce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NUEVA SECCIÓN: Change Is Free. And Effortless. */}
        <section className="bg-[#f9f9f9] py-20">
          <div className="container">
            <div className="mx-auto  text-center mb-12">
              <h2 className="mb-6 text-4xl md:text-5xl font-bold text-[#1D3557] leading-tight uppercase text-center">Change Is Free. And Effortless.</h2>
              <h3 className="text-xl leading-relaxed text-[#1D3557]">
                Unlimited updates, pages, and revisions.
              </h3>

            </div>

            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Card 1 */}
                <div className="rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:translate-y-[-2px]">
                  <div className="mb-4 rounded-full bg-[#4CAF50]/10 p-4 w-fit mx-auto">
                    <svg className="h-10 w-10 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-[#003366] text-center">
                    12 Months of Content Updates
                  </h4>
                  <p className="mb-4 text-[#1D3557] text-center">
                    From adding team members to updating hours—we make it easy.
                  </p>
                  <p className="text-sm font-semibold text-[#4CAF50] text-center">Stay current without the cost.</p>
                </div>

                {/* Card 2 */}
                <div className="rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:translate-y-[-2px]">
                  <div className="mb-4 rounded-full bg-[#4CAF50]/10 p-4 w-fit mx-auto">
                    <svg className="h-10 w-10 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-[#003366] text-center">Unlimited Service Pages</h4>
                  <p className="mb-4 text-[#1D3557] text-center">
                    Want a new page for implants, whitening, or Invisalign? No problem.
                  </p>
                  <p className="text-sm font-semibold text-[#4CAF50] text-center">
                    Every treatment gets the visibility it deserves.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:translate-y-[-2px]">
                  <div className="mb-4 rounded-full bg-[#4CAF50]/10 p-4 w-fit mx-auto">
                    <svg className="h-10 w-10 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-[#003366] text-center">Unlimited Design Revisions</h4>
                  <p className="mb-4 text-[#1D3557] text-center">
                    You've got 90 days after launch to tweak anything until it's perfect.
                  </p>
                  <p className="text-sm font-semibold text-[#4CAF50] text-center">Get it just right—without the pressure.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NUEVA SECCIÓN: Peace of Mind, Built In */}
        <section className="bg-white py-20">
          <div className="container">
            <div className="mx-auto  text-center mb-12">
              <h2 className="mb-6 text-4xl md:text-5xl font-bold text-[#1D3557] leading-tight uppercase text-center">
                No Lawsuits. No Loopholes
              </h2>
              <h3 className="text-xl leading-relaxed text-[#1D3557]">
                Built-in compliance that protects your patients—and your practice.
              </h3>

            </div>

            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Card 1 */}
                <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg hover:translate-y-[-2px]">
                  <div className="mb-4 rounded-full bg-[#003366]/10 p-4 w-fit mx-auto">
                    <svg className="h-10 w-10 text-[#003366] " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-[#003366] text-center">HIPAA-Compliant Hosting</h4>
                  <p className="mb-4 text-[#1D3557] text-center">
                    Your site is protected with medical-grade encryption and privacy controls.
                  </p>
                  <p className="text-sm font-semibold text-[#003366] text-center">Patient data stays private. Always.</p>
                </div>

                {/* Card 2 */}
                <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg hover:translate-y-[-2px]">
                  <div className="mb-4 rounded-full bg-[#003366]/10 p-4 w-fit mx-auto">

                    <ClipboardList className="h-10 w-10 text-[#003366]" />
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-[#003366] text-center">
                    HIPAA-Compliant Patient Forms
                  </h4>
                  <p className="mb-4 text-[#1D3557] text-center">
                    Custom forms that collect sensitive info securely and legally.
                  </p>
                  <p className="text-sm font-semibold text-[#003366] text-center">
                    Smart design, safe collection. No shortcuts.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg hover:translate-y-[-2px]">
                  <div className="mb-4 rounded-full bg-[#003366]/10 p-4 w-fit mx-auto">
                    <UserRound className="w-10 h-10 text-[#003366]" />
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-[#003366] text-center">
                    ADA Accessibility Compliance
                  </h4>
                  <p className="mb-4 text-[#1D3557] text-center">
                    Your website works for everyone, including users with disabilities.
                  </p>
                  <p className="text-sm font-semibold text-[#003366] text-center">
                    Care-driven compliance for every patient.
                  </p>
                </div>
              </div>

              {/* Optional legal disclaimer */}
              <div className="mt-12 text-center">
                <p className="text-sm text-[#666666] italic">
                  We're not lawyers—but we work with real ones to make sure your digital presence stays compliant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NUEVA SECCIÓN: Same-Day Emergency Fixes - POLISHED */}
        <section className="bg-[#1D3557] py-20 text-white">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 md:grid-cols-2 md:items-center">
                {/* Left side - Main content */}
                <div className="space-y-6">


                  <h2 className="mb-6 text-4xl md:text-5xl font-bold text-white leading-tight uppercase text-center md:text-left">
                    If Your Site Breaks, We Fix It—Same Day. <span className="text-[#4CAF50]">Guaranteed</span>
                  </h2>

                  <h3 className="text-xl leading-relaxed text-white text-center md:text-left">
                    No panic. No waiting. Just fast, expert help when it matters most.
                  </h3>



                  <div className="pt-4 text-center md:text-left">
                    <Button className="bg-[#4CAF50] text-white uppercase text-lg hover:bg-[#4CAF50]/90 font-semibold">
                      Need Us Now? We're On It
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Right side - Stat callout and notification */}
                <div className="space-y-6">
                  {/* Main stat callout */}
                  <div className="rounded-xl bg-white p-8 shadow-lg">
                    <div className="text-center">
                      <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#1D3557]/10 p-3">
                        <svg className="h-8 w-8 text-[#1D3557]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                          />
                        </svg>
                      </div>

                      <div className="mb-3 text-4xl font-bold text-[#1D3557]">94%</div>
                      <p className="text-[#1D3557] mb-4 leading-relaxed">
                        of dental patients say they won't trust a practice with a broken or slow website.
                      </p>
                      <p className="text-sm font-medium text-[#4CAF50] italic">
                        We make sure that never happens to yours.
                      </p>
                    </div>
                  </div>

                  {/* Mock notification */}
                  <div className="rounded-lg bg-[#4CAF50]/20 border border-[#4CAF50]/30 p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <div className="rounded-full bg-[#4CAF50] p-1">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">Site fixed and running smoothly</p>
                        <p className="text-xs text-white/80">Response time: 47 minutes</p>
                      </div>
                      <div className="text-xs text-white/60">Today, 9:47 AM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 5️⃣ Before & After Section */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="mx-auto mb-12 text-center">
              <h2 className="mb-6 text-4xl md:text-5xl font-bold text-[#1D3557] leading-tight uppercase text-center">
                Before & After: The Transformation
              </h2>
              <p className="text-xl leading-relaxed text-[#1D3557]">See the difference a high-converting website makes.</p>
            </div>

            <div className="mx-auto mb-16 max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Before Website */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
                  <div className="mb-4 inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-600">
                    BEFORE
                  </div>
                  <div className="mb-4 overflow-hidden rounded-lg border border-gray-200">
                    <video
                      src="/videos/before.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <X className="mr-2 h-5 w-5 text-red-500" />
                      <span className="text-gray-600">Outdated design</span>
                    </div>
                    <div className="flex items-center">
                      <X className="mr-2 h-5 w-5 text-red-500" />
                      <span className="text-gray-600">Slow loading speed</span>
                    </div>
                    <div className="flex items-center">
                      <X className="mr-2 h-5 w-5 text-red-500" />
                      <span className="text-gray-600">Poor mobile experience</span>
                    </div>
                    <div className="flex items-center">
                      <X className="mr-2 h-5 w-5 text-red-500" />
                      <span className="text-gray-600">No clear call-to-action</span>
                    </div>
                    <div className="flex items-center">
                      <X className="mr-2 h-5 w-5 text-red-500" />
                      <span className="text-gray-600">Not optimized for SEO</span>
                    </div>
                  </div>
                </div>

                {/* After Website */}
                <div className="rounded-lg border border-[#4CAF50] bg-white p-6 shadow-md">
                  <div className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-600">
                    AFTER
                  </div>
                  <div className="mb-4 overflow-hidden rounded-lg border border-gray-200">
                    <video
                      src="/videos/after.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Modern, professional design</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Lightning-fast loading</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Fully responsive on all devices</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Strategic CTAs that convert</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">SEO-optimized for higher rankings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="mt-10 text-center">
              <Button className="bg-[#1D3557] hover:bg-[#1D3557]/90 uppercase text-lg" size="lg">
                Let's Build Your Website
              </Button>
            </div>
          </div>
        </section>

        {/* 6️⃣ Our Process Section */}
        <section className="bg-[#F5F5F5] py-16">
          <div className="container">
            <div className="mx-auto mb-12 text-center">
              <h2 className="mb-6 text-4xl md:text-5xl font-bold text-[#1D3557] leading-tight uppercase text-center">
                Our Website Design Process
              </h2>
              <p className="text-xl leading-relaxed text-[#1D3557]">Simple, transparent, and focused on results.</p>
            </div>

            <div className="relative mx-auto max-w-4xl">
              <div className="absolute left-[50%] top-0 bottom-0 hidden w-0.5 -translate-x-1/2 bg-[#1D3557]/20 md:block"></div>

              <div className="space-y-12">
                {[
                  {
                    step: "1",
                    title: "Discovery",
                    description:
                      "We learn about your practice, your patients, and your goals to create a website strategy that aligns with your business objectives.",
                    icon: <Search className="h-6 w-6 text-white" />,
                  },
                  {
                    step: "2",
                    title: "Design",
                    description:
                      "Our designers create a custom mockup of your website, focusing on both aesthetics and conversion optimization.",
                    icon: <Laptop className="h-6 w-6 text-white" />,
                  },
                  {
                    step: "3",
                    title: "Development",
                    description:
                      "We build your website with clean code, optimized for speed, security, and search engines.",
                    icon: <Code className="h-6 w-6 text-white" />,
                  },
                  {
                    step: "4",
                    title: "Launch",
                    description:
                      "After thorough testing, we launch your new website and provide training on how to use it effectively.",
                    icon: <Rocket className="h-6 w-6 text-white" />,
                  },
                  {
                    step: "5",
                    title: "Growth",
                    description:
                      "We monitor performance and make ongoing optimizations to ensure your website continues to attract and convert patients.",
                    icon: <BarChart className="h-6 w-6 text-white" />,
                  },
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div
                      className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        } items-center gap-8`}
                    >
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#1D3557] text-xl font-bold text-white shadow-lg md:mx-8">
                        {step.icon}
                      </div>
                      <div
                        className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:w-[calc(50%-4rem)] ${i % 2 === 0 ? "md:text-left" : "md:text-right"
                          }`}
                      >
                        <h3 className="mb-2 text-xl font-bold text-[#003366]">
                          {step.step}. {step.title}
                        </h3>
                        <p className="text-[#1D3557]">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <VslFinalSection />



        {/* Voice Search Optimization Section */}
        <section className="py-16 bg-gradient-to-b from-[#f7fafe] to-white">
          <div className="container">
            <div className="mx-auto text-center">
              <div className="mb-6 inline-flex items-center justify-center">
                <div className="relative">
                  {/* Sound Wave Animation Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4CAF50]/10">
                    <svg
                      className="h-8 w-8 text-[#4CAF50]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 1V23"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 5V19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 9V15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 5V19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 9V15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Animated Rings */}
                  <div className="absolute -inset-1 rounded-full border border-[#1D3557]/20 animate-pulse"></div>
                  <div
                    className="absolute -inset-4 rounded-full border border-[#1D3557]/10 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
              </div>

              <h2 className="mb-6 text-4xl md:text-5xl font-bold text-[#1D3557] leading-tight uppercase text-center">Optimized for Alexa, Google Assistant and siri</h2>
              <h3 className="text-xl leading-relaxed text-[#1D3557] pb-6">Ready for the Future of Search.</h3>

              <p className="mb-6 text-lg text-[#1D3557] leading-relaxed">
                More patients are using voice search to find local services - "Alexa, find a dentist near me." We make
                sure your website is structured to show up in these results. You won't just rank on screens—you'll rank
                in smart homes, cars, and everywhere patients are searching.
              </p>

              <p className="text-[#4CAF50] text-xl font-bold uppercase">Be the answer they hear first.</p>

              {/* Smart Device Icons */}
              <div className="mt-8 flex justify-center gap-12">
                <div className="flex flex-col items-center w-20 space-y-4">

                  <Image src={googleAssistant} alt={"icon-google-assistant"} width={100} height={100} />

                  <span className="text-sm text-[#666666]">Google Assistant</span>
                </div>

                <div className="flex flex-col items-center w-20 space-y-4">
                  <Image src={alexa} alt={"icon-alexa"} width={100} height={100} />
                  <span className="text-sm text-[#666666]">Alexa</span>
                </div>

                <div className="flex flex-col items-center w-20 space-y-4">
                  <Image src={siri} alt={"icon-siri"} width={100} height={100} />
                  <span className="text-sm text-[#666666]">Siri</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LightningProcess />


        {/* 8️⃣ Final CTA Section */}
        <section className="bg-[#1D3557] py-16 text-white">
          <div className="container">
            <div className="mx-auto rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="text-center">
                <h2 className="mb-6 text-3xl font-bold uppercase md:text-4xl">
                  Ready for a Website That Actually Brings You Patients?
                </h2>

                <div className="mb-8 inline-block rounded-full bg-white/10 px-6 py-3">
                  <div className="flex items-center">
                    <Shield className="mr-3 h-6 w-6 text-[#4CAF50] hidden md:block" />
                    <span className="text-lg font-bold text-[#4CAF50]">90-Day Money-Back Guarantee</span>
                  </div>
                </div>

                <p className="mb-8 text-lg">
                  Join hundreds of successful dental practices with websites that don't just look pretty—they convert
                  visitors into patients.
                </p>
                <div className="flex justify-center">
                  <Button className="group bg-[#4CAF50] text-white uppercase hover:bg-[#4CAF50]/90 mx-auto" >
                    <span>Get a High-Converting Website Now</span>

                  </Button>
                </div>
                <p className="mt-4 text-sm text-white/70">
                  No contracts. No risk. Just a beautiful website that works as hard as you do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7️⃣ FAQ Section */}

        <FaqSection faqs={webDesignFaqs} />

      </main>

      {/* Sticky CTA Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white py-4 shadow-lg md:hidden ">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Button className="w-full bg-[#4CAF50] text-white hover:bg-[#4CAF50]/90">
            <Rocket className="mr-2 h-5 w-5" />
            <span className="uppercase text-lg">Build My Website</span>
          </Button>
        </div>
      </div>


    </div>
  )
}
