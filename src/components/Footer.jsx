// Footer.js
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              We are a leading e-commerce platform providing the best products
              at unbeatable prices. Shop with us for a seamless experience!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/" className="hover:text-green-500 transition">Home</a></li>
              <li><a href="/shop" className="hover:text-green-500 transition">Shop</a></li>
              <li><a href="/about" className="hover:text-green-500 transition">About</a></li>
              <li><a href="/contact" className="hover:text-green-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/faq" className="hover:text-green-500 transition">FAQ</a></li>
              <li><a href="/returns" className="hover:text-green-500 transition">Returns</a></li>
              <li><a href="/shipping" className="hover:text-green-500 transition">Shipping</a></li>
              <li><a href="/terms" className="hover:text-green-500 transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-l-md focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-green-500 px-4 py-2 rounded-r-md hover:bg-green-600 transition"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-green-500 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-green-500 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-green-500 transition"><FaInstagram /></a>
              <a href="#" className="hover:text-green-500 transition"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Your E-Commerce Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
