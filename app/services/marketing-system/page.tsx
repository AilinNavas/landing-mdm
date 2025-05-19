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
  Users,
  Globe,
  MessageCircle,
  Zap,
  CheckCircle,
  Award,
  PieChart,
  Mail,
  BellRing,
  BarChart3,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import FaqSection from "@/components/FaqSection"
import { marketingSystemFaqs } from "@/app/data/faqs"

export default function MarketingSystemPage() {
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
                Fill Your Schedule with High-Value Patients – <span className="text-[#F4A261]">Without the Hassle</span>
              </h1>
              <p className="text-xl">
                Everything You Need to Attract & Convert More Patients – Ads, SEO, and an Automated Marketing Funnel.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">No Contracts</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">60-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">$1,497/month</span>
                </div>
              </div>

              <div className="pt-4">
                <Button className="group bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                  <span>Start Growing Today</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mx-auto max-w-md rounded-lg bg-white p-6 shadow-xl">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Happy dentist with patients"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Dashboard Overlay */}
              <div className="absolute -bottom-6 -right-6 w-[70%] rounded-lg bg-white p-4 shadow-xl">
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-sm font-bold text-[#1D3557]">Campaign Results</div>
                  <div className="rounded-full bg-[#4CAF50]/20 px-2 py-1 text-xs font-medium text-[#4CAF50]">
                    +47% ↑
                  </div>
                </div>
                <div className="mb-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-[75%] rounded-full bg-[#4CAF50]"></div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <div className="font-bold text-[#1D3557]">127</div>
                    <div className="text-gray-500">Leads</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#1D3557]">43</div>
                    <div className="text-gray-500">Appointments</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#1D3557]">$24k</div>
                    <div className="text-gray-500">Revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2️⃣ Problem Section */}
        <section className="bg-[#F5F5F5] py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">
              You're Busy Running a Practice. Let Us Handle the Growth.
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Clock className="h-10 w-10 text-[#F4A261]" />,
                  title: "Save Time & Frustration",
                  description: "Running ads and SEO on your own is frustrating and time-consuming.",
                },
                {
                  icon: <DollarSign className="h-10 w-10 text-[#F4A261]" />,
                  title: "Save Money",
                  description: "Most agencies charge $5,000+ per month – we do it better for $1,497/month.",
                },
                {
                  icon: <Users className="h-10 w-10 text-[#F4A261]" />,
                  title: "Get Real Patients",
                  description: "You don't need more clicks. You need actual paying patients.",
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-[#F4A261]" />,
                  title: "No Wasted Leads",
                  description: "Our system makes sure NO lead gets wasted with automated follow-up.",
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
              <p className="mb-6 text-lg text-[#1D3557]">
                <span className="font-bold">What We Do:</span> We don't just bring traffic – we convert it into
                appointments.
              </p>
              <Button className="bg-[#1D3557] hover:bg-[#1D3557]/90">
                <span>Let's Build Your Growth Plan</span>
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* 3️⃣ What's Included Section */}
        <section className="relative bg-white py-16">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">
                What's Included in Your Marketing System?
              </h2>
              <p className="text-lg text-[#1D3557]">
                <span className="font-bold text-[#F4A261]">EVERYTHING</span> you need to bring in high-value patients &
                maximize ROI.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Search className="h-10 w-10 text-[#1D3557]" />,
                  title: "All-In-One SEO Package",
                  description:
                    "Everything in the $697 SEO Plan! Rank higher in search results and get more patients through organic traffic.",
                },
                {
                  icon: <BarChart3 className="h-10 w-10 text-[#1D3557]" />,
                  title: "Google & Meta Ads",
                  description:
                    "Run high-converting campaigns for Invisalign, Veneers, Implants, and more to attract qualified patients.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-[#1D3557]" />,
                  title: "Marketing Automation Funnel",
                  description:
                    "Our proprietary system that converts leads into actual appointments with minimal effort from your team.",
                },
                {
                  icon: <MessageCircle className="h-10 w-10 text-[#1D3557]" />,
                  title: "AI-Powered Lead Follow-Up",
                  description:
                    "SMS, Email & Voicemail drops to engage potential patients fast and move them through your funnel.",
                },
                {
                  icon: <PieChart className="h-10 w-10 text-[#1D3557]" />,
                  title: "Conversion Tracking Dashboard",
                  description:
                    "See exactly where your patients are coming from and which marketing channels are performing best.",
                },
                {
                  icon: <Users className="h-10 w-10 text-[#1D3557]" />,
                  title: "Dedicated Account Manager",
                  description:
                    "Your personal marketing expert who understands the dental industry and your specific practice goals.",
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

            <div className="mt-10 text-center">
              <Button className="bg-[#1D3557] hover:bg-[#1D3557]/90">
                <span>See How It Works</span>
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* 4️⃣ How It Works Section */}
        <section className="bg-[#F5F5F5] py-16">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">
                How Our Marketing System Works
              </h2>
              <p className="text-lg text-[#1D3557]">
                A complete patient acquisition system that works while you focus on dentistry
              </p>
            </div>

            <div className="relative mx-auto max-w-4xl">
              <div className="absolute left-[50%] top-0 bottom-0 hidden w-0.5 -translate-x-1/2 bg-[#1D3557]/20 md:block"></div>

              <div className="space-y-12">
                {[
                  {
                    step: "1",
                    title: "Attract",
                    description:
                      "We use a combination of SEO and targeted ads to attract potential patients looking for your specific services.",
                    icon: <Search className="h-6 w-6 text-white" />,
                  },
                  {
                    step: "2",
                    title: "Engage",
                    description:
                      "Potential patients interact with your optimized landing pages designed to convert visitors into leads.",
                    icon: <Users className="h-6 w-6 text-white" />,
                  },
                  {
                    step: "3",
                    title: "Nurture",
                    description:
                      "Our AI-powered system automatically follows up with leads via SMS, email, and voicemail to book appointments.",
                    icon: <MessageCircle className="h-6 w-6 text-white" />,
                  },
                  {
                    step: "4",
                    title: "Convert",
                    description:
                      "Your front desk receives pre-qualified leads who are ready to book, with all their information already captured.",
                    icon: <CheckCircle className="h-6 w-6 text-white" />,
                  },
                  {
                    step: "5",
                    title: "Optimize",
                    description:
                      "We continuously analyze results and optimize campaigns to improve performance and ROI month over month.",
                    icon: <BarChart className="h-6 w-6 text-white" />,
                  },
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div
                      className={`flex flex-col ${
                        i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      } items-center gap-8`}
                    >
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#1D3557] text-xl font-bold text-white shadow-lg md:mx-8">
                        {step.icon}
                      </div>
                      <div
                        className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:w-[calc(50%-4rem)] ${
                          i % 2 === 0 ? "md:text-left" : "md:text-right"
                        }`}
                      >
                        <h3 className="mb-2 text-xl font-bold text-[#1D3557]">
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

        {/* 5️⃣ Why Choose Us Section */}
        <section className="bg-[#1D3557] py-16 text-white">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase md:text-4xl">
                We Built This For Dentists Who Want Predictable Growth
              </h2>
              <p className="text-lg">See why our marketing system delivers better results at a fraction of the cost</p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  {
                    icon: <Award className="h-10 w-10 text-[#F4A261]" />,
                    title: "Best Value for Money",
                    description:
                      "Others charge $5,000-$10,000/month for similar services. We deliver better results for $1,497/month.",
                  },
                  {
                    icon: <Search className="h-10 w-10 text-[#F4A261]" />,
                    title: "Complete Transparency",
                    description:
                      "No hidden fees, clear pricing. You'll always know exactly what you're paying for and the results you're getting.",
                  },
                  {
                    icon: <Shield className="h-10 w-10 text-[#F4A261]" />,
                    title: "No Contracts, No Risk",
                    description:
                      "Stay because you love it, not because you have to. Cancel anytime with no penalties or hidden fees.",
                  },
                  {
                    icon: <CheckCircle className="h-10 w-10 text-[#F4A261]" />,
                    title: "60-Day Money-Back Guarantee",
                    description:
                      "If you're not happy with our service within the first 60 days, we'll refund every penny. No questions asked.",
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
              <Button className="bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                Let's Start Growing
              </Button>
            </div>
          </div>
        </section>

        {/* 6️⃣ Comparison Section */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">
                How We Compare to Other Agencies
              </h2>
              <p className="text-lg text-[#1D3557]">
                Get more value and better results than agencies charging twice as much
              </p>
            </div>

            <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border shadow-md">
              <div className="grid grid-cols-4 border-b bg-[#1D3557] p-4 text-white">
                <div className="col-span-1 font-bold">Feature</div>
                <div className="col-span-1 font-bold">Our System ($1,497)</div>
                <div className="col-span-2 font-bold">Typical Agency ($5,000-$10,000)</div>
              </div>

              {[
                {
                  feature: "Complete SEO Package",
                  ours: true,
                  theirs: true,
                },
                {
                  feature: "Google & Meta Ads",
                  ours: true,
                  theirs: true,
                },
                {
                  feature: "Automated Lead Follow-Up",
                  ours: true,
                  theirs: false,
                },
                {
                  feature: "AI-Powered Nurturing",
                  ours: true,
                  theirs: false,
                },
                {
                  feature: "Dedicated Account Manager",
                  ours: true,
                  theirs: true,
                },
                {
                  feature: "No Long-Term Contracts",
                  ours: true,
                  theirs: false,
                },
                {
                  feature: "Money-Back Guarantee",
                  ours: true,
                  theirs: false,
                },
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-4 border-b p-4">
                  <div className="col-span-1 text-[#1D3557]">{item.feature}</div>
                  <div className="col-span-1 text-center">
                    {item.ours ? (
                      <Check className="mx-auto h-6 w-6 text-[#4CAF50]" />
                    ) : (
                      <X className="mx-auto h-6 w-6 text-red-500" />
                    )}
                  </div>
                  <div className="col-span-2 text-center">
                    {item.theirs ? (
                      <Check className="mx-auto h-6 w-6 text-[#4CAF50]" />
                    ) : (
                      <X className="mx-auto h-6 w-6 text-red-500" />
                    )}
                  </div>
                </div>
              ))}

              {/* Bottom Row - Price */}
              <div className="grid grid-cols-4 bg-[#F5F5F5] p-4">
                <div className="col-span-1 font-bold text-[#1D3557]">Monthly Investment</div>
                <div className="col-span-1 text-center font-bold text-[#4CAF50]">$1,497/month</div>
                <div className="col-span-2 text-center font-bold text-red-500">$5,000-$10,000/month</div>
              </div>
            </div>
          </div>
        </section>

        {/* 7️⃣ Results & Testimonials Section */}
        <section className="bg-[#F5F5F5] py-16">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">
                More Patients, Less Stress
              </h2>
              <p className="text-lg text-[#1D3557]">Real results from real dental practices</p>
            </div>

            {/* Case Study */}
            <div className="mx-auto mb-16 max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-bold text-[#1D3557]">Case Study: Smile Bright Dental</h3>
                  <div className="mb-6 flex">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#F4A261] text-[#F4A261]" />
                    ))}
                  </div>

                  <div className="mb-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-[#F5F5F5] p-4 text-center">
                        <div className="text-sm text-gray-500">Before</div>
                        <div className="text-2xl font-bold text-[#1D3557]">12</div>
                        <div className="text-sm text-[#1D3557]">New Patients/Mo</div>
                      </div>
                      <div className="rounded-lg bg-[#4CAF50]/10 p-4 text-center">
                        <div className="text-sm text-gray-500">After</div>
                        <div className="text-2xl font-bold text-[#4CAF50]">47</div>
                        <div className="text-sm text-[#1D3557]">New Patients/Mo</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-[#F5F5F5] p-4 text-center">
                        <div className="text-sm text-gray-500">Before</div>
                        <div className="text-2xl font-bold text-[#1D3557]">$18k</div>
                        <div className="text-sm text-[#1D3557]">Monthly Revenue</div>
                      </div>
                      <div className="rounded-lg bg-[#4CAF50]/10 p-4 text-center">
                        <div className="text-sm text-gray-500">After</div>
                        <div className="text-2xl font-bold text-[#4CAF50]">$67k</div>
                        <div className="text-sm text-[#1D3557]">Monthly Revenue</div>
                      </div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-[#F4A261] pl-4 italic text-[#1D3557]">
                    "The marketing system has transformed our practice. We're seeing more high-value patients than ever
                    before, and the automated follow-up system ensures we never miss an opportunity."
                  </blockquote>

                  <div className="mt-4 flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-[#1D3557]">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Dr. Jennifer Smith"
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-[#1D3557]">Dr. Jennifer Smith</div>
                      <div className="text-[#A8A8A8]">Smile Bright Dental, Chicago</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=600&width=500"
                    alt="Dental practice success story"
                    width={500}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D3557]/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="mb-2 text-lg font-bold">Results After 90 Days:</div>
                    <div className="flex justify-between">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#F4A261]">291%</div>
                        <div className="text-sm">ROI Increase</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#F4A261]">35+</div>
                        <div className="text-sm">New Patients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#F4A261]">$49k</div>
                        <div className="text-sm">Revenue Growth</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    quote:
                      "The automated follow-up system is a game-changer. We're converting leads we would have lost before.",
                    name: "Dr. Michael Chen",
                    location: "Premier Dental, Boston",
                    rating: 5,
                  },
                  {
                    quote:
                      "Worth every penny. We've tried other agencies charging twice as much with half the results.",
                    name: "Dr. Sarah Johnson",
                    location: "Bright Smile Dental, Dallas",
                    rating: 5,
                  },
                  {
                    quote:
                      "Our implant cases have doubled since implementing the marketing system. The ROI is incredible.",
                    name: "Dr. Robert Williams",
                    location: "Advanced Dental Care, Miami",
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
                Join Successful Practices Today
              </Button>
            </div>
          </div>
        </section>

        {/* 8️⃣ How It Works Section */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1D3557] md:text-4xl">
                How Our Marketing System Drives Growth
              </h2>
              <p className="text-lg text-[#1D3557]">A complete end-to-end solution for dental practices</p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="relative rounded-xl bg-[#F5F5F5] p-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-[#1D3557]">The Patient Acquisition Funnel</h3>
                    <p className="mb-6 text-[#1D3557]">
                      Our system handles every step of the patient journey, from first click to scheduled appointment.
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          icon: <Search className="h-5 w-5 text-[#1D3557]" />,
                          title: "Attract",
                          description: "SEO & targeted ads bring potential patients to your practice.",
                        },
                        {
                          icon: <Globe className="h-5 w-5 text-[#1D3557]" />,
                          title: "Convert",
                          description: "High-converting landing pages turn visitors into leads.",
                        },
                        {
                          icon: <Mail className="h-5 w-5 text-[#1D3557]" />,
                          title: "Nurture",
                          description: "Automated follow-up via SMS, email, and voicemail.",
                        },
                        {
                          icon: <BellRing className="h-5 w-5 text-[#1D3557]" />,
                          title: "Schedule",
                          description: "Pre-qualified leads ready to book appointments.",
                        },
                        {
                          icon: <Users className="h-5 w-5 text-[#1D3557]" />,
                          title: "Retain",
                          description: "Patient retention strategies to maximize lifetime value.",
                        },
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="rounded-full bg-[#F4A261]/20 p-2">{step.icon}</div>
                          <div>
                            <div className="font-bold text-[#1D3557]">{step.title}</div>
                            <div className="text-sm text-[#1D3557]/80">{step.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=500&width=400"
                        alt="Marketing funnel visualization"
                        width={400}
                        height={500}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Overlay Stats */}
                    <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-4 shadow-lg">
                      <div className="mb-2 text-center text-sm font-bold text-[#1D3557]">Average Results</div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-lg font-bold text-[#4CAF50]">3.2x</div>
                          <div className="text-xs text-[#1D3557]">Lead Increase</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-[#4CAF50]">42%</div>
                          <div className="text-xs text-[#1D3557]">Conversion Rate</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-[#4CAF50]">5.7x</div>
                          <div className="text-xs text-[#1D3557]">ROI</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9️⃣ FAQ Section */}
        
        <FaqSection faqs={marketingSystemFaqs}/>

        {/* 🔟 Final CTA Section */}
        <section className="bg-[#1D3557] py-16 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-xl bg-[#F4A261]/10 p-8 backdrop-blur-sm">
              <div className="text-center">
                <h2 className="mb-6 text-3xl font-bold uppercase md:text-4xl">
                  Ready to Fill Your Schedule with High-Value Patients?
                </h2>

                <div className="mb-8 inline-block rounded-full bg-white/10 px-6 py-3">
                  <div className="flex items-center">
                    <Shield className="mr-3 h-6 w-6 text-[#F4A261]" />
                    <span className="text-lg font-bold text-[#F4A261]">60-Day Money-Back Guarantee</span>
                  </div>
                </div>

                <p className="mb-8 text-lg">
                  Join hundreds of successful dental practices using our Marketing System to grow predictably and
                  profitably.
                </p>

                <Button className="group bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                  <span>Get More Patients Now</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="mt-4 text-sm text-white/70">
                  No contracts. Cancel anytime. Start seeing results in as little as 30 days.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky CTA Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white py-4 shadow-lg md:hidden">
        <div className="container">
          <Button className="w-full bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90">
            <Zap className="mr-2 h-5 w-5" />
            <span>Grow My Practice</span>
          </Button>
        </div>
      </div>

     
    </div>
  )
}
