import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Star, Quote } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Canyon, Texas",
      project: "County Road 310",
      rating: 5,
      testimonial: "Working with Knapp Real Estate Group was an amazing experience. They made land ownership accessible with their seller-financing options. I was able to purchase my lot with just $1,000 down and affordable monthly payments. The entire process was transparent and professional.",
      date: "March 2021"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      location: "Hereford, Texas",
      project: "County Road 5",
      rating: 5,
      testimonial: "I've been looking for affordable land for years, and Knapp Real Estate Group made it possible. Their low down payment and monthly payment options fit perfectly into my budget. The team was helpful throughout the entire purchasing process.",
      date: "June 2021"
    },
    {
      id: 3,
      name: "Jennifer Davis",
      location: "Lubbock, Texas",
      project: "Osage Street 321",
      rating: 5,
      testimonial: "The seller-financing option was exactly what I needed. Jordan and his team were incredibly knowledgeable about the area and helped me find the perfect lot for my future home. The monthly payments are so manageable - I wish I had found them sooner!",
      date: "August 2021"
    },
    {
      id: 4,
      name: "Robert Thompson",
      location: "Canyon, Texas",
      project: "County Road 310",
      rating: 5,
      testimonial: "Knapp Real Estate Group delivered exactly what they promised. The land development was completed on schedule, and the value of my lot has already increased significantly. Their professional approach and transparent communication made the entire experience stress-free.",
      date: "January 2021"
    },
    {
      id: 5,
      name: "Lisa Martinez",
      location: "Hereford, Texas",
      project: "County Road 5",
      rating: 5,
      testimonial: "As a first-time land buyer, I was nervous about the process. The team at Knapp Real Estate Group walked me through every step and answered all my questions. The seller-financing made it possible for me to own land without breaking the bank.",
      date: "September 2021"
    },
    {
      id: 6,
      name: "David Wilson",
      location: "Lubbock, Texas",
      project: "Osage Street 321",
      rating: 5,
      testimonial: "I've worked with several real estate companies, but none compare to Knapp Real Estate Group. Their commitment to making land ownership accessible through affordable financing is remarkable. I now own multiple lots and couldn't be happier with my investments.",
      date: "November 2021"
    }
  ]

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Client <span className="text-white/90">Testimonials</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Hear from our satisfied land owners and lot buyers
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-royal-blue">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people who achieved their land ownership dreams through our seller-financing programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-all border-2 hover:border-royal-blue/20 relative">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4">
                    <Quote className="h-8 w-8 text-royal-blue/20" />
                  </div>

                  {/* Rating */}
                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonial.testimonial}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900 mb-1">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 mb-1">{testimonial.location}</div>
                    <div className="text-sm text-royal-blue font-medium mb-1">{testimonial.project}</div>
                    <div className="text-xs text-gray-400">{testimonial.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-royal-blue">Track Record</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-royal-blue mb-2">100%</div>
              <div className="text-lg text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-royal-blue mb-2">600+</div>
              <div className="text-lg text-gray-600">Happy Land Owners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-royal-blue mb-2">2+</div>
              <div className="text-lg text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-royal-blue mb-2">2x</div>
              <div className="text-lg text-gray-600">Average Returns</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Clients <span className="text-royal-blue">Choose Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl hover:border-royal-blue/20 transition-all border-2 border-transparent">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordable Financing</h3>
                <p className="text-gray-600">
                  Low down payments and manageable monthly payments make land ownership accessible to everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl hover:border-royal-blue/20 transition-all border-2 border-transparent">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparent Process</h3>
                <p className="text-gray-600">
                  No hidden fees, clear communication, and honest guidance throughout your land buying journey.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl hover:border-royal-blue/20 transition-all border-2 border-transparent">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results</h3>
                <p className="text-gray-600">
                  Track record of successful projects and satisfied clients who achieved their land ownership goals.
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
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your land ownership journey today with our affordable seller-financing options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/current-listings">
              <Button size="lg" className="bg-white text-royal-blue hover:bg-white/90 text-lg px-8 py-3">
                View Available Lots
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white hover:text-royal-blue text-lg px-8 py-3 text-[#1f8fff]"
              >
                Contact Us Today
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
