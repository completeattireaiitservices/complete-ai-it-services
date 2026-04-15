import React from 'react';
import Head from 'next/head';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Head>
        <title>Complete AI IT Services | Intelligent Automation</title>
        <meta name="description" content="AI Integration Architecture and Automation Solutions for Small & Medium Businesses." />
      </Head>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white shadow-sm">
        <div className="text-2xl font-bold text-blue-900">Complete AI IT Services</div>
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#contact" className="px-5 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">Book a Consultation</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-8 py-20 text-center bg-gradient-to-b from-white to-slate-50">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900">
          Reclaim <span className="text-blue-700">10+ Hours</span> Every Week
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10">
          We architect custom AI engines that eliminate manual work, automate your inbox, and grow your brand on autopilot.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="#contact" className="px-8 py-4 bg-blue-900 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-blue-800 transition">Get My Free AI Audit</a>
          <a href="#services" className="px-8 py-4 bg-white border-2 border-slate-200 text-lg font-bold rounded-xl hover:bg-slate-50 transition">View Solutions</a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="px-8 py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">The Digital Workforce Suite</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "AI Knowledge Assistant", desc: "A 24/7 RAG-based chatbot that knows your PDFs and Airtable like an expert.", icon: "🤖" },
            { title: "Autonomous Content Engine", desc: "AI-driven SEO articles and branded visuals published directly to your site.", icon: "✍️" },
            { title: "Gmail AI Auto-Responder", desc: "Intelligent drafts for every incoming email based on your company knowledge.", icon: "📧" }
          ].map((service, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-8 py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Flexible AI Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Starter */}
            <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <div className="text-4xl font-bold mb-6">$2,000<span className="text-lg font-normal text-slate-400">/mo</span></div>
              <ul className="space-y-4 text-slate-300 mb-8">
                <li>✓ 1 Core AI Automation</li>
                <li>✓ Weekly Health Checks</li>
                <li>✓ Email Support</li>
              </ul>
              <button className="w-full py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition">Get Started</button>
            </div>

            {/* Growth - Featured */}
            <div className="p-8 bg-blue-900 rounded-2xl border-2 border-blue-400 transform scale-105">
              <h3 className="text-xl font-bold mb-2">Growth</h3>
              <div className="text-4xl font-bold mb-6">$5,000<span className="text-lg font-normal text-blue-200">/mo</span></div>
              <ul className="space-y-4 text-blue-100 mb-8">
                <li>✓ 3 Core AI Automations</li>
                <li>✓ Bi-Weekly QA Audits</li>
                <li>✓ Priority Integration Support</li>
              </ul>
              <button className="w-full py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition">Most Popular</button>
            </div>

            {/* Enterprise */}
            <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-6">Custom</div>
              <ul className="space-y-4 text-slate-300 mb-8">
                <li>✓ Full Suite Automation</li>
                <li>✓ Dedicated AI Architect</li>
                <li>✓ Custom Python Workflows</li>
              </ul>
              <button className="w-full py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition">Contact Us</button>
            </div>

          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="contact" className="py-24 px-8 text-center bg-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Automate?</h2>
        <p className="text-xl text-slate-600 mb-10">Book your free 30-minute AI Strategy Audit today.</p>
        <button className="px-10 py-5 bg-blue-900 text-white text-xl font-bold rounded-2xl shadow-xl hover:bg-blue-800 transition">
          Schedule My Call
        </button>
        <p className="mt-12 text-slate-400">© 2026 Complete AI IT Services | Pleasanton, CA</p>
      </footer>
    </div>
  );
}