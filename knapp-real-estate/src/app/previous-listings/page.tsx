import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, Calendar, CheckCircle, TrendingUp, Users, Award } from "lucide-react"

export default function PreviousListingsPage() {
  const completedProjects = [
    {
      id: 1,
      name: "County Road 5",
      location: "Hereford, Texas",
      completedDate: "November 2024",
      totalLots: 24,
      soldLots: 24,
      avgSalePrice: "$10,500",
      description: "Recently completed residential subdivision in Hereford with all lots successfully sold. Excellent returns for our satisfied lot buyers.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      name: "County Road 310",
      location: "Canyon, Texas",
      completedDate: "March 2021",
      totalLots: 28,
      soldLots: 28,
      avgSalePrice: "$9,500",
      description: "Successfully completed residential subdivision with all lots sold. Great returns for our partners.",
      image: "/images/county-road-310.jpg"
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
              Previous <span className="text-white/90">Listings</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Explore our track record of successful land development projects
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-royal-blue mb-2">2x</div>
              <div className="text-lg text-gray-600">Equity Multiple</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-royal-blue mb-2">18</div>
              <div className="text-lg text-gray-600">Month Avg Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-royal-blue mb-2">100%</div>
              <div className="text-lg text-gray-600">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Completed <span className="text-royal-blue">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              View our successful track record of land development and subdivision projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {completedProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all border-2 hover:border-royal-blue/20">
                <div className="lg:flex">
                  <div className="lg:w-1/2">
                    <img
                      src={project.image}
                      alt={`${project.name} - Completed subdivision project`}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold text-gray-900">{project.name}</h3>
                      <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Completed
                      </span>
                    </div>

                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>

                    <div className="flex items-center text-gray-600 mb-6">
                      <Calendar className="h-4 w-4 mr-2" />
                      Completed in {project.completedDate}
                    </div>

                    <p className="text-gray-600 mb-6">{project.description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-500">Total Lots</p>
                        <p className="text-2xl font-bold text-gray-900">{project.totalLots}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Lots Sold</p>
                        <p className="text-2xl font-bold text-green-600">{project.soldLots}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Avg Sale Price</p>
                        <p className="text-2xl font-bold text-royal-blue">{project.avgSalePrice}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Projects Succeed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Our <span className="text-royal-blue">Projects Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to land development ensures consistent results for all stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl hover:border-royal-blue/20 transition-all border-2 border-transparent">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-royal-blue/10 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-royal-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Location Selection</h3>
                <p className="text-gray-600">
                  We carefully analyze market trends, growth patterns, and infrastructure development to choose prime locations with strong appreciation potential.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl hover:border-royal-blue/20 transition-all border-2 border-transparent">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-royal-blue/10 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-royal-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Development</h3>
                <p className="text-gray-600">
                  Our experienced team handles all aspects of subdivision planning, permitting, and infrastructure development to maximize lot values.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl hover:border-royal-blue/20 transition-all border-2 border-transparent">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-royal-blue/10 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-royal-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Execution</h3>
                <p className="text-gray-600">
                  From initial planning to final lot sales, we maintain high standards and attention to detail that ensures project success and buyer satisfaction.
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
            Join Our Next Project
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't miss out on our current developments with proven track record and seller-financing options.
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
              >
                Contact Us
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
