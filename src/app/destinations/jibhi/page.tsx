"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { whatsappLinkJibhi } from "@/constants/destinations";
import { useState } from "react";

export default function JibhiDestination() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleWhatsAppClick = () => {
    window.open(whatsappLinkJibhi, '_blank');
  };

  const galleryImages = [
    {
      src: "/images/jibhi1.jpeg",
      alt: "Jibhi Sunrise",
      title: "Amazing Sunrise views",
      description: "Experience the sunrise at Jibhi"
    },
    {
      src: "/images/jibhi2.jpeg",
      alt: "Clear Sky and Mountains",
      title: "Clear Sky and Mountains",
      description: "Experience the clear sky and mountainss"
    },
    {
      src: "/images/jibhi3.jpeg",
      alt: "Jibhi Sunset",
      title: "Sunset at Jibhi",
      description: "Experience the sunset at Jibhi"
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
                  src="/images/jibhi.webp"
                  alt="Jibhi - Tirthan Valley"
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
                    Jibhi – Where Silence Feels Like Home
                  </h1>
                  <p className="text-lg text-white/95 mb-6 drop-shadow-md leading-relaxed">
                    Hidden deep in the Tirthan Valley, Jibhi is where nature slows everything down — in the best way. Surrounded by dense pine forests, glistening natural pools, and cozy wooden homes, it's a place that feels untouched, almost like a secret kept by the mountains.
                  </p>
                  <p className="text-base text-white/90 mb-8 drop-shadow-md leading-relaxed">
                    Whether you're chasing inspiration or just a break from the noise, Jibhi offers the perfect blend of calm and curiosity.
                  </p>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700 w-fit shadow-lg backdrop-blur-sm bg-opacity-90"
                  >
                    📱 Explore Jibhi with Us
                  </Button>
                </div>
              </div>
            </div>

            {/* Desktop Hero - Side by Side */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Jibhi – Where Silence Feels Like Home
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  Hidden deep in the Tirthan Valley, Jibhi is where nature slows everything down — in the best way. Surrounded by dense pine forests, glistening natural pools, and cozy wooden homes, it's a place that feels untouched, almost like a secret kept by the mountains.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  Whether you're chasing inspiration or just a break from the noise, Jibhi offers the perfect blend of calm and curiosity.
                </p>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700"
                >
                  📱 Explore Jibhi with Us
                </Button>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/jibhi.webp"
                  alt="Jibhi - Tirthan Valley"
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
                <span className="text-2xl">🌲</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Pine-covered trails</h3>
                  <p className="text-gray-400">Perfect for slow walks or quiet reflection</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">💧</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Crystal-clear pools</h3>
                  <p className="text-gray-400">And waterfalls that invite you to pause and soak it all in</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">🏞️</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Hikes to Raghupur Fort</h3>
                  <p className="text-gray-400">& Balu Nag Temple with breathtaking views along the way</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">🎨</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">A creative escape</h3>
                  <p className="text-gray-400">Ideal for painting, journaling, and immersive artistic workshops</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">☕</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cafes with character</h3>
                  <p className="text-gray-400">Where every corner feels like a postcard</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">🔥</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Bonfires & starry nights</h3>
                  <p className="text-gray-400">Music and magical evenings to close the day</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg md:col-span-2">
                <span className="text-2xl">🏡</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Handpicked homestays</h3>
                  <p className="text-gray-400">That offer warmth, comfort, and stories of the valley</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience Jibhi</h2>
            
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
              <h2 className="text-3xl font-bold mb-4">This isn't your typical tourist destination</h2>
              <p className="text-xl text-gray-400 mb-8">
                It's a canvas — and you're invited to paint your own journey.
              </p>
              <div className="mb-8">
                <p className="text-lg text-gray-400 mb-4">📍 Want to explore Jibhi with us?</p>
                <p className="text-lg text-gray-400">Reach out to get the full itinerary and trip details.</p>
              </div>
              <p className="text-lg text-gray-400 mb-8 italic">
                Let the mountains whisper your next story.
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700"
              >
                📱 Start Your Jibhi Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 