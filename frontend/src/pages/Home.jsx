import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle, FileText, Calculator, ClipboardCheck, Building2, Scale, TrendingUp, Award, Clock, DollarSign, Users, Lightbulb, Shield, Star, CheckCircle2, Sparkles, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { businessInfo, services, whyChooseUs, testimonials } from '../mockData';

const iconMap = {
  FileText, Calculator, ClipboardCheck, Building2, Scale, TrendingUp,
  Award, Clock, DollarSign, Users, Lightbulb, Shield
};

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Futuristic Hero Section */}
      <section className="relative pt-32 pb-24 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500 rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500 rounded-full opacity-10 blur-3xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-emerald-400 rounded-full opacity-5 blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white animate-slide-in-up">
              <div className="inline-flex items-center space-x-2 glass px-5 py-2.5 rounded-full text-sm font-semibold mb-8 animate-glow">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">{businessInfo.experience}+ Years of Excellence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Next-Gen
                <br />
                <span className="gradient-text">Tax Solutions</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                Empowering businesses with cutting-edge compliance strategies and intelligent tax optimization. Based in Ahmedabad, serving visionaries across India.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 h-14 text-lg font-bold rounded-2xl shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-all">
                    <Zap className="mr-2 w-5 h-5" />
                    Get Started
                  </Button>
                </Link>
                <a href={`tel:${businessInfo.phone}`}>
                  <Button size="lg" className="glass hover:bg-white/20 text-white border-2 border-emerald-400/50 px-8 h-14 text-lg font-semibold rounded-2xl transition-all">
                    <Phone className="mr-2 w-5 h-5" />
                    {businessInfo.phone}
                  </Button>
                </a>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>AI-Powered Insights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span>100% Compliance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right - Profile Photo with Futuristic Frame */}
            <div className="relative animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                {/* Glow Effects */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-[3rem] opacity-20 blur-2xl animate-pulse"></div>
                
                {/* Photo Container - Clean without overlay */}
                <div className="relative glass-card rounded-[3rem] p-2 backdrop-blur-2xl mb-6">
                  <div className="relative rounded-[2.5rem] overflow-hidden">
                    <img 
                      src={businessInfo.profileImage} 
                      alt={businessInfo.founderName}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Profile Info Badge - Below Photo */}
                <div className="glass-card rounded-2xl p-6 backdrop-blur-xl border border-white/20 mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{businessInfo.founderName}</h3>
                  <p className="text-emerald-300 font-semibold text-lg mb-2">{businessInfo.qualification}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {businessInfo.experience}+ years of transforming businesses through strategic tax advisory
                  </p>
                </div>

                {/* Stats Grid - Below Profile Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card rounded-2xl p-4 backdrop-blur-xl border border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">500+</div>
                        <div className="text-xs text-slate-300">Clients</div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card rounded-2xl p-4 backdrop-blur-xl border border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">100%</div>
                        <div className="text-xs text-slate-300">Success</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Overview - Futuristic Cards */}
      <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-4">
              Comprehensive <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Cutting-edge services designed for the modern business landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="group border-0 bg-white hover:bg-gradient-to-br hover:from-emerald-50 hover:to-cyan-50 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden card-3d">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/50 group-hover:shadow-emerald-500/70 group-hover:scale-110 transition-all duration-500">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/services">
                      <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0 font-bold group/btn">
                        Explore <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Modern Grid */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300">WHY CHOOSE US</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-4">
              Built for <span className="gradient-text">Tomorrow</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Experience the future of tax and compliance services today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <div 
                  key={item.id} 
                  className="glass-card p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 group backdrop-blur-xl border border-white/10"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/50 group-hover:shadow-emerald-500/70 group-hover:scale-110 transition-all">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials - Glassmorphism Style */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Star className="w-4 h-4" />
              <span>CLIENT STORIES</span>
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-4">
              Trusted by <span className="gradient-text">Innovators</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.slice(0, 4).map((testimonial) => (
              <Card key={testimonial.id} className="border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                      <p className="text-emerald-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Futuristic */}
      <section className="py-24 px-4 bg-gradient-to-br from-emerald-600 via-emerald-700 to-cyan-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Transform Your Business Compliance?
            </h2>
            <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
              Join 500+ forward-thinking businesses leveraging our expertise for seamless tax management
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-50 px-10 h-14 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all">
                  <Zap className="mr-2 w-5 h-5" />
                  Start Now
                </Button>
              </Link>
              <a href={`https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="glass hover:bg-white/20 border-2 border-white text-white px-10 h-14 text-lg font-bold rounded-2xl">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
