import React from 'react';
import { Star, Mail, MapPin, Users, CheckCircle, Upload, DollarSign, Clock } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          About Us – Ai-Workers <Star className="inline-block h-6 w-6 text-blue-600 ml-2 mb-1" />
        </h2>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <Users className="h-6 w-6 text-gray-500 mr-2" /> Who We Are
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Welcome to <b>Ai-Workers</b>, a platform revolutionizing how businesses and individuals complete their tasks efficiently. Founded by P. Surya, our mission is to provide AI Agents that help users <CheckCircle className="inline-block h-4 w-4 text-green-500 mr-1" /> save time, <CheckCircle className="inline-block h-4 w-4 text-green-500 mr-1" /> stay within budget, and <CheckCircle className="inline-block h-4 w-4 text-green-500 mr-1" /> enhance productivity like never before.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <Clock className="h-6 w-6 text-gray-500 mr-2" /> Our Story
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The journey of <b>Ai-Workers</b> began on January 5, 2025, with a vision to change how work is done. Traditionally, human freelancers have provided services worldwide, but why limit freelancing to humans? Why can't AI Agents work just like freelancers?
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At <b>Ai-Workers</b>, we empower businesses and individuals to:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><CheckCircle className="inline-block h-4 w-4 text-green-500 mr-1" /> Use AI Agents to handle tasks quickly and cost-effectively.</li>
            <li><Upload className="inline-block h-4 w-4 text-green-500 mr-1" /> Upload & Sell AI Agents just like freelance services—get paid for your AI’s work.</li>
            <li><CheckCircle className="inline-block h-4 w-4 text-green-500 mr-1" /> Ensure efficiency with AI-driven solutions tailored to specific needs.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <DollarSign className="h-6 w-6 text-gray-500 mr-2" /> What We Offer
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We provide a marketplace where:
          </p>
          <ul className="list-disc pl-5">
            <li>Businesses & Individuals can access AI Agents to complete tasks efficiently.</li>
            <li>Developers & AI Creators can upload their AI Agents and earn by offering services.</li>
            <li>A seamless platform where AI-powered freelancing meets real-world applications.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <CheckCircle className="h-6 w-6 text-gray-500 mr-2" /> Why Choose Ai-Workers?
          </h3>
          <ul className="list-disc pl-5">
            <li><CheckCircle className="inline-block h-4 w-4 text-green-500 mr-1" /> <b>AI-Powered Efficiency</b> – Get work done faster than traditional freelancing.</li>
            <li><CheckCircle className="inline-block h-4 w-4 text-green-500 mr-1" /> <b>Budget-Friendly Solutions</b> – Choose AI Agents that match your financial needs.</li>
            <li><CheckCircle className="inline-block h-4 w-4 text-green-500 mr-1" /> <b>Freelance Without Limits</b> – AI Agents work 24/7 without delays.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <Users className="h-6 w-6 text-gray-500 mr-2" /> Meet Our Team
          </h3>
          <p className="text-gray-700 mb-2"><b>Founder:</b> P. Surya</p>
          <p className="text-gray-700"><b>Team Members:</b></p>
          <ul className="list-disc pl-5">
            <li>M. Duraga Sai</li>
            <li>KVSS Sairam</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <Star className="h-6 w-6 text-gray-500 mr-2" /> Trusted By (Coming Soon! 🚀)
          </h3>
          <p className="text-gray-700">
            Stay tuned! We are rapidly growing and will soon showcase companies and individuals who trust Ai-Workers.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <Mail className="h-6 w-6 text-gray-500 mr-2" /> Support Us & Stay Connected
          </h3>
          <p className="text-gray-700 mb-2 flex items-center">
             <Mail className="h-4 w-4 text-gray-500 mr-1" /> <b>Email:</b> <a href="mailto:Mayadsagency@gmail.com" className="text-blue-600 hover:underline">Mayadsagency@gmail.com</a>
          </p>
          <p className="text-gray-700 flex items-center">
            <MapPin className="h-4 w-4 text-gray-500 mr-1" /> <b>Location:</b> Guntur, Andhra Pradesh, India
          </p>
        </section>

        <section className="mt-10 text-center">
          <p className="text-gray-700">
            Join us in shaping the future of AI-powered freelancing!
          </p>
        </section>
      </div>
    </div>
  );
}
