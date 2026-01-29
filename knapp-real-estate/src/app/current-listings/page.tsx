"use client"
// Build trigger: 2026-01-29-rebuild

import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, Calendar, DollarSign, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/components/ScrollAnimation"

// Image Carousel Component
function ImageCarousel({ images, projectName }: { images: string[], projectName: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt={`${projectName} - Image ${currentIndex + 1}`}
        className="w-full h-56 object-cover rounded-t-2xl"
      />

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-all shadow-lg hover:scale-110"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-all shadow-lg hover:scale-110"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
      <div className="absolute top-3 right-3 glass-dark text-white px-3 py-1 rounded-full text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

export default function CurrentListingsPage() {
  useScrollAnimation()

  const activeProjects = [
    {
      id: 1,
      name: "County Road 160",
      location: "Midland, Texas",
      status: "Lots Available",
      totalLots: 471,
      availableLots: 220,
      priceRange: "$30,000 - $120,000",
      downPayment: "$3,000 - $14,000",
      monthlyPayment: "$670 - $1,750",
      description: "Premium residential lots in fast-growing Midland area. Close to major employment centers with excellent access to highways and amenities.",
      images: [
        "/images/county-road-160-1.jpg",
        "/images/county-road-160-2.jpg",
        "/images/county-road-160-3.jpg",
        "/images/county-road-160-4.jpg",
        "/images/county-road-160-5.jpg"
      ]
    },
    {
      id: 2,
      name: "Solid Work Addition",
      location: "Midland, Texas",
      status: "Lots Available",
      totalLots: 147,
      availableLots: 147,
      priceRange: "$35,000 - $85,000",
      downPayment: "$4,000 - $11,000",
      monthlyPayment: "$750 - $1,250",
      description: "Spacious residential lots in growing Midland area. Great location near schools and shopping with easy highway access. Perfect for families looking to build their dream home.",
      images: [
        "/images/solid-work-aerial-1.jpg",
        "/images/solid-work-aerial-2.jpg"
      ]
    },
    {
      id: 3,
      name: "Josiah Addition",
      location: "Midland, Texas",
      status: "Lots Available",
      totalLots: 182,
      availableLots: 180,
      priceRange: "$35,000 - $60,000",
      downPayment: "$4,000 - $7,000",
      monthlyPayment: "$750 - $950",
      description: "Affordable rural residential lots with stunning open views. Perfect for those seeking space and tranquility while remaining close to Midland's amenities and job market.",
      images: [
        "/images/josiah-road.jpg",
        "/images/josiah-utility.jpg"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="premium-gradient pt-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center animate-fade-up">
            <div className="gold-accent-line mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
              Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-baby-blue">Listings</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-body">
              Discover available lots with seller-financing options and affordable payments
            </p>
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-up">
            <div className="gold-accent-line mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Active <span className="text-gradient-blue">Developments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Choose from our current selection of subdivision lots with flexible financing options.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {activeProjects.map((project, index) => (
              <div key={project.id} className={`animate-fade-up delay-${(index + 1) * 100}`}>
                <Card className="premium-card overflow-hidden rounded-2xl border-0">
                  <ImageCarousel images={project.images} projectName={project.name} />
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-heading font-bold text-gray-900">{project.name}</h3>
                      <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                        project.status === 'Lots Available'
                          ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200'
                          : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-600 mb-4 font-body">
                      <MapPin className="h-4 w-4 mr-2 text-royal-blue" />
                      {project.location}
                    </div>

                    <p className="text-gray-600 mb-6 font-body leading-relaxed">{project.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm text-gray-500 font-body">Available Lots</p>
                        <p className="text-lg font-heading font-semibold text-gray-900">{project.availableLots} of {project.totalLots}</p>
                      </div>
                      <div className="bg-royal-blue/5 rounded-xl p-4">
                        <p className="text-sm text-gray-500 font-body">Price Range</p>
                        <p className="text-lg font-heading font-semibold text-royal-blue">{project.priceRange}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-gold/5 rounded-xl p-4 border border-gold/20">
                        <p className="text-sm text-gray-500 font-body">Down Payment</p>
                        <p className="text-lg font-heading font-semibold text-gold-dark">{project.downPayment}</p>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                        <p className="text-sm text-gray-500 font-body">Monthly Payment</p>
                        <p className="text-lg font-heading font-semibold text-green-600">{project.monthlyPayment}</p>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full btn-gold rounded-xl py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                        Inquire About This Development
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 premium-gradient relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <div className="animate-fade-up">
            <Star className="h-12 w-12 text-baby-blue mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Ready to Own Your Lot?
            </h2>
            <p className="text-xl text-white/90 mb-10 font-body">
              Contact us today to learn more about our current developments and financing options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="btn-gold text-lg px-10 py-4 rounded-xl shadow-xl">
                  Contact Us Today
                </Button>
              </Link>
              <Link href="/faq">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 text-lg px-10 py-4 rounded-xl transition-all duration-300"
                >
                  View FAQ
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
              <p className="text-gray-300 mb-6 text-lg font-body">Where your land ownership journey begins!</p>
              <div className="space-y-2 text-gray-300 font-body">
                <p>jknapp@knappregroup.com</p>
                <p>(512) 924-5095</p>
                <p>Texas</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6 text-baby-blue">Quick Links</h4>
              <ul className="space-y-3 font-body">
                <li><a href="/about" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">About</a></li>
                <li><a href="/current-listings" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Current Listings</a></li>
                <li><a href="/previous-listings" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Previous Listings</a></li>
                <li><a href="/faq" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">FAQ</a></li>
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
            <p className="text-gray-400 font-body">© 2021 Knapp Real Estate Group. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
