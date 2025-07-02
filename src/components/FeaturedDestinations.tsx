"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/constants";
import { useTheme } from "next-themes";

const FeaturedDestinations = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <section className="py-16 bg-background text-foreground transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            MOST EXTRAORDINARY EXPEDITIONS IN THE COUNTRY
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Each journey offers the same growth x adventure x connection, while
            the landscapes change
          </motion.p>
          <div className="mt-6">
            <p className="text-xl font-medium">
              We have Limited Invites as every experience is curated meticulously
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`location-card group overflow-hidden rounded-lg shadow-lg ${isDark ? "bg-gray-800" : "bg-white"}`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  className="location-image"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="location-overlay">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <p className="text-sm text-gray-200">{destination.location}</p>
                </div>
              </div>
              <div className={`p-5 ${isDark ? "bg-gray-800" : "bg-white"}`}>
                <p className={`${isDark ? "text-gray-200" : "text-gray-700"} mb-4`}>{destination.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={destination.link}>See Details</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/destinations">Explore All Destinations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
