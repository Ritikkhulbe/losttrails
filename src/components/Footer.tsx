"use client";

import Link from "next/link";
import { destinations, whatsappLinkLostTrails } from "@/constants/destinations";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground transition-colors border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Lost Trails</h3>
            <p className="text-gray-400">
              Discover the unexplored corners of India with us.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/request-invite"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Request Invite
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              {destinations.map((destination) => (
                <li key={destination.id}>
                  <Link
                    href={destination.link}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {destination.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@losttrails.in"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  business.losttrails@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919910095505"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 99100 95505
                </a>
              </li>
              <li className="mt-4">
                <Link
                  href={whatsappLinkLostTrails}
                  className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
                >
                  WhatsApp Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lost Trails. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
