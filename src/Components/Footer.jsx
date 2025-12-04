import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-green-50 dark:bg-green-900/20 py-10 border-t border-green-200 dark:border-green-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo / brand */}
          <div className="space-y-3 max-w-xs">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍃</span>
              <span className="text-xl font-bold text-green-700 dark:text-green-300">GreenNest</span>
            </div>
            <p className="text-sm text-base-content/70">
              Discover, learn and care for indoor plants with curated collections and expert tips.
            </p>
          </div>

          {/* Main links */}
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-base-content hover:text-green-600 dark:hover:text-green-400 hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/plants" className="text-base-content hover:text-green-600 dark:hover:text-green-400 hover:underline transition-colors">
                  All Items
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-base-content hover:text-green-600 dark:hover:text-green-400 hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-base-content hover:text-green-600 dark:hover:text-green-400 hover:underline transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / social */}
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Connect</h3>
            <p className="text-sm text-base-content/70 mb-3">Follow us on social media</p>
            <div className="flex gap-4 text-2xl mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <p className="text-sm text-base-content/70">
              Email: <span className="font-medium">support@greennest.com</span>
            </p>
          </div>
        </div>

        <div className="border-t border-green-300 dark:border-green-700 my-8"></div>

        <div className="text-center text-sm text-base-content">
          © 2025 <span className="font-semibold text-green-600 dark:text-green-400">GreenNest</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;