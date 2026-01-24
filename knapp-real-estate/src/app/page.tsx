"use client"

import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, Users, TrendingUp, Award, ChevronRight, ChevronLeft } from "lucide-react"
import { useState, useEffect } from "react"

// Hero Background Carousel Component
function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    "/images/hero-aerial-1.jpg",
    "/images/hero-aerial-2.jpg",
    "/images/county-road-160-aerial-1.jpg",
    "/images/county-road-160-aerial-2.jpg",
    "/images/hero-aerial-3.jpg"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

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
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-royal-blue/60 via-royal-blue/50 to-baby-blue/60" />

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
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

  // Auto-advance every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative aspect-video bg-gradient-to-br from-baby-blue to-royal-blue">
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
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all z-10"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all z-10"
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
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Project Label */}
      <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg px-4 py-2 z-10">
        <p className="text-lg font-semibold text-gray-900">{projectName}</p>
        <p className="text-gray-600">Midland, Texas</p>
      </div>
    </div>
  )
}

export default function HomePage() {
  const projectImages = [
    "/images/county-road-160-aerial-1.jpg",
    "/images/county-road-160-aerial-2.jpg",
    "/images/county-road-160-construction.jpg"
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Background Carousel */}
      <section className="relative pt-16 min-h-[600px] md:min-h-[700px] flex items-center">
        <HeroCarousel />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5), 0 0 80px rgba(0,0,0,0.3)' }}
            >
              BECOME A<br />
              <span className="text-white">LAND OWNER TODAY!</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
              style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}
            >
              Seller-financing • Low Down Payments • Low Monthly Payments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/current-listings">
                <Button size="lg" className="bg-white text-royal-blue hover:bg-white/90 text-lg px-8 py-3 shadow-lg">
                  View Current Listings
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-royal-blue mb-2">1000+</div>
              <div className="text-lg text-gray-600">Acres Developed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-royal-blue mb-2">3+</div>
              <div className="text-lg text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-royal-blue mb-2">600+</div>
              <div className="text-lg text-gray-600">Lots Sold</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction with Image Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-royal-blue">Knapp Real Estate Group</span> is a privately held real estate development company.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We specialize in acquiring raw land, subdividing it into profitable lots, and selling to investors and developers.
                Our experienced team has been transforming land investments and creating opportunities for both lot buyers and investors
                to participate in profitable real estate development.
              </p>
              <Link href="/contact">
                <Button className="bg-royal-blue hover:bg-royal-blue/90 text-white text-lg px-8 py-3">
                  Partner With Us
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <ImageCarousel images={projectImages} projectName="County Road 160 Development" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2292ff]">
              Why Choose <span className="text-royal-blue">Knapp Real Estate Group</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring expertise, transparency, and proven results to every subdivision development project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl hover:border-royal-blue/20 transition-all border-2 border-transparent">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-royal-blue/10 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-royal-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
                <p className="text-gray-600">
                  Our experienced team handles every aspect of subdivision development, from land acquisition to final lot sales.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl hover:border-royal-blue/20 transition-all border-2 border-transparent">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-royal-blue/10 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-royal-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Returns</h3>
                <p className="text-gray-600">
                  Track record of successful projects with consistent returns for our investors and satisfied lot buyers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl hover:border-royal-blue/20 transition-all border-2 border-transparent">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-royal-blue/10 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-royal-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Transparency</h3>
                <p className="text-gray-600">
                  Complete visibility into project progress, financials, and timelines. No hidden fees or surprises.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Own Your Piece of Land?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Explore our current available lots with seller-financing options and affordable payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/current-listings">
              <Button size="lg" className="bg-white text-royal-blue hover:bg-white/90 text-lg px-8 py-3">
                View Current Listings
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white hover:text-royal-blue text-lg px-8 py-3 text-[#1f8fff]"
              >Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-white mb-4">
                Knapp Real Estate Group
              </div>
              <p className="text-gray-300 mb-4">Where your land ownership journey begins!
              </p>
              <p className="text-gray-300">
                📧 jknapp@knappregroup.com<br />
                📞 (512) 212-6737<br />
                📍 Texas
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link href="/current-listings" className="text-gray-300 hover:text-white">Current Listings</Link></li>
                <li><Link href="/previous-listings" className="text-gray-300 hover:text-white">Previous Listings</Link></li>
                <li><Link href="/testimonials" className="text-gray-300 hover:text-white">Testimonials</Link></li>
                <li><Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="space-y-2">
                <p className="text-gray-300">Facebook</p>
                <p className="text-gray-300">LinkedIn</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">© 2021 Knapp Real Estate Group. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
