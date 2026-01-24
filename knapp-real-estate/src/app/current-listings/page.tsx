"use client"

import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, Calendar, DollarSign, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

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
        className="w-full h-48 object-cover rounded-t-lg md:my-[2px]"
      />

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
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
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

export default function CurrentListingsPage() {
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
        "https://ugc.same-assets.com/T1vxjCue58gdpMPLI_mbsUMOZ-CGe-gh.jpeg",
        "https://ugc.same-assets.com/CpN_8I8TSfWXw4rfJ_xYBa1ZaxEQUwTt.jpeg",
        "https://ugc.same-assets.com/tGPMe4rMNhd7QBCMyPVHJ8DWkGyPxdF0.jpeg",
        "https://ugc.same-assets.com/YfMx9inlt2CSjjPBEuyKB-r90Cx_1cOT.jpeg",
        "/images/county-road-160-5.jpg"
      ]
    },
    {
      id: 2,
      name: "Osage Street 321",
      location: "Canyon, Texas",
      status: "Lots Available",
      totalLots: 32,
      availableLots: 30,
      priceRange: "$59,999 - $69,999",
      downPayment: "$3,000 - $3,500",
      monthlyPayment: "$695 - $795",
      description: "Quality residential lots in desirable Canyon location. All utilities available with road access and ready for development.",
      images: [
        "/images/osage-street-1.jpg",
        "/images/osage-street-2.jpg",
        "/images/osage-street-3.jpg",
        "/images/osage-street-4.jpg",
        "/images/osage-street-5.jpg"
      ]
    },
    {
      id: 3,
      name: "Solid Work Addition",
      location: "Lubbock, Texas",
      status: "Lots Available",
      totalLots: 147,
      availableLots: 147,
      priceRange: "$35,000 - $85,000",
      downPayment: "$4,000 - $11,000",
      monthlyPayment: "$750 - $1,250",
      description: "Spacious residential lots in growing Lubbock suburb. Great location near schools and shopping with easy highway access. Perfect for families looking to build their dream home.",
      images: [
        "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 4,
      name: "Josiah Addition",
      location: "Amarillo, Texas",
      status: "Lots Available",
      totalLots: 182,
      availableLots: 180,
      priceRange: "$35,000 - $60,000",
      downPayment: "$4,000 - $7,000",
      monthlyPayment: "$750 - $950",
      description: "Affordable rural residential lots with stunning open views. Perfect for those seeking space and tranquility while remaining close to Amarillo's amenities and job market.",
      images: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Current <span className="text-white/90">Listings</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Discover available lots with seller-financing options and affordable payments
            </p>
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Active <span className="text-royal-blue">Developments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our current selection of subdivision lots with flexible financing options.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {activeProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all border-2 hover:border-royal-blue/20">
                <ImageCarousel images={project.images} projectName={project.name} />
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'Lots Available'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    {project.location}
                  </div>

                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Available Lots</p>
                      <p className="text-lg font-semibold text-gray-900">{project.availableLots} of {project.totalLots}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Price Range</p>
                      <p className="text-lg font-semibold text-royal-blue">{project.priceRange}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Down Payment</p>
                      <p className="text-lg font-semibold text-green-600">{project.downPayment}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Monthly Payment</p>
                      <p className="text-lg font-semibold text-green-600">{project.monthlyPayment}</p>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-royal-blue to-blue-600 hover:from-royal-blue/90 hover:to-blue-500 text-white">
                      Inquire About This Development
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Own Your Lot?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to learn more about our current developments and financing options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-royal-blue hover:bg-white/90 text-lg px-8 py-3">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/faq">
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white hover:text-royal-blue text-lg px-8 py-3 text-[#1f8fff]"
              >
                View FAQ
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
              <p className="text-gray-300 mb-4">Where your land ownership journey begins!</p>
              <p className="text-gray-300">
                📧 jknapp@knappregroup.com<br />
                📞 (512) 212-6737<br />
                📍 Texas
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="/current-listings" className="text-gray-300 hover:text-white">Current Listings</a></li>
                <li><a href="/previous-listings" className="text-gray-300 hover:text-white">Previous Listings</a></li>
                <li><a href="/testimonials" className="text-gray-300 hover:text-white">Testimonials</a></li>
                <li><a href="/faq" className="text-gray-300 hover:text-white">FAQ</a></li>
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
            <p className="text-gray-300">© 2021 Knapp Real Estate Group. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
