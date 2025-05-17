"use client";  
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { destinations, categories } from "@/constants/destinations";
import { useState } from "react";

export default function Destinations() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredDestinations = selectedCategory
    ? destinations.filter((destination) => destination.category === selectedCategory)
    : destinations;

  return (
    <main className="bg-background text-foreground transition-colors">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Destinations
            </h1>
            <p className="text-xl text-gray-400">
              Discover the lesser-known treasures of our country that we've carefully selected for your extraordinary adventures
            </p>
          </div>

          {/* Destination Categories */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                className="py-6 text-lg font-medium rounded-lg hover:bg-primary/10 hover:text-primary"
                onClick={() => setSelectedCategory(null)}
              >
                All Destinations
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="py-6 text-lg font-medium rounded-lg hover:bg-primary/10 hover:text-primary"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Destinations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.link}
                title={destination.title}
                image={destination.image}
                location={destination.location}
                description={destination.description}
                category={destination.category}
                link={destination.link}
              />
            ))}
          </div>

          {/* Map Section */}
          <div className="bg-background text-foreground transition-colors border-2 rounded-xl p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Exploring the Unexplored</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our destinations are carefully selected to showcase the incredible diversity of landscapes, cultures, and ecosystems that remain off the beaten tourist path.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  From the snow-capped peaks of the Himalayas to the crystal-clear waters of hidden beaches, from dense rainforests to arid deserts, we've mapped the extraordinary places that tell the authentic story of our country.
                </p>
                <p className="text-lg text-gray-700">
                  Each destination is chosen not only for its natural beauty but also for the meaningful connections it offers with local communities, wildlife, and age-old traditions.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                  alt="Map of India highlighting Lost Trails destinations"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="border-2 bg-primary/10 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated on New Destinations</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              We're constantly exploring and adding new destinations to our portfolio. Subscribe to our newsletter to be the first to know when we discover something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-12 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button className="h-12">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

// Destination Card Component
function DestinationCard({
  title,
  image,
  location,
  description,
  category,
  link,
}: {
  title: string;
  image: string;
  location: string;
  description: string;
  category: string;
  link: string;
}) {
  return (
    <div className="bg-background text-foreground border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-56">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <div className="flex items-center mb-4 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location}
        </div>
        <p className="text-gray-400 mb-6 flex-grow">{description}</p>
        <Button asChild variant="outline" className="mt-auto">
          <Link href={link}>Explore Destination</Link>
        </Button>
      </div>
    </div>
  );
}
