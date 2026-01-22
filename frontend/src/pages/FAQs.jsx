import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { faqs } from '../mockData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const FAQs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-slate-600">
              Find answers to common questions about our services and processes
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={`item-${faq.id}`}
                className="bg-slate-50 rounded-xl border border-slate-200 px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Still Have Questions?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help. Get in touch and we'll respond promptly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                  Contact Us
                </Button>
              </Link>
              <a href="tel:+91-9510960227">
                <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8">
                  Call +91-9510960227
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Helpful Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/services" className="block">
              <div className="bg-slate-50 hover:bg-emerald-50 p-6 rounded-xl transition-colors border border-slate-200 hover:border-emerald-300">
                <h3 className="font-bold text-slate-900 mb-2">Our Services</h3>
                <p className="text-slate-600 text-sm">Explore our complete range of tax and compliance services</p>
              </div>
            </Link>

            <Link to="/why-choose-us" className="block">
              <div className="bg-slate-50 hover:bg-emerald-50 p-6 rounded-xl transition-colors border border-slate-200 hover:border-emerald-300">
                <h3 className="font-bold text-slate-900 mb-2">Why Choose Us</h3>
                <p className="text-slate-600 text-sm">Learn what makes us different from other service providers</p>
              </div>
            </Link>

            <Link to="/testimonials" className="block">
              <div className="bg-slate-50 hover:bg-emerald-50 p-6 rounded-xl transition-colors border border-slate-200 hover:border-emerald-300">
                <h3 className="font-bold text-slate-900 mb-2">Testimonials</h3>
                <p className="text-slate-600 text-sm">Read success stories from our satisfied clients</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
