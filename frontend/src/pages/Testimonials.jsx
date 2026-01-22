import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { testimonials } from '../mockData';

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Client Testimonials</h1>
            <p className="text-xl text-slate-600">
              Hear what our clients say about their experience working with us
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-slate-200 hover:shadow-lg transition-shadow relative">
                <CardContent className="p-8">
                  <Quote className="w-12 h-12 text-emerald-200 absolute top-6 right-6" />
                  
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed italic relative z-10">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-slate-200 pt-4">
                    <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                    <p className="text-emerald-600 font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Trusted by Diverse Clients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">50+</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Startups</h3>
              <p className="text-slate-600 text-sm">Helped new businesses with registration and compliance</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">200+</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">SMEs</h3>
              <p className="text-slate-600 text-sm">Managing ongoing tax and compliance for growing businesses</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">250+</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Individuals</h3>
              <p className="text-slate-600 text-sm">Personal tax filing and advisory services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Success Stories</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">E-commerce Business - GST Compliance</h3>
              <p className="text-slate-700 mb-4">
                An e-commerce business was struggling with GST compliance across multiple states. We streamlined their processes, set up proper systems, and ensured timely monthly filings. Result: Zero penalties and peace of mind for 3+ years.
              </p>
              <p className="text-sm text-emerald-600 font-medium">Saved ₹2L+ in potential penalties</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Startup - Business Setup & Registration</h3>
              <p className="text-slate-700 mb-4">
                A tech startup founder needed complete guidance on business structure, registrations, and initial compliance. We handled company incorporation, GST registration, and set up a compliance calendar. They could focus entirely on product development.
              </p>
              <p className="text-sm text-blue-600 font-medium">Complete setup in under 2 weeks</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Professional - Income Tax Notice Resolution</h3>
              <p className="text-slate-700 mb-4">
                A real estate professional received an income tax notice regarding undisclosed income. We analyzed the case, prepared detailed documentation, and represented them before tax authorities. The matter was resolved without any penalty.
              </p>
              <p className="text-sm text-purple-600 font-medium">Successfully resolved with ₹0 penalty</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Professional Service?</h2>
          <p className="text-xl text-emerald-50 mb-8">
            Join our growing list of satisfied clients
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-50 px-8">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
