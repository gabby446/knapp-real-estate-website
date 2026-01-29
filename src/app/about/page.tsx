"use client"

import { Navigation } from "@/components/Navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Award, Heart } from "lucide-react"
import { useScrollAnimation } from "@/components/ScrollAnimation"

export default function AboutPage() {
  useScrollAnimation()

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="gold-accent-line mx-auto mb-6 animate-scale-in" />
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight animate-fade-up">
              About <span className="text-white/90">Knapp Real Estate Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-body animate-fade-up delay-100">
              Transforming land into opportunity—one lot at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-left">
              <div className="gold-accent-line mb-6" />
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed font-body">
                Knapp Real Estate Group was founded with a simple mission: to transform raw land into profitable
                opportunities for both investors and lot buyers. We recognized the potential in acquiring
                undeveloped land, subdividing it strategically, and creating value for all stakeholders.
              </p>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed font-body">
                Our team brings decades of combined experience in real estate development, land acquisition,
                and subdivision planning. We've successfully completed multiple projects, creating hundreds
                of lots and generating consistent returns for our partners.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed font-body">
                Today, we continue to focus on seller-financing opportunities that make land ownership
                accessible to more people while maintaining our commitment to transparency and quality development.
              </p>
            </div>
            <div className="animate-fade-right delay-200">
              <div className="premium-card rounded-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-baby-blue to-royal-blue flex items-center justify-center">
                  <img
                    src="/images/our-story.jpg"
                    alt="Aerial view of Knapp Real Estate Group development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 section-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <div className="gold-accent-line mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Our <span className="text-gradient-blue">Mission, Vision & Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-up delay-100">
              <Card className="glass-card text-center p-8 rounded-2xl border-0 h-full">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-royal-blue/20 to-blue-200/50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <TrendingUp className="h-10 w-10 text-royal-blue" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Mission</h3>
                  <p className="text-gray-600 font-body leading-relaxed">
                    To create profitable land development opportunities that provide value to investors while
                    making land ownership accessible through seller-financing options.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-up delay-200">
              <Card className="glass-card text-center p-8 rounded-2xl border-0 h-full">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-gold/20 to-gold-light/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Award className="h-10 w-10 text-gold-dark" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Vision</h3>
                  <p className="text-gray-600 font-body leading-relaxed">
                    To be the leading land development company in Texas, known for our ethical practices,
                    transparent communication, and consistent returns.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-up delay-300">
              <Card className="glass-card text-center p-8 rounded-2xl border-0 h-full">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-royal-blue/20 to-blue-200/50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Heart className="h-10 w-10 text-royal-blue" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Values</h3>
                  <p className="text-gray-600 font-body leading-relaxed">
                    Integrity, transparency, and excellence in everything we do. We believe in building
                    long-term relationships through honest communication and reliable results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <div className="gold-accent-line mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Meet Our <span className="text-gradient-blue">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Our experienced team brings expertise in real estate development, land acquisition, and subdivision planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center animate-fade-left">
              <div className="bg-gradient-to-br from-royal-blue/10 to-blue-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-16 w-16 text-royal-blue" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Jack Knapp</h3>
              <p className="text-lg text-royal-blue mb-4 font-medium">Cofounder and CEO</p>
              <p className="text-gray-600 font-body leading-relaxed">
                Jack founded Knapp Real Estate Group with a vision to make land development accessible and profitable for everyone. With a degree and background in Civil Engineering, paired with years of experience in real estate and development, Jack leads our team with a focus on integrity and results.
              </p>
            </div>
            <div className="animate-fade-right delay-200">
              <div className="premium-card rounded-2xl overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-baby-blue to-royal-blue flex items-center justify-center">
                  <img
                    src="https://ugc.same-assets.com/s8oRRJiIY6YYtgTdaiIxGklZZhWn4n_u.jpeg"
                    alt="Professional headshot representing team leadership"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Richard Knapp - Large Format */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center md:text-left animate-fade-left">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Richard Knapp</h3>
              <p className="text-lg text-royal-blue mb-4 font-medium">Cofounder and Head of Sales</p>
              <p className="text-gray-600 font-body leading-relaxed">
                
              </p>
            </div>
            <div className="animate-fade-right delay-200">
              <div className="premium-card rounded-2xl overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-baby-blue to-royal-blue flex items-center justify-center">
                  <img
                    src="/images/richard-knapp.jpg"
                    alt="Richard Knapp - Cofounder and Head of Sales"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Gabby & GerriLyne - Smaller Format */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Gabby Knapp */}
            <div className="text-center animate-fade-up delay-100">
              <div className="premium-card rounded-2xl overflow-hidden mb-6">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <Users className="h-20 w-20 text-gray-400" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Gabby Knapp</h3>
              <p className="text-lg text-royal-blue font-medium">Project Manager</p>
            </div>

            {/* GerriLyne Knapp */}
            <div className="text-center animate-fade-up delay-200">
              <div className="premium-card rounded-2xl overflow-hidden mb-6">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <Users className="h-20 w-20 text-gray-400" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">GerriLyne Knapp</h3>
              <p className="text-lg text-royal-blue font-medium">Sales Manager</p>
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
            <p className="text-gray-400 font-body">
              © 2021 Knapp Real Estate Group. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
