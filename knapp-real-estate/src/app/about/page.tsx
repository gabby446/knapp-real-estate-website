import { Navigation } from "@/components/Navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              About <span className="text-white/90">Knapp Real Estate Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Transforming land into opportunity—one lot at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Knapp Real Estate Group was founded with a simple mission: to transform raw land into profitable
                opportunities for both investors and lot buyers. We recognized the potential in acquiring
                undeveloped land, subdividing it strategically, and creating value for all stakeholders.
              </p>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Our team brings decades of combined experience in real estate development, land acquisition,
                and subdivision planning. We've successfully completed multiple projects, creating hundreds
                of lots and generating consistent returns for our partners.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Today, we continue to focus on seller-financing opportunities that make land ownership
                accessible to more people while maintaining our commitment to transparency and quality development.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-baby-blue to-royal-blue flex items-center justify-center">
                <img
                  src="https://ugc.same-assets.com/T88X_zPu_isTlZ_WlD3wXWeIt0sgWpRC.jpeg"
                  alt="Modern office building representing Knapp Real Estate Group headquarters"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-royal-blue">Mission, Vision & Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl hover:border-royal-blue/20 transition-all border-2 border-transparent">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-royal-blue/10 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-royal-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
                <p className="text-gray-600">
                  To create profitable land development opportunities that provide value to investors while
                  making land ownership accessible through seller-financing options.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl hover:border-royal-blue/20 transition-all border-2 border-transparent">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-royal-blue/10 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-royal-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-600">
                  To be the leading land development company in Texas, known for our ethical practices,
                  transparent communication, and consistent returns.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl hover:border-royal-blue/20 transition-all border-2 border-transparent">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-royal-blue/10 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-royal-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Values</h3>
                <p className="text-gray-600">
                  Integrity, transparency, and excellence in everything we do. We believe in building
                  long-term relationships through honest communication and reliable results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-royal-blue">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team brings expertise in real estate development, land acquisition, and subdivision planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <div className="bg-gradient-to-br from-royal-blue/10 to-blue-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-16 w-16 text-royal-blue" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Jack Knapp</h3>
              <p className="text-lg text-royal-blue mb-4">Founder & CEO</p>
              <p className="text-gray-600">
                Jack founded Knapp Real Estate Group with a vision to make land development accessible and profitable for everyone. With a degree and background in Civil Engineering, paired with years of experience in real estate and development, Jack leads our team with a focus on integrity and results.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
