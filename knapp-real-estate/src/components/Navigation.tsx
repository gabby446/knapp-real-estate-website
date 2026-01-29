"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <span className={`text-2xl md:text-3xl font-heading font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Knapp Real Estate Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={`group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-royal-blue hover:bg-royal-blue/5'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={`group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-royal-blue hover:bg-royal-blue/5'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/current-listings" legacyBehavior passHref>
                    <NavigationMenuLink className={`group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-royal-blue hover:bg-royal-blue/5'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}>
                      Current Listings
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/previous-listings" legacyBehavior passHref>
                    <NavigationMenuLink className={`group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-royal-blue hover:bg-royal-blue/5'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}>
                      Previous Listings
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/faq" legacyBehavior passHref>
                    <NavigationMenuLink className={`group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-royal-blue hover:bg-royal-blue/5'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}>
                      FAQ
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className={`btn-premium rounded-xl px-6 py-2 font-medium transition-all duration-300 ${
                isScrolled
                  ? 'btn-gold shadow-lg hover:shadow-xl'
                  : 'bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-gray-900'
              }`}>
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? 'text-gray-700' : 'text-white'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-2xl shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link
                href="/"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-royal-blue hover:bg-royal-blue/5 rounded-xl transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-royal-blue hover:bg-royal-blue/5 rounded-xl transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/current-listings"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-royal-blue hover:bg-royal-blue/5 rounded-xl transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Current Listings
              </Link>
              <Link
                href="/previous-listings"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-royal-blue hover:bg-royal-blue/5 rounded-xl transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Previous Listings
              </Link>

              <Link
                href="/faq"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-royal-blue hover:bg-royal-blue/5 rounded-xl transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full btn-gold rounded-xl py-3">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
