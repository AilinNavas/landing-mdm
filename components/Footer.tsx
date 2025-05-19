

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t bg-[#F5F5F5] py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 text-xl font-normal text-[#1D3557]">
              MUCHO<strong>DENTAL</strong>MARKETING
            </div>
            <p className="text-[#1D3557]">
              Let's Build Your Practice's Future –{' '}
              <span className="text-[#F4A261]">Get Started Today.</span>
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-[#1D3557]">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/seo-package" className="group flex items-center text-[#1D3557] hover:text-[#1D3557]">
                  <ChevronRight className="mr-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span>SEO</span>
                </Link>
              </li>
              <li>
                <Link href="/services/marketing-system" className="group flex items-center text-[#1D3557] hover:text-[#1D3557]">
                  <ChevronRight className="mr-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span>Marketing System</span>
                </Link>
              </li>
              <li>
                <Link href="/services/web-design" className="group flex items-center text-[#1D3557] hover:text-[#1D3557]">
                  <ChevronRight className="mr-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span>Web Design</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-[#1D3557]">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="group flex items-center text-[#1D3557] hover:text-[#1D3557]">
                  <ChevronRight className="mr-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="group flex items-center text-[#1D3557] hover:text-[#1D3557]">
                  <ChevronRight className="mr-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span>Case Studies</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="group flex items-center text-[#1D3557] hover:text-[#1D3557]">
                  <ChevronRight className="mr-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-[#1D3557]">Contact</h3>
            <ul className="space-y-2">
              <li className="text-[#1D3557]">hello@muchodentalmarketing.com</li>
              <li className="text-[#1D3557]">(555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-[#A8A8A8]">
          <p>© {new Date().getFullYear()} MUCHODENTALMARKETING. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="#" className="hover:text-[#1D3557]">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#1D3557]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
