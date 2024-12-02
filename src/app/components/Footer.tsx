"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm text-gray-600">
              At <strong>NADEEM<span className="text-primary">SONS</span></strong>, we provide the finest products, from accessories to birds. Committed to quality and customer satisfaction.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-700 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Accessories" className="text-sm text-gray-700 hover:text-primary">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/Foods" className="text-sm text-gray-700 hover:text-primary">
                  Foods
                </Link>
              </li>
              <li>
                <Link href="/Birds" className="text-sm text-gray-700 hover:text-primary">
                  Birds
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="https://facebook.com" target="_blank" className="text-gray-700 hover:text-primary">
                <Facebook size={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-gray-700 hover:text-primary">
                <Twitter size={24} />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-gray-700 hover:text-primary">
                <Instagram size={24} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-gray-700 hover:text-primary">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-600">
              <strong>Address:</strong> 123 Main Street, Orangi Town, Karachi, Pakistan
            </p>
            <p className="text-sm text-gray-600">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@nadeemsons.com"
                className="text-primary hover:underline"
              >
                info@nadeemsons.com
              </a>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Phone:</strong>{" "}
              <a href="tel:+923001234567" className="text-primary hover:underline">
              +92 304 8117833
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; 2024 NADEEM<span className="text-primary">SONS</span>. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-gray-700 hover:text-primary">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-sm text-gray-700 hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;