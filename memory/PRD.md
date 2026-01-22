# Product Requirements Document (PRD)
# Harsh R Shah and Associates - Professional CA Website

**Created:** January 22, 2025
**Last Updated:** January 22, 2025

---

## Original Problem Statement

Create a modern, fast, SEO-optimized professional website for a Chartered Accountant practice targeting individuals, SMEs, and startups in India. The website should be trust-building, conversion-optimized, and match $20,000+ agency-quality standards.

---

## Business Information

- **Firm Name:** Harsh R Shah and Associates
- **ICAI Member:** 170220
- **Experience:** 12+ Years
- **Location:** Ahmedabad, Gujarat
- **Phone:** +91-9510960227
- **Email:** contact@harshshah.ca
- **Office:** B-408, World Trade Tower, Behind Skoda Showroom, SG Highway, Ahmedabad - 380051

---

## User Personas

1. **Startup Founders**
   - Need business registration and compliance setup
   - First-time entrepreneurs seeking guidance
   - Looking for affordable, reliable professional services

2. **SME Business Owners**
   - Regular GST and tax compliance needs
   - Require audit services
   - Value timely, proactive service

3. **Individual Taxpayers**
   - Income tax filing requirements
   - Notice handling and representation
   - Seeking transparent, straightforward service

---

## Core Requirements (Static)

### Technical Requirements
- React frontend with modern UI/UX
- Mobile-first responsive design
- Fast loading performance
- SEO-optimized structure
- Clean, professional aesthetic

### Design Requirements
- Trust-building color palette (Deep Navy Blue + Emerald Green)
- Premium but approachable design
- Clear call-to-action buttons
- Sticky contact buttons (Call + WhatsApp)
- Professional typography
- Smooth animations and transitions

### Pages Required
1. Home - Hero, services overview, testimonials, CTA
2. About Us - Firm introduction, values, experience
3. Services - Detailed service listings
4. Why Choose Us - USPs and differentiators
5. Testimonials - Client feedback
6. FAQs - Common questions
7. Contact - Form, map, contact details

---

## What's Been Implemented ✅

### Phase 1: Frontend with Mock Data (January 22, 2025)

**Components Created:**
- Header with sticky navigation
- Footer with contact info and quick links
- StickyContact component (floating Call + WhatsApp buttons)

**Pages Implemented:**
- ✅ Home page with hero section, services cards, why choose us, testimonials, CTA
- ✅ About page with firm details, core values
- ✅ Services page with detailed service breakdown
- ✅ Why Choose Us page with detailed explanations
- ✅ Testimonials page with client reviews
- ✅ FAQs page with accordion UI
- ✅ Contact page with form, map, contact cards

**Design Features:**
- Professional color scheme (Navy Blue #0f172a + Emerald Green #059669)
- Shadcn UI components throughout
- Smooth hover animations
- Mobile-responsive design
- WhatsApp and phone CTAs
- Professional gradient backgrounds
- Card-based layouts
- Proper spacing and typography

**Mock Data:**
- All business information in mockData.js
- 6 service categories with features
- 6 why-choose-us points
- 4 client testimonials
- 8 FAQs
- Contact form (frontend validation only)

---

## Architecture

### Frontend Stack
- React 19.0.0
- React Router for navigation
- Shadcn UI components
- Tailwind CSS for styling
- Lucide React for icons
- Sonner for toast notifications

### Backend Stack (Not Yet Implemented)
- FastAPI
- MongoDB
- Planned for future phase

---

## Prioritized Backlog

### P0 Features (Must Have) - COMPLETED ✅
- [x] All 7 pages with complete content
- [x] Mobile-responsive design
- [x] Navigation and routing
- [x] Contact information display
- [x] Sticky contact buttons
- [x] Professional design matching requirements

### P1 Features (Should Have) - Future Phase
- [ ] Backend API integration
- [ ] Contact form submission to database
- [ ] Email notifications for inquiries
- [ ] Admin dashboard for managing content
- [ ] Blog section for articles
- [ ] Client portal (login for existing clients)

### P2 Features (Nice to Have) - Future Phase
- [ ] Online appointment booking with calendar
- [ ] Live chat integration
- [ ] Multi-language support (Hindi/Gujarati)
- [ ] Document upload for clients
- [ ] Service packages with pricing calculator
- [ ] Newsletter subscription
- [ ] SEO meta tags optimization
- [ ] Google Analytics integration

---

## Next Tasks

1. **User Feedback** - Review website and provide feedback on design/content
2. **Backend Development** - Implement contact form submission, database storage
3. **Email Integration** - Set up automated email notifications
4. **SEO Optimization** - Add meta tags, schema markup, sitemap
5. **Performance Optimization** - Image optimization, lazy loading
6. **Blog Section** - Add blog functionality for content marketing

---

## Notes

- Website is fully functional as a frontend-only application
- Contact form has client-side validation but needs backend integration
- All content is production-ready but can be customized
- Google Maps embed needs real coordinates (currently placeholder)
- Email address is placeholder (contact@harshshah.ca)

