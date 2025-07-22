
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
    { href: '/#process', label: 'Our Process' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/#testimonials', label: 'Success Stories' },
    { href: '/#faqs', label: 'FAQ' },
    { href: '/about-us', label: 'About Us' },
]

const services = [
    { href: '/services/marketing-system', label: 'Marketing System' },
    { href: '/services/seo-package', label: 'SEO Package' },
    { href: '/services/web-design', label: 'Web Design' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [showServices, setShowServices] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
        setShowServices(false)
    }, [pathname])

    const isActive = (href: string) => {
        if (href.startsWith('/#')) return pathname === '/'
        return pathname === href || pathname.startsWith(href + '/')
    }

    const handleNavClick = (href: string) => {
        if (href.startsWith('/#') && pathname !== '/') {
            router.push(href)
        }
    }

    return (
        <header
            className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
                }`}
        >
            <div className="container flex h-16 items-center justify-between">
                <Link
                    href="/"
                    className="text-lg md:text-2xl font-normal text-[#1D3557]"
                >
                    MUCHO<strong>DENTAL</strong>MARKETING
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex md:gap-6 relative items-center">
                    <div
                        className="relative group"
                        onMouseEnter={() => setShowServices(true)}
                        onMouseLeave={() => setShowServices(false)}
                    >
                        <button className="flex items-center gap-1 text-[#1D3557] hover:text-[#1D3557]/80 transition-colors">
                            Services <ChevronDown size={16} />
                        </button>
                        <AnimatePresence>
                            {showServices && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 border z-50"
                                >
                                    {services.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-[#1D3557] hover:bg-[#F4A261]/20 transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className={`relative uppercase font-medium text-[#1D3557] hover:text-[#1D3557]/80 transition-colors ${isActive(link.href) ? 'font-medium' : ''
                                }`}
                        >
                            {link.label}
                            {isActive(link.href) && (
                                <motion.div
                                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                                    layoutId="navbar-indicator"
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Button className="hidden md:block bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90">
                        Contact Us
                    </Button>
                    <button
                        className="flex md:hidden items-center justify-center"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    >
                        <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                            {isOpen ? (
                                <X className="h-6 w-6 text-[#1D3557]" />
                            ) : (
                                <Menu className="h-6 w-6 text-[#1D3557]" />
                            )}
                        </motion.div>
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: '100vh', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="container py-4 flex flex-col space-y-2 border-t">
                            {/* Services Toggle */}
                            <button
                                onClick={() => setShowServices((prev) => !prev)}
                                className="flex items-center justify-between text-[#1D3557] px-3 py-2 font-medium hover:bg-[#F4A261]/10 rounded-md transition-colors"
                            >
                                Services <ChevronDown size={18} className={`${showServices ? 'rotate-180' : ''} transition-transform`} />
                            </button>

                            {/* Services List */}
                            <AnimatePresence>
                                {showServices && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex flex-col pl-6 space-y-1"
                                    >
                                        {services.map((s) => (
                                            <Link
                                                key={s.href}
                                                href={s.href}
                                                onClick={() => setIsOpen(false)}
                                                className="text-sm text-[#1D3557] uppercase py-1 hover:text-[#1D3557]/80 transition-colors"
                                            >
                                                {s.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Other Nav Links */}
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => {
                                        handleNavClick(link.href)
                                        setIsOpen(false)
                                    }}
                                    className={`text-[#1D3557] px-3 py-2 rounded-md transition-colors hover:bg-[#F4A261]/10 `}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <Button
                                className="w-full bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide mt-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    )
}
