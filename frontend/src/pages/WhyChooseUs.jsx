import React from 'react';
import { Award, Clock, DollarSign, Users, Lightbulb, Shield } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { whyChooseUs, businessInfo } from '../mockData';

const iconMap = {
  Award, Clock, DollarSign, Users, Lightbulb, Shield
};

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Why Choose Us</h1>
            <p className="text-xl text-slate-600">
              What makes us the preferred choice for tax and compliance services
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <Card key={item.id} className="border-slate-200 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-emerald-600 group-hover:to-emerald-500 transition-all">
                      <Icon className="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What Sets Us Apart</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Deep Industry Knowledge</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                With over {businessInfo.experience} years of hands-on experience as a Chartered Accountant, we bring deep expertise in handling complex tax matters, GST compliance, and business advisory across diverse industries. Our ICAI certification (Member No. {businessInfo.icaiNumber}) ensures you're working with a qualified professional who stays updated with the latest regulatory changes.
              </p>
              <p className="text-slate-700 leading-relaxed">
                We've successfully served clients ranging from individual taxpayers to startups and established businesses, understanding the unique challenges each segment faces in maintaining compliance and optimizing tax positions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Proactive Compliance Management</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                We don't just react to deadlines – we help you stay ahead of them. Our systematic approach includes maintaining a detailed compliance calendar for all your statutory requirements, sending timely reminders, and ensuring submissions are completed well before due dates.
              </p>
              <p className="text-slate-700 leading-relaxed">
                This proactive approach has helped our clients avoid late filing penalties, interest charges, and unnecessary compliance stress. You can focus on running your business while we handle the compliance complexities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Clear Communication & Accessibility</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Tax laws can be complex, but our communication doesn't have to be. We explain things in clear, simple language without overwhelming you with jargon. Whether it's a notice from tax authorities or a question about your compliance obligations, you'll always get straightforward, actionable guidance.
              </p>
              <p className="text-slate-700 leading-relaxed">
                We're accessible when you need us – through phone, WhatsApp, or in-person consultations at our Ahmedabad office. Quick response times and personalized attention are not just promises; they're how we work.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Strategic Tax Planning</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Compliance is important, but we go beyond that. We help you understand tax-saving opportunities, optimize your business structure for tax efficiency, and plan ahead for major financial decisions. Our advisory services are designed to add tangible value to your bottom line.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Whether it's choosing the right business entity, planning capital expenditures for tax benefits, or structuring transactions efficiently, our strategic guidance helps you make informed decisions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Technology-Enabled Services</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                We leverage modern tools and technologies to deliver efficient services. From digital documentation to secure online communication, we make it easy for you to work with us regardless of your location. Our clients across India benefit from seamless remote service delivery.
              </p>
              <p className="text-slate-700 leading-relaxed">
                At the same time, we maintain the personal touch that's essential in professional services. Technology enhances our efficiency, but human expertise and judgment remain at the core of what we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">{businessInfo.experience}+</div>
              <p className="text-slate-600 font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <p className="text-slate-600 font-medium">Clients Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
              <p className="text-slate-600 font-medium">Timely Compliance</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
              <p className="text-slate-600 font-medium">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Experience the Difference</h2>
          <p className="text-xl text-emerald-50 mb-8">
            Join hundreds of satisfied clients who trust us with their tax and compliance needs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-50 px-8">
                Get Started Today
              </Button>
            </Link>
            <a href={`tel:${businessInfo.phone}`}>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8">
                Call {businessInfo.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
