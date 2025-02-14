import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  if (isAuthPage) return null;

  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2024 AIDirectory. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 justify-center md:justify-start">
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
          <Link to="/affiliate" className="text-gray-600 hover:text-gray-900">Affiliate Program</Link>
        </div>
      </div>
    </footer>
  );
}
