import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Contact Us
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We'd love to hear from you! For any inquiries, support requests, or feedback, please reach out to us using the contact information below.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <Mail className="h-6 w-6 text-gray-500 mr-2" />
            <a href="mailto:Mayadsagency@gmail.com" className="text-blue-600 hover:underline text-lg">
              Mayadsagency@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center">
            <MapPin className="h-6 w-6 text-gray-500 mr-2" />
            <p className="text-gray-700 text-lg">
              Guntur, Andhra Pradesh, India
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm text-gray-500">
            We aim to respond to all inquiries within 24-48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
