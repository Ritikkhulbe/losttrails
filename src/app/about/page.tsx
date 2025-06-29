import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-background text-foreground transition-colors">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Lost Trails
            </h1>
            <p className="text-xl text-gray-400">
              Venturing beyond the known, discovering the untold stories of our beautiful country
            </p>
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-3">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-gray-400 mb-4">
                Lost Trails was born from a simple realization: some of the most extraordinary places in our country remain hidden from the common traveler's path.
              </p>
              <p className="text-lg text-gray-400 mb-4">
                Founded by a group of passionate explorers who spent years documenting less-traveled regions, we made it our mission to open these experiences to those seeking authentic connections with nature, culture, and themselves.
              </p>
              <p className="text-lg text-gray-400">
                Since 2018, we've been carefully curating small-group expeditions that balance adventure with sustainability, immersion with respect, and discovery with preservation.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1527942222795-4c32a0836ff0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb"
                alt="Explorers sitting around a campfire"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Our Values */}
          <div className="bg-background text-foreground transition-colors py-16 px-8 rounded-xl ">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-primary">Responsible Exploration</h3>
                <p className="text-gray-400">
                  We travel with minimal environmental impact, support local conservation efforts, and ensure our presence benefits the regions we visit.
                </p>
              </div>
              <div className="border p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-primary">Authentic Immersion</h3>
                <p className="text-gray-400">
                  We forge genuine connections with local communities, respecting their customs and traditions while creating opportunities for meaningful cultural exchange.
                </p>
              </div>
              <div className="border p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-primary">Transformative Experiences</h3>
                <p className="text-gray-400">
                  We believe that venturing into the unknown isn't just about seeing new places—it's about discovering new perspectives and returning changed.
                </p>
              </div>
            </div>
          </div>

          {/* The Team */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/people/lakshya.jpeg"
                    alt="Lakshya Singh"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-bold">Lakshya Singh</h3>
                <p className="text-gray-600">On ground alchemist</p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/people/aditya.jpeg"
                    alt="Aditya Sharma"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-bold">Aditya Sharma</h3>
                <p className="text-gray-600">On ground alchemist</p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/people/yashshankar.jpeg"
                    alt="Yash Shankar"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-bold">Yash Shankar</h3>
                <p className="text-gray-600">Cheif Hustle Officer</p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/people/Ritik.jpeg"
                    alt="Ritik Khulbe"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-bold">Ritik Khulbe</h3>
                <p className="text-gray-600">Head of getting heads</p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/people/Vedita.jpeg"
                    alt="Vedita Saraswat"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-bold">Vedita Saraswat</h3>
                <p className="text-gray-600">Head of all thins cool</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border-2 bg-primary/10 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Adventures?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Become part of a community that's redefining exploration in our country. Request an invite to one of our upcoming expeditions.
            </p>
            <Button asChild size="lg">
              <Link href="/request-invite">Request Your Invite</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
