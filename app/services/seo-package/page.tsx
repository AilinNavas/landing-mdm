import Image from "next/image"
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
  TrendingUp,
  Users,
  FileText,
  Globe,
  Smartphone,
  MessageCircle,

} from "lucide-react"

import { Button } from "@/components/ui/button"
import FaqSection from "@/components/FaqSection"
import { seoPackageFaqs } from "@/app/data/faqs"

export default function SEOPackagePage() {
  return (
    <div className="flex min-h-screen flex-col">
    

      <main className="flex-1">
        {/* 1️⃣ Hero Section */}
        <section className="relative overflow-hidden bg-[#1D3557] py-20 text-white">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -left-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-[#F4A261]/20 blur-3xl"></div>
            <div className="absolute right-[5%] top-[10%] h-[250px] w-[250px] rounded-full bg-[#4CAF50]/15 blur-3xl"></div>
          </div>

          <div className="container grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold uppercase leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                SEO That Works for Dentists—For Just <span className="text-[#F4A261]">$697/Month!</span>
              </h1>
              <p className="text-xl">
                Dominate local search, attract high-quality patients, and stop overpaying for SEO.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">No Contracts</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">Proven Results</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">60-Day Money-Back Guarantee</span>
                </div>
              </div>

              <div className="pt-4">
                <Button className="group bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                  <span>Boost My Rankings Today</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Google Search Results Mockup */}
            <div className="relative mx-auto max-w-md rounded-lg bg-white p-6 shadow-xl">
              <div className="mb-4 flex items-center">
                <Search className="mr-2 h-5 w-5 text-[#4285F4]" />
                <div className="text-sm font-medium text-gray-700">best dentist near me</div>
              </div>

              {/* Search Result */}
              <div className="mb-4 border-b pb-4">
                <div className="text-[#1E3A8A] text-lg font-medium">Your Dental Practice | Top-Rated Dentist</div>
                <div className="text-green-600 text-sm">yourdentalpractice.com</div>
                <div className="mt-1 flex items-center">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#F4A261] text-[#F4A261]" />
                  ))}
                  <span className="ml-1 text-sm text-gray-600">5.0 (127 reviews)</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  Award-winning dental care in your neighborhood. Specializing in general, cosmetic, and emergency
                  dental services.
                </p>
              </div>

              {/* Position Indicator */}
              <div className="rounded-md bg-[#4CAF50]/10 p-3">
                <div className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-[#4CAF50]" />
                  <div className="font-bold text-[#1D3557]">#1 Position on Google</div>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  This could be your practice ranking at the top of Google search results.
                </p>
              </div>

              {/* Google Logo */}
              <div className="mt-4 flex justify-end">
                <div className="flex items-center">
                  <div className="text-[#4285F4] font-medium">G</div>
                  <div className="text-[#EA4335] font-medium">o</div>
                  <div className="text-[#FBBC05] font-medium">o</div>
                  <div className="text-[#4285F4] font-medium">g</div>
                  <div className="text-[#34A853] font-medium">l</div>
                  <div className="text-[#EA4335] font-medium">e</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2️⃣ The Pain Section */}
        <section className="bg-[#F5F5F5] py-16">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">
              Why Most Dentists Struggle with SEO
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: <DollarSign className="h-10 w-10 text-[#F4A261]" />,
                  title: "SEO Agencies Overcharge",
                  description: "$3,000+ per month? That's insane for a dental practice!",
                },
                {
                  icon: <Clock className="h-10 w-10 text-[#F4A261]" />,
                  title: "Google Rankings Take Forever",
                  description: "Without the right strategy, you'll wait years for results.",
                },
                {
                  icon: <FileText className="h-10 w-10 text-[#F4A261]" />,
                  title: "Too Technical & Confusing",
                  description: "You need results, not a lesson in algorithms.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 rounded-full bg-[#1D3557]/10 p-4 w-fit">{item.icon}</div>
                  <h3 className="mb-2 text-xl font-bold text-[#1D3557]">{item.title}</h3>
                  <p className="text-[#1D3557]">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button className="bg-[#1D3557] hover:bg-[#1D3557]/90">
                <span>See How We Fix This</span>
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* 3️⃣ Solution Section */}
        <section className="relative bg-white py-16">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">
                What's Included in Your $697 SEO Package?
              </h2>
              <p className="text-lg text-[#1D3557]">
                Everything you need to dominate local search and attract more patients
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Globe className="h-10 w-10 text-[#1D3557]" />,
                  title: "Google Business Optimization",
                  description: "Get found by local patients searching for dental services in your area.",
                },
                {
                  icon: <FileText className="h-10 w-10 text-[#1D3557]" />,
                  title: "SEO-Optimized Website Content",
                  description: "Rank higher with conversion-focused copy that turns visitors into patients.",
                },
                {
                  icon: <FileText className="h-10 w-10 text-[#1D3557]" />,
                  title: "Monthly Backlink Building",
                  description: "Build authority that moves you up on Google with quality links.",
                },
                {
                  icon: <BarChart className="h-10 w-10 text-[#1D3557]" />,
                  title: "Ongoing Performance Tracking",
                  description: "Monthly reports showing real results and continuous improvements.",
                },
                {
                  icon: <Smartphone className="h-10 w-10 text-[#1D3557]" />,
                  title: "Mobile Optimization",
                  description: "Ensure your site performs perfectly on all devices for maximum visibility.",
                },
                {
                  icon: <MessageCircle className="h-10 w-10 text-[#1D3557]" />,
                  title: "Review Management",
                  description: "Build a stellar online reputation that attracts new patients.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#F4A261] hover:shadow-md"
                >
                  <div className="mb-4 rounded-full bg-[#F4A261]/10 p-4 w-fit">{item.icon}</div>
                  <h3 className="mb-2 text-xl font-bold text-[#1D3557]">{item.title}</h3>
                  <p className="text-[#1D3557]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky CTA */}
          <div className="sticky bottom-0 left-0 right-0 bg-white py-4 shadow-md md:hidden">
            <div className="container">
              <Button className="w-full bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90">
                Let's Grow Your Practice
              </Button>
            </div>
          </div>
        </section>

        {/* 4️⃣ Competitive Advantage */}
        <section className="bg-[#1D3557] py-16 text-white">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase md:text-4xl">
                Others Charge $3,000 – We Deliver the Same Results for $697!
              </h2>
              <p className="text-lg">See how our affordable SEO package compares to overpriced competitors</p>
            </div>

            <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white">
              <div className="grid grid-cols-3 border-b p-4">
                <div className="col-span-1 font-bold text-[#1D3557]">Feature</div>
                <div className="col-span-1 font-bold text-[#1D3557]">Our SEO ($697)</div>
                <div className="col-span-1 font-bold text-[#1D3557]">Typical SEO ($3,000+)</div>
              </div>

              {[
                {
                  feature: "Google Rankings Improvement",
                  ours: true,
                  theirs: true,
                },
                {
                  feature: "Website Optimization",
                  ours: true,
                  theirs: true,
                },
                {
                  feature: "Local SEO",
                  ours: true,
                  theirs: true,
                },
                {
                  feature: "Monthly Reporting",
                  ours: true,
                  theirs: true,
                },
                {
                  feature: "No Contracts",
                  ours: true,
                  theirs: false,
                },
                {
                  feature: "Affordable Pricing",
                  ours: true,
                  theirs: false,
                },
                {
                  feature: "60-Day Money-Back Guarantee",
                  ours: true,
                  theirs: false,
                },
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-3 border-b p-4">
                  <div className="col-span-1 text-[#1D3557]">{item.feature}</div>
                  <div className="col-span-1 text-center">
                    {item.ours ? (
                      <Check className="mx-auto h-6 w-6 text-[#4CAF50]" />
                    ) : (
                      <X className="mx-auto h-6 w-6 text-red-500" />
                    )}
                  </div>
                  <div className="col-span-1 text-center">
                    {item.theirs ? (
                      <Check className="mx-auto h-6 w-6 text-[#4CAF50]" />
                    ) : (
                      <X className="mx-auto h-6 w-6 text-red-500" />
                    )}
                  </div>
                </div>
              ))}

              {/* Bottom Row - Price */}
              <div className="grid grid-cols-3 bg-[#F5F5F5] p-4">
                <div className="col-span-1 font-bold text-[#1D3557]">Monthly Investment</div>
                <div className="col-span-1 text-center font-bold text-[#4CAF50]">$697/month</div>
                <div className="col-span-1 text-center font-bold text-red-500">$3,000+/month</div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button className="bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                Get Found Online – Start Today!
              </Button>
            </div>
          </div>
        </section>

        {/* 5️⃣ Proof Section */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">
                Real Results for Dental Practices
              </h2>
              <p className="text-lg text-[#1D3557]">
                See how we've helped dentists just like you dominate local search
              </p>
            </div>

            {/* Before & After */}
            <div className="mx-auto mb-16 max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
                  <div className="mb-4 inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-600">
                    BEFORE
                  </div>
                  <div className="mb-4 h-64 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Before SEO optimization"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Search className="mr-2 h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Google Ranking: Page 3-4</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Monthly Visitors: 120</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="mr-2 h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">New Patient Inquiries: 3-5/month</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-[#4CAF50] bg-white p-6 shadow-md">
                  <div className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-600">
                    AFTER 90 DAYS
                  </div>
                  <div className="mb-4 h-64 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="After SEO optimization"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Search className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Google Ranking: Top 3 Results</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Monthly Visitors: 850+</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">New Patient Inquiries: 25-30/month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  {
                    quote:
                      "We went from invisible to the first page of Google in 3 months! Best $697 we've ever spent.",
                    name: "Dr. Thompson",
                    location: "Miami Dental Associates",
                    rating: 5,
                  },
                  {
                    quote:
                      "After wasting thousands with another agency, MUCHODENTALMARKETING delivered real results at a fraction of the cost.",
                    name: "Dr. Williams",
                    location: "Bright Smile Dental",
                    rating: 5,
                  },
                ].map((testimonial, i) => (
                  <div key={i} className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#F4A261] text-[#F4A261]" />
                      ))}
                    </div>

                    <blockquote className="mb-6 flex-1">
                      <p className="text-lg font-medium italic text-[#1D3557]">"{testimonial.quote}"</p>
                    </blockquote>

                    <div className="flex items-center">
                      <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-[#1D3557]">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt={testimonial.name}
                          width={100}
                          height={100}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-[#1D3557]">{testimonial.name}</div>
                        <div className="text-[#A8A8A8]">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button className="bg-[#1D3557] hover:bg-[#1D3557]/90" size="lg">
                I Want These Results
              </Button>
            </div>
          </div>
        </section>

        {/* 6️⃣ The Final Call */}
        <section className="bg-[#F5F5F5] py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-xl">
              <div className="text-center">
                <h2 className="mb-6 text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">
                  Start Ranking Higher in 30 Days – Or Your Money Back!
                </h2>

                <div className="mb-8 inline-block rounded-full bg-[#4CAF50]/10 px-6 py-3">
                  <div className="flex items-center">
                    <Shield className="mr-3 h-6 w-6 text-[#4CAF50]" />
                    <span className="text-lg font-bold text-[#4CAF50]">60-Day Money-Back Guarantee</span>
                  </div>
                </div>

                <p className="mb-8 text-lg text-[#1D3557]">
                  We guarantee real progress within 60 days—or we'll refund every dollar, no questions asked.
                </p>

                <Button className="group bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                  <span>Try It Risk-Free</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="mt-4 text-sm text-gray-500">
                  No contracts. Cancel anytime. Start seeing results in as little as 30 days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
       
       <FaqSection faqs={seoPackageFaqs} />
      </main>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 hidden bg-white py-4 shadow-lg md:block">
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-4 text-2xl font-bold text-[#1D3557]">
              $697<span className="text-sm font-normal">/month</span>
            </div>
            <div className="text-[#1D3557]">No contracts. 60-day money-back guarantee.</div>
          </div>
          <Button className="bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90">Get Started Today</Button>
        </div>
      </div>

    
    </div>
  )
}
