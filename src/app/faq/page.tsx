"use client"

import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "What is seller-financing and how does it work?",
      answer: "Seller-financing means we act as the bank, allowing you to purchase land directly from us with flexible payment terms. Instead of needing a traditional mortgage, you make a down payment and monthly payments directly to us. This makes land ownership more accessible with lower credit requirements and faster closing times."
    },
    {
      question: "How much do I need for a down payment?",
      answer: "Our down payments typically range from $2,000 to $3,000 depending on the lot and development. This is significantly lower than traditional real estate purchases, making land ownership accessible to more people."
    },
    {
      question: "What are the typical monthly payment amounts?",
      answer: "Monthly payments generally range from $700 to $800 depending on the lot size, location, and purchase price. We work with you to find payment terms that fit your budget."
    },
    {
      question: "Do I need perfect credit to purchase a lot?",
      answer: "No! One of the benefits of our seller-financing program is that we don't require perfect credit. We look at your overall financial situation and ability to make payments rather than just your credit score."
    },
    {
      question: "What utilities and services are available on the lots?",
      answer: "Utility availability varies by development. Most of our lots have access to electricity, and we provide detailed information about water, sewer, and other utilities for each specific lot. "
    },
    {
      question: "Can I build on my lot immediately after purchase?",
      answer: "Building requirements vary by location and local regulations. We provide information about building restrictions, setback requirements, and permit processes for each development. Many of our lots are ready for construction upon purchase."
    },
    {
      question: "What happens if I want to sell my lot in the future?",
      answer: "You own the lot and can sell it at any time, subject to the terms of your purchase agreement. Many of our lot owners have seen appreciation in their land values over time."
    },
    {
      question: "Are there any HOA fees or ongoing costs?",
      answer: "HOA fees and ongoing costs vary by development. We provide full disclosure of any fees, restrictions, or ongoing costs associated with each lot before purchase. There are no hidden surprises."
    },
    {
      question: "How long is the typical payment term?",
      answer: "Payment terms typically range from 5-10 years, depending on development, but we're flexible and can work with you to find terms that fit your financial situation. You can also pay off your lot early without penalty."
    },
    {
      question: "What documents do I receive when I purchase a lot?",
      answer: "You'll receive  contracts such as deed of trust, promissory note, warranty deed, or similar document that outlines your ownership rights, payment terms, and responsibilities. "
    },
    {
      question: "Can I visit the lots before purchasing?",
      answer: "Absolutely! We encourage all potential buyers to visit and inspect any lots they're considering. We can arrange site visits and provide detailed plat maps and lot information."
    },
    {
      question: "What makes your company different from other land sellers?",
      answer: "We focus exclusively on seller-financing to make land ownership accessible. Our transparent approach, low down payments, and flexible terms set us apart. We also handle the entire development process from raw land to finished lots, ensuring quality and value."
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
              Frequently Asked <span className="text-white/90">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Everything you need to know about land ownership and our seller-financing programs
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Common <span className="text-royal-blue">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to the most common questions about our land ownership opportunities and seller-financing options.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 hover:border-royal-blue/20 transition-all">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-royal-blue flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-royal-blue flex-shrink-0" />
                    )}
                  </button>

                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Still Have <span className="text-royal-blue">Questions?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team is here to help you understand every aspect of land ownership and our financing options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center p-8 hover:shadow-xl hover:border-royal-blue/20 transition-all border-2 border-transparent">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-royal-blue/10 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="h-8 w-8 text-royal-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Support</h3>
                <p className="text-gray-600 mb-6">
                  Send us your questions via email and we'll get back to you with detailed answers.
                </p>
                <a href="mailto:jknapp@knappregroup.com">
                  <Button className="bg-royal-blue hover:bg-royal-blue/90 text-white">
                    Email Us
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl hover:border-royal-blue/20 transition-all border-2 border-transparent">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-royal-blue/10 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="h-8 w-8 text-royal-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Phone Support</h3>
                <p className="text-gray-600 mb-6">
                  Call us directly to speak with a land ownership specialist about your questions.
                </p>
                <a href="tel:512-924-5095">
                  <Button className="bg-royal-blue hover:bg-royal-blue/90 text-white">
                    Call (512) 924-5095
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Land Ownership Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't let questions hold you back. Explore our current available lots and start building your future today.
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
                📞 (512) 924-5095<br />
                📍 Texas
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="/current-listings" className="text-gray-300 hover:text-white">Current Listings</a></li>
                <li><a href="/previous-listings" className="text-gray-300 hover:text-white">Previous Listings</a></li>
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
