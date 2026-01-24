"use client"

import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"
import { trackEvent } from "@/components/Analytics"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interestedProject: '',
    contactMethod: 'email'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const form = e.target as HTMLFormElement
      const formDataEntries = new FormData(form)

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataEntries as unknown as URLSearchParams).toString()
      })

      if (response.ok) {
        // Track successful form submission
        trackEvent('contact_form_submit', {
          project_interest: formData.interestedProject || 'general_inquiry',
          contact_method: formData.contactMethod
        })

        alert('Thank you for your inquiry! We will contact you within 24 hours.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          interestedProject: '',
          contactMethod: 'email'
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      alert('There was an error sending your message. Please try calling us directly at (512) 212-6737.')
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Contact <span className="text-white/90">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Ready to start your land ownership journey? Let's discuss your options today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Get in <span className="text-royal-blue">Touch</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to own your piece of land? Our team is here to help you explore our seller-financing options and find the perfect lot for your needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-royal-blue/10 to-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-royal-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-2">Speak directly with a land ownership specialist</p>
                    <a href="tel:512-212-6737" className="text-royal-blue font-medium hover:underline">
                      (512) 212-6737
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-royal-blue/10 to-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-royal-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-2">Send us your questions anytime</p>
                    <a href="mailto:jknapp@knappregroup.com" className="text-royal-blue font-medium hover:underline">
                      jknapp@knappregroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-royal-blue/10 to-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-royal-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600">Serving Texas</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-royal-blue/10 to-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-royal-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 hover:border-royal-blue/20 transition-all">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-royal-blue focus:border-royal-blue outline-none transition-colors"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-royal-blue focus:border-royal-blue outline-none transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-royal-blue focus:border-royal-blue outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="interestedProject" className="block text-sm font-medium text-gray-700 mb-2">
                        Interested Project
                      </label>
                      <select
                        id="interestedProject"
                        name="interestedProject"
                        value={formData.interestedProject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-royal-blue focus:border-royal-blue outline-none transition-colors"
                      >
                        <option value="">Select a project (optional)</option>
                        <option value="county-road-5">County Road 5 - Hereford, TX</option>
                        <option value="osage-street-321">Osage Street 321 - Lubbock, TX</option>
                        <option value="general-inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        id="contactMethod"
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-royal-blue focus:border-royal-blue outline-none transition-colors"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="text">Text Message</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-royal-blue focus:border-royal-blue outline-none transition-colors"
                        placeholder="Tell us about your land ownership goals and any questions you have..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-royal-blue to-blue-600 hover:from-royal-blue/90 hover:to-blue-500 text-white text-lg py-3"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-royal-blue">Knapp Real Estate Group</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl hover:border-royal-blue/20 transition-all border-2 border-transparent">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Seller-Financing Available</h3>
                <p className="text-gray-600">
                  No bank needed! We offer direct financing with low down payments and manageable monthly terms.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl hover:border-royal-blue/20 transition-all border-2 border-transparent">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparent Process</h3>
                <p className="text-gray-600">
                  No hidden fees or surprises. We believe in clear communication and honest dealing throughout your journey.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl hover:border-royal-blue/20 transition-all border-2 border-transparent">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
                <p className="text-gray-600">
                  Successful completion of multiple projects with satisfied land owners and consistent results.
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
            Don't Wait - Start Today!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Every day you wait is a day closer to missing out on the perfect lot. Contact us now to secure your land ownership opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:512-212-6737">
              <Button size="lg" className="bg-white text-royal-blue hover:bg-white/90 text-lg px-8 py-3">
                Call (512) 212-6737
              </Button>
            </a>
            <a href="mailto:jknapp@knappregroup.com">
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white hover:text-royal-blue text-lg px-8 py-3 text-white"
              >
                Email Us Now
              </Button>
            </a>
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
