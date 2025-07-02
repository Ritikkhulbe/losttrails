"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { whatsappLinkSethan } from "@/constants/destinations";
import { useState } from "react";

export default function SethanDestination() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleWhatsAppClick = () => {
    window.open(whatsappLinkSethan, '_blank');
  };

  const galleryImages = [
    {
      src: "/images/sethan1.jpeg",
      alt: "Snow-capped peaks of Sethan",
      title: "Snow-Capped Peaks",
      description: "Experience the snow-capped peaks of Sethan"
    },
    {
      src: "/images/sethan2.jpeg",
      alt: "Peaceful Buddhist hamlet",
      title: "Buddhist Hamlet",
      description: "Peaceful beauty of Sethan"
    },
    {
      src: "/images/sethan3.jpeg",
      alt: "Camping under the stars",
      title: "Path to soul ",
      description: "Experience the starry nights at Sethan"
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
                  src="/images/sethan.jpg"
                  alt="Sethan - Himalayas"
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
                    Sethan – The Quiet Side of the Himalayas
                  </h1>
                  <p className="text-lg text-white/95 mb-6 drop-shadow-md leading-relaxed">
                    Perched above Manali, Sethan is a hidden gem that most travelers never reach — and that's what makes it so special. A peaceful Buddhist hamlet embraced by the Pir Panjal range, Sethan is where snow-capped silence, soulful music, and mountain culture come together in the most unexpected ways.
                  </p>
                  <p className="text-base text-white/90 mb-8 drop-shadow-md leading-relaxed">
                    Here, it's not about ticking off tourist spots — it's about living slower, feeling deeper, and dancing under the stars.
                  </p>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700 w-fit shadow-lg backdrop-blur-sm bg-opacity-90"
                  >
                    📱 Experience Sethan with Us
                  </Button>
                </div>
              </div>
            </div>

            {/* Desktop Hero - Side by Side */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Sethan – The Quiet Side of the Himalayas
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  Perched above Manali, Sethan is a hidden gem that most travelers never reach — and that's what makes it so special. A peaceful Buddhist hamlet embraced by the Pir Panjal range, Sethan is where snow-capped silence, soulful music, and mountain culture come together in the most unexpected ways.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  Here, it's not about ticking off tourist spots — it's about living slower, feeling deeper, and dancing under the stars.
                </p>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700"
                >
                  📱 Experience Sethan with Us
                </Button>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/sethan.jpg"
                  alt="Sethan - Himalayas"
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
                <span className="text-2xl">🎶</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">A Musical Affair</h3>
                  <p className="text-gray-400">Evening jams, bonfires, and intimate sessions that feel straight out of a dream</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">🧘</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Rich Local Culture</h3>
                  <p className="text-gray-400">Meet the Khampa tribe, experience their traditions, and stay like a local</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">🥾</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Beautiful Hidden Hikes</h3>
                  <p className="text-gray-400">Explore quiet trails surrounded by silence and snow</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">🏔️</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Hampta Pass Base Camp</h3>
                  <p className="text-gray-400">A stunning gateway trek that begins right from the village</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">🌌</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Camping Under the Stars</h3>
                  <p className="text-gray-400">Sleep in the lap of the mountains, far from the crowd and the noise</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg">
                <span className="text-2xl">❄️</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Winter Wonderland</h3>
                  <p className="text-gray-400">In snow season, the landscape transforms into a white, magical escape</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-background border rounded-lg md:col-span-2">
                <span className="text-2xl">🚫</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Less Crowded, More Soulful</h3>
                  <p className="text-gray-400">A true offbeat retreat where you can actually hear yourself think</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience Sethan</h2>
            
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
              <h2 className="text-3xl font-bold mb-4">Sethan isn't just a destination</h2>
              <p className="text-xl text-gray-400 mb-8">
                It's a pause. A melody. A mountain song waiting for you to hum along.
              </p>
              <div className="mb-8">
                <p className="text-lg text-gray-400 mb-4">📍 Want to experience Sethan with us?</p>
                <p className="text-lg text-gray-400">Reach out for the full itinerary and trip details.</p>
              </div>
              <p className="text-lg text-gray-400 mb-8 italic">
                Let this peaceful mountaintop be your next great escape.
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700"
              >
                📱 Start Your Sethan Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 