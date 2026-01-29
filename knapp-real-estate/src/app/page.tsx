"use client"

import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, Users, TrendingUp, Award, ChevronRight, ChevronLeft, Star } from "lucide-react"
import { useState, useEffect, useRef } from "react"

// Scroll Animation Hook
function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible')
          // Optional: unobserve after animation to improve performance
          // observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.animate-fade-up, .animate-fade-left, .animate-fade-right, .animate-scale-in, .animate-on-scroll'
    )

    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

// Hero Background Carousel Component
function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    "/images/hero-aerial-1.jpg",
    "/images/hero-aerial-2.jpg",
    "/images/hero-aerial-3.jpg",
    "/images/county-road-160-aerial-1.jpg",
    "/images/county-road-160-aerial-2.jpg"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Land development ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {/* Premium overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/40 via-transparent to-transparent" />

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gold scale-125 shadow-lg shadow-gold/50'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Animated Counter Component
function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-5xl md:text-7xl font-heading font-bold bg-clip-text bg-gradient-to-r from-royal-blue to-blue-400 text-[#1e3a5f]">
      {count}{suffix}
    </div>
  )
}

// Image Carousel Component for sections
function ImageCarousel({ images, projectName }: { images: string[], projectName: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative aspect-video bg-gradient-to-br from-baby-blue to-royal-blue rounded-xl overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${projectName} - Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-all z-10 shadow-lg hover:scale-110"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-all z-10 shadow-lg hover:scale-110"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-gold scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-3 right-3 glass-dark text-white px-4 py-1.5 rounded-full text-sm z-10 font-medium">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Project Label */}
      <div className="absolute bottom-4 left-4 glass rounded-xl px-5 py-3 z-10">
        <p className="text-lg font-heading font-semibold text-gray-900">{projectName}</p>
        <p className="text-gray-600 text-sm">Midland, Texas</p>
      </div>
    </div>
  )
}

export default function HomePage() {
  // Initialize scroll animations
  useScrollAnimation()

  const projectImages = [
    "/images/county-road-160-aerial-1.jpg",
    "/images/county-road-160-aerial-2.jpg",
    "/images/county-road-160-construction.jpg",
    "/images/county-road-160-5.jpg"
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Background Carousel */}
      <section className="relative pt-16 min-h-[650px] md:min-h-[750px] flex items-center">
        <HeroCarousel />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Gold accent line */}
            <div className="gold-accent-line mx-auto mb-8 animate-scale-in" />

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 tracking-tight animate-fade-up"
              style={{ textShadow: '3px 3px 12px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.4)' }}
            >
              BECOME A<br />
              <span className="text-baby-blue" style={{ textShadow: '3px 3px 12px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.4)' }}>
                LAND OWNER
              </span>{" "}
              TODAY!
            </h1>
            <p
              className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto font-body animate-fade-up delay-100"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}
            >
              Seller-financing <span className="text-baby-blue">•</span> Low Down Payments <span className="text-baby-blue">•</span> Low Monthly Payments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-200">
              <Link href="/current-listings">
                <Button size="lg" className="btn-gold text-lg px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl">
                  View Current Listings
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900 text-lg px-10 py-4 rounded-xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-royal-blue rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center animate-fade-up">
              <AnimatedCounter end={1700} suffix="+" />
              <div className="text-lg text-gray-600 mt-2 font-body">Acres Developed</div>
              <div className="gold-accent-line mx-auto mt-4" />
            </div>
            <div className="text-center animate-fade-up delay-100">
              <AnimatedCounter end={5} suffix="+" />
              <div className="text-lg text-gray-600 mt-2 font-body">Projects Completed</div>
              <div className="gold-accent-line mx-auto mt-4" />
            </div>
            <div className="text-center animate-fade-up delay-200">
              <AnimatedCounter end={930} suffix="+" />
              <div className="text-lg text-gray-600 mt-2 font-body">Lots Developed</div>
              <div className="gold-accent-line mx-auto mt-4" />
            </div>
            <div className="text-center animate-fade-up delay-300">
              <AnimatedCounter end={400} suffix="+" />
              <div className="text-lg text-gray-600 mt-2 font-body">Lots Sold</div>
              <div className="gold-accent-line mx-auto mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction with Image Carousel */}
      <section className="py-24 section-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-left">
              <div className="gold-accent-line mb-6" />
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-gradient-blue">Knapp Real Estate Group</span> is a privately held real estate development company.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-body">
                We specialize in acquiring raw land, subdividing it into profitable lots, and selling to investors and developers.
                Our experienced team has been transforming land investments and creating opportunities for both lot buyers and investors
                to participate in profitable real estate development.
              </p>
              <Link href="/contact">
                <Button className="btn-premium bg-royal-blue hover:bg-royal-blue/90 text-white text-lg px-8 py-4 rounded-xl shadow-lg">
                  Partner With Us
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="animate-fade-right delay-200">
              <div className="premium-card p-2 rounded-2xl">
                <ImageCarousel images={projectImages} projectName="County Road 160 Development" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-royal-blue/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 animate-fade-up">
            <div className="gold-accent-line mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Why Choose <span className="text-gradient-blue">Knapp Real Estate Group</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              We bring expertise, transparency, and proven results to every subdivision development project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-up delay-100">
              <Card className="glass-card text-center p-8 rounded-2xl border-0 hover:border-gold/20 transition-all duration-500">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-gold/20 to-gold-light/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="h-10 w-10 text-gold-dark" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Expert Team</h3>
                  <p className="text-gray-600 font-body leading-relaxed">
                    Our experienced team handles every aspect of subdivision development, from land acquisition to final lot sales.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-up delay-200">
              <Card className="glass-card text-center p-8 rounded-2xl border-0 hover:border-royal-blue/20 transition-all duration-500">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-royal-blue/20 to-blue-200/50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <TrendingUp className="h-10 w-10 text-royal-blue" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Proven Returns</h3>
                  <p className="text-gray-600 font-body leading-relaxed">
                    Track record of successful projects with consistent returns for our investors and satisfied lot buyers.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-up delay-300">
              <Card className="glass-card text-center p-8 rounded-2xl border-0 hover:border-gold/20 transition-all duration-500">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-gold/20 to-gold-light/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Award className="h-10 w-10 text-gold-dark" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Full Transparency</h3>
                  <p className="text-gray-600 font-body leading-relaxed">
                    Complete visibility into project progress, financials, and timelines. No hidden fees or surprises.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 premium-gradient relative overflow-hidden">
        {/* Decorative gold accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <div className="animate-fade-up">
            <Star className="h-12 w-12 text-baby-blue mx-auto mb-6 animate-scale-in" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Ready to Own Your Piece of Land?
            </h2>
            <p className="text-xl text-white/90 mb-10 font-body">
              Explore our current available lots with seller-financing options and affordable payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/current-listings">
                <Button size="lg" className="btn-gold text-lg px-10 py-4 rounded-xl shadow-xl">
                  View Current Listings
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 text-lg px-10 py-4 rounded-xl transition-all duration-300"
                >
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-royal-blue via-gold to-royal-blue" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="text-3xl font-heading font-bold text-white mb-4">
                Knapp Real Estate Group
              </div>
              <p className="text-gray-300 mb-6 text-lg font-body">
                Where your land ownership journey begins!
              </p>
              <div className="space-y-2 text-gray-300 font-body">
                <p>jknapp@knappregroup.com</p>
                <p>(512) 924-5095</p>
                <p>Texas</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6 text-baby-blue">Quick Links</h4>
              <ul className="space-y-3 font-body">
                <li><Link href="/about" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">About</Link></li>
                <li><Link href="/current-listings" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Current Listings</Link></li>
                <li><Link href="/previous-listings" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Previous Listings</Link></li>
                <li><Link href="/faq" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6 text-baby-blue">Follow Us</h4>
              <div className="space-y-3 font-body">
                <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">Facebook</p>
                <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">LinkedIn</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 font-body">
              © 2021 Knapp Real Estate Group. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
