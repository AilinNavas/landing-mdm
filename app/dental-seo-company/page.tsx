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
  FileText,
  MessageCircle,
  MapPin,
  Zap,
  CheckCircle,
  Link2,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export default function DentalSEOCompanyPage() {
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
                The Dental SEO Company That <span className="text-[#F4A261]">Gets You More Patients</span>
              </h1>
              <p className="text-xl">
                Affordable, high-impact SEO designed exclusively for dentists. Get more visibility, more traffic, and
                more booked appointments.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">No Contracts</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">90-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">Dental SEO Specialists</span>
                </div>
              </div>

              <div className="pt-4">
                <Button className="group bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                  <span>See Our SEO Packages</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mx-auto max-w-md rounded-lg bg-white p-6 shadow-xl">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="Dentist looking at website analytics on laptop"
                  width={700}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Google Ranking Overlay */}
              <div className="absolute -bottom-6 -right-6 w-[70%] rounded-lg bg-white p-4 shadow-xl">
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-sm font-bold text-[#1D3557]">Google Rankings</div>
                  <div className="rounded-full bg-[#4CAF50]/20 px-2 py-1 text-xs font-medium text-[#4CAF50]">
                    +156% ↑
                  </div>
                </div>
                <div className="mb-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-[75%] rounded-full bg-[#4CAF50]"></div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <div className="font-bold text-[#1D3557]">#1-3</div>
                    <div className="text-gray-500">Rankings</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#1D3557]">850+</div>
                    <div className="text-gray-500">Monthly Visitors</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#1D3557]">32</div>
                    <div className="text-gray-500">New Patients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2️⃣ What Is Dental SEO Section */}
        <section className="bg-[#F5F5F5] py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">
                What Is Dental SEO & Why Does It Matter?
              </h2>

              <p className="mb-8 text-lg text-[#1D3557]">
                SEO (Search Engine Optimization) helps your practice appear at the top of Google when patients search
                for a dentist.
              </p>

              <div className="mb-10 rounded-lg bg-white p-8 shadow-md">
                <h3 className="mb-6 text-xl font-bold text-[#F4A261]">🚀 Did You Know?</h3>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-lg bg-[#1D3557]/5 p-6">
                    <div className="mb-2 text-3xl font-bold text-[#1D3557]">77%</div>
                    <p className="text-[#1D3557]">of patients search online before choosing a dentist</p>
                  </div>

                  <div className="rounded-lg bg-[#1D3557]/5 p-6">
                    <div className="mb-2 text-3xl font-bold text-[#1D3557]">75%</div>
                    <p className="text-[#1D3557]">of all clicks go to Google's top 3 results</p>
                  </div>

                  <div className="rounded-lg bg-[#1D3557]/5 p-6">
                    <div className="mb-2 text-3xl font-bold text-[#F4A261]">$0</div>
                    <p className="text-[#1D3557]">cost per click for organic search traffic</p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="font-bold text-[#1D3557]">
                    If you're not ranking high, you're losing new patients to competitors.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-[#1D3557] hover:bg-[#1D3557]/90" size="lg">
                  Get a Free SEO Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 3️⃣ Why Choose Us Section */}
        <section className="relative bg-white py-16">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">
                Why Choose MUCHODENTALMARKETING as Your Dental SEO Company?
              </h2>
              <p className="text-lg text-[#1D3557]">
                We specialize in helping dental practices dominate local search results
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <DollarSign className="h-10 w-10 text-[#F4A261]" />,
                  title: "The Best Value in the Industry",
                  description: [
                    "SEO for just $697/month—others charge $3,000+ for the same results.",
                    "Transparent pricing, no hidden fees.",
                  ],
                },
                {
                  icon: <Clock className="h-10 w-10 text-[#F4A261]" />,
                  title: "No Long-Term Contracts",
                  description: [
                    "Stay with us because we get results, not because you're locked in.",
                    "Cancel anytime with 30 days' notice.",
                  ],
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-[#F4A261]" />,
                  title: "Exclusive Focus on Dentists",
                  description: [
                    "We specialize in dental SEO—not generic marketing.",
                    "We know exactly how to get dentists to the top of Google.",
                  ],
                },
                {
                  icon: <Shield className="h-10 w-10 text-[#F4A261]" />,
                  title: "Guaranteed Results",
                  description: [
                    "90-day money-back guarantee. If we don't perform, you don't pay.",
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
                Start Growing Your Practice Today
              </Button>
            </div>
          </div>
        </section>

        {/* 4️⃣ Our Process Section */}
        <section className="bg-[#F5F5F5] py-16">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">
                Our Proven Dental SEO Process
              </h2>
              <p className="text-lg text-[#1D3557]">
                A systematic approach to getting your practice to the top of Google
              </p>
            </div>

            <div className="relative mx-auto max-w-4xl">
              <div className="absolute left-[50%] top-0 bottom-0 hidden w-0.5 -translate-x-1/2 bg-[#1D3557]/20 md:block"></div>

              <div className="space-y-12">
                {[
                  {
                    step: "1",
                    title: "SEO Audit & Strategy",
                    description:
                      "We analyze your website, competitors & keywords to create a custom SEO strategy for your dental practice.",
                    icon: <Search className="h-6 w-6 text-white" />,
                  },
                  {
                    step: "2",
                    title: "On-Page Optimization",
                    description:
                      "We optimize your website content, meta titles, images & site speed to improve your search engine rankings.",
                    icon: <FileText className="h-6 w-6 text-white" />,
                  },
                  {
                    step: "3",
                    title: "Local SEO & Google My Business",
                    description:
                      "We optimize your Google Business Profile to help you appear in Google Maps and local search results.",
                    icon: <MapPin className="h-6 w-6 text-white" />,
                  },
                  {
                    step: "4",
                    title: "Link Building & Authority Growth",
                    description:
                      "We build high-quality backlinks to boost your website's authority and improve your rankings.",
                    icon: <Link2 className="h-6 w-6 text-white" />,
                  },
                  {
                    step: "5",
                    title: "Monthly Reporting & Adjustments",
                    description:
                      "We provide transparent monthly reports and continuously optimize your SEO strategy for better results.",
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

            <div className="mt-12 text-center">
              <Button className="bg-[#1D3557] hover:bg-[#1D3557]/90" size="lg">
                See Our SEO Process in Action
              </Button>
            </div>
          </div>
        </section>

        {/* 5️⃣ Real Results Section */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">
                Real Results – See How We've Helped Dentists Like You
              </h2>
              <p className="text-lg text-[#1D3557]">
                Our dental SEO services deliver measurable improvements in rankings, traffic, and new patients
              </p>
            </div>

            {/* Case Study */}
            <div className="mx-auto mb-16 max-w-4xl overflow-hidden rounded-xl bg-[#F5F5F5] shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-bold text-[#1D3557]">Case Study: Premier Dental Care</h3>
                  <div className="mb-6 flex">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#F4A261] text-[#F4A261]" />
                    ))}
                  </div>

                  <div className="mb-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-white p-4 text-center">
                        <div className="text-sm text-gray-500">Before</div>
                        <div className="text-2xl font-bold text-[#1D3557]">Page 4</div>
                        <div className="text-sm text-[#1D3557]">Google Ranking</div>
                      </div>
                      <div className="rounded-lg bg-[#4CAF50]/10 p-4 text-center">
                        <div className="text-sm text-gray-500">After</div>
                        <div className="text-2xl font-bold text-[#4CAF50]">Top 3</div>
                        <div className="text-sm text-[#1D3557]">Google Ranking</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-white p-4 text-center">
                        <div className="text-sm text-gray-500">Before</div>
                        <div className="text-2xl font-bold text-[#1D3557]">120</div>
                        <div className="text-sm text-[#1D3557]">Monthly Visitors</div>
                      </div>
                      <div className="rounded-lg bg-[#4CAF50]/10 p-4 text-center">
                        <div className="text-sm text-gray-500">After</div>
                        <div className="text-2xl font-bold text-[#4CAF50]">850+</div>
                        <div className="text-sm text-[#1D3557]">Monthly Visitors</div>
                      </div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-[#F4A261] pl-4 italic text-[#1D3557]">
                    "We went from page 3 to the top 3 results in just 6 months! MUCHODENTALMARKETING doubled our website
                    traffic and new patient bookings."
                  </blockquote>

                  <div className="mt-4 flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-[#1D3557]">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Dr. Michael Chen"
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-[#1D3557]">Dr. Michael Chen</div>
                      <div className="text-[#A8A8A8]">Premier Dental Care, Boston</div>
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
                    <div className="mb-2 text-lg font-bold">Results After 6 Months:</div>
                    <div className="flex justify-between">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#F4A261]">608%</div>
                        <div className="text-sm">Traffic Increase</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#F4A261]">32</div>
                        <div className="text-sm">New Patients/Mo</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#F4A261]">$42k</div>
                        <div className="text-sm">Revenue Growth</div>
                      </div>
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
                      "After trying 3 other SEO companies, MUCHODENTALMARKETING finally got us to the first page of Google. Best marketing investment we've ever made.",
                    name: "Dr. Sarah Johnson",
                    location: "Bright Smile Dental, Dallas",
                    rating: 5,
                  },
                  {
                    quote:
                      "Our new patient calls increased by 40% within 4 months of starting their SEO service. Their dental focus makes all the difference.",
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
              <Button className="bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                Get the Same Results for Your Practice
              </Button>
            </div>
          </div>
        </section>

        {/* 6️⃣ Services Section */}
        <section className="bg-[#1D3557] py-16 text-white">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase md:text-4xl">Dental SEO Services We Offer</h2>
              <p className="text-lg">We provide everything needed for real SEO success</p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <MapPin className="h-10 w-10 text-[#F4A261]" />,
                    title: "Local SEO",
                    description:
                      "Rank higher in Google Maps & get more local patients searching for dental services in your area.",
                  },
                  {
                    icon: <FileText className="h-10 w-10 text-[#F4A261]" />,
                    title: "On-Page SEO",
                    description:
                      "Optimize website structure, content, and keywords to improve your search engine rankings.",
                  },
                  {
                    icon: <Zap className="h-10 w-10 text-[#F4A261]" />,
                    title: "Technical SEO",
                    description:
                      "Fix slow loading times, mobile responsiveness issues, and other technical factors affecting rankings.",
                  },
                  {
                    icon: <MessageCircle className="h-10 w-10 text-[#F4A261]" />,
                    title: "Content Marketing",
                    description:
                      "Create valuable, SEO-optimized content that attracts more visitors and establishes your authority.",
                  },
                  {
                    icon: <Link2 className="h-10 w-10 text-[#F4A261]" />,
                    title: "Link Building",
                    description:
                      "Get high-quality backlinks to boost domain authority and improve your Google rankings.",
                  },
                  {
                    icon: <BarChart className="h-10 w-10 text-[#F4A261]" />,
                    title: "Performance Tracking",
                    description: "Monitor your rankings, traffic, and conversions with detailed monthly reporting.",
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
                Explore Our SEO Packages
              </Button>
            </div>
          </div>
        </section>

        {/* 7️⃣ Pricing Section */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">
                How Much Does Dental SEO Cost?
              </h2>
              <p className="text-lg text-[#1D3557]">Affordable, transparent pricing with no hidden fees</p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="rounded-xl border-2 border-[#F4A261] bg-white overflow-hidden shadow-xl">
                <div className="bg-[#1D3557] p-6 text-center text-white">
                  <h3 className="text-2xl font-bold">Our Dental SEO Package</h3>
                  <div className="mt-2 text-4xl font-bold text-[#F4A261]">
                    $697<span className="text-xl font-normal">/month</span>
                  </div>
                  <p className="mt-2 text-white/80">Other agencies charge $3,000+ for the same service</p>
                </div>

                <div className="p-8">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="rounded-full bg-[#4CAF50]/10 px-6 py-3">
                      <div className="flex items-center">
                        <Shield className="mr-3 h-6 w-6 text-[#4CAF50]" />
                        <span className="text-lg font-bold text-[#4CAF50]">90-Day Money-Back Guarantee</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 grid gap-4 md:grid-cols-2">
                    {[
                      "Comprehensive SEO Audit & Strategy",
                      "Google Business Profile Optimization",
                      "On-Page SEO Optimization",
                      "Local SEO & Citation Building",
                      "Monthly Backlink Building",
                      "Content Optimization",
                      "Technical SEO Improvements",
                      "Monthly Performance Reporting",
                      "Dedicated SEO Specialist",
                      "No Long-Term Contracts",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4CAF50]" />
                        <span className="text-[#1D3557]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <Button className="group bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                      <span>Start Ranking Higher Today</span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <p className="mt-4 text-sm text-gray-500">
                      No contracts. Cancel anytime. 90-day money-back guarantee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8️⃣ FAQ Section */}
        <section className="bg-[#F5F5F5] py-16">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1D3557] md:text-4xl">Frequently Asked Questions</h2>
              <p className="text-lg text-[#1D3557]">Everything you need to know about our dental SEO services</p>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              {[
                {
                  question: "How long does it take to see SEO results?",
                  answer:
                    "Most dentists see rankings improve in 3-6 months, with full impact in 6-12 months. SEO is a long-term strategy, but we often see initial improvements within the first 60 days. The timeline depends on your current website, competition in your area, and other factors.",
                },
                {
                  question: "Do I need to sign a long-term contract?",
                  answer:
                    "No! We believe in earning your business, not locking you in. Our SEO services are month-to-month with no long-term commitments required. You can cancel anytime with 30 days' notice.",
                },
                {
                  question: "Will SEO help me get more patients?",
                  answer:
                    "Yes! Higher rankings mean more website visits, more calls, and more new patients. When your practice appears at the top of Google for searches like 'dentist near me' or 'best dentist in [your city],' you'll attract more potential patients who are actively looking for dental services.",
                },
                {
                  question: "What makes your dental SEO services different?",
                  answer:
                    "We ONLY work with dentists and offer the best value in the industry. Our team specializes exclusively in dental SEO, so we understand the unique challenges and opportunities in your industry. Plus, at $697/month with no contracts and a 90-day money-back guarantee, we offer unbeatable value.",
                },
                {
                  question: "Do you guarantee first-page rankings?",
                  answer:
                    "While no ethical SEO company can guarantee specific rankings (Google explicitly warns against this), we do guarantee measurable improvements in your search visibility and traffic. If you don't see progress within 60 days, we'll refund your investment in full.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="group cursor-pointer rounded-lg border p-6 transition-all hover:border-[#F4A261] hover:shadow-md"
                >
                  <h3 className="mb-2 flex items-center justify-between text-xl font-bold text-[#1D3557]">
                    {faq.question}
                    <ChevronRight className="h-5 w-5 transition-transform group-hover:rotate-90" />
                  </h3>
                  <p className="text-[#1D3557]">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button className="bg-[#1D3557] hover:bg-[#1D3557]/90" size="lg">
                Get a Free SEO Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* 9️⃣ Final CTA Section */}
        <section className="bg-[#1D3557] py-16 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-xl bg-[#F4A261]/10 p-8 backdrop-blur-sm">
              <div className="text-center">
                <h2 className="mb-6 text-3xl font-bold uppercase md:text-4xl">
                  Ready to Rank Higher, Attract More Patients, and Grow Your Practice?
                </h2>

                <p className="mb-8 text-lg">Get started today with a risk-free 90-day money-back guarantee!</p>

                <Button className="group bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                  <span>Claim Your Free SEO Strategy</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="mt-4 text-sm text-white/70">
                  No contracts. Cancel anytime. Start seeing results in as little as 60 days.
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
            <Search className="mr-2 h-5 w-5" />
            <span>Get a Free SEO Strategy</span>
          </Button>
        </div>
      </div>

    </div>
  )
}
