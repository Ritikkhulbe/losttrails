"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { whatsappLinkShangarh } from "@/constants/destinations";
import { useState } from "react";

export default function ShangarhDestination() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleWhatsAppClick = () => {
    window.open(whatsappLinkShangarh, '_blank');
  };

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Shangarh meadows",
      title: "Vast Meadows",
      description: "Nature's amphitheater in the mountains"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Hidden forest trails",
      title: "Forest Trails",
      description: "Winding paths through pine groves"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Cozy mountain stays",
      title: "Mountain Stays",
      description: "Warm wooden homes with stunning views"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <main className="bg-background text-foreground transition-colors">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-6xl mx-auto mb-16">
            {/* Mobile Hero - Text over Image */}
            <div className="lg:hidden">
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/images/shangarh.jpg"
                  alt="Shangarh - Sainj Valley"
                  fill
                  style={{ objectFit: "cover" }}
                  className="opacity-70"
                />
                {/* Gradient Overlay for Better Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>
                {/* Additional Bottom Gradient for Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col justify-center p-6 z-10">
                  <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
                    Shangarh – Meadows, Myths & Mountains
                  </h1>
                  <p className="text-lg text-white/95 mb-6 drop-shadow-md leading-relaxed">
                    Tucked deep in the Sainj Valley, Shangarh feels like a poem the Himalayas wrote in secret. Known for its vast, untouched meadows and quiet charm, this village is the kind of place that makes you slow down, breathe deeper, and wonder why you didn't come here sooner.
                  </p>
                  <p className="text-base text-white/90 mb-8 drop-shadow-md leading-relaxed">
                    With postcard views, hidden trails, and stories in the silence, Shangarh is more than peaceful — it's sacred.
                  </p>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700 w-fit shadow-lg backdrop-blur-sm bg-opacity-90"
                  >
                    📱 Discover Shangarh with Us
                  </Button>
                </div>
              </div>
            </div>

            {/* Desktop Hero - Side by Side */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Shangarh – Meadows, Myths & Mountains
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  Tucked deep in the Sainj Valley, Shangarh feels like a poem the Himalayas wrote in secret. Known for its vast, untouched meadows and quiet charm, this village is the kind of place that makes you slow down, breathe deeper, and wonder why you didn't come here sooner.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  With postcard views, hidden trails, and stories in the silence, Shangarh is more than peaceful — it's sacred.
                </p>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700"
                >
                  📱 Discover Shangarh with Us
                </Button>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/shangarh.jpg"
                  alt="Shangarh - Sainj Valley"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* What to Expect Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">What to expect:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">🌿</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Massive Open Meadows</h3>
                  <p className="text-gray-400">The iconic Shangarh meadow is nature's amphitheater, perfect for morning walks or simply lying under the sky</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">💧</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Waterfalls & Streams</h3>
                  <p className="text-gray-400">Secret spots where time feels suspended</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">🥾</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Hidden Forest Trails</h3>
                  <p className="text-gray-400">Winding paths that lead to pine groves, wooden temples, and pure stillness</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">🏞️</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Trek to Deori Lake</h3>
                  <p className="text-gray-400">A quiet, offbeat trail through the forest ending at a serene high-altitude lake</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">🌄</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Even More Meadows</h3>
                  <p className="text-gray-400">Every corner in Shangarh seems to open into another field of calm</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">🛏️</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cozy Mountain Stays</h3>
                  <p className="text-gray-400">Warm wooden homes with a view that makes you forget your phone</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">☕</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cafe Hopping</h3>
                  <p className="text-gray-400">Intimate local cafes tucked around corners, ideal for slow mornings and deep conversations</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">🕊️</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Peace, Like Nowhere Else</h3>
                  <p className="text-gray-400">Minimal crowds, no honking, just the sound of wind in the trees</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience Shangarh</h2>
            
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src={galleryImages[currentImage].src}
                  alt={galleryImages[currentImage].alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {galleryImages[currentImage].title}
                  </h3>
                  <p className="text-white/90 text-lg">
                    {galleryImages[currentImage].description}
                  </p>
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImage ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  {/* Text Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white text-xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.title}
                    </h3>
                    <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary/10 border-2 rounded-xl p-12">
              <h2 className="text-3xl font-bold mb-4">Shangarh is not a place you visit</h2>
              <p className="text-xl text-gray-400 mb-8">
                It's a place you feel. A sanctuary for wanderers, artists, and anyone tired of the noise.
              </p>
              <div className="mb-8">
                <p className="text-lg text-gray-400 mb-4">📍 Want to discover Shangarh with us?</p>
                <p className="text-lg text-gray-400">Contact us for the complete itinerary and details.</p>
              </div>
              <p className="text-lg text-gray-400 mb-8 italic">
                Let this meadow in the mountains be your next story.
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700"
              >
                📱 Start Your Shangarh Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 