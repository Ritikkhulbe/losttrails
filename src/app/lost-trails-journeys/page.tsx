"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { whatsappLinkLostTrails } from "@/constants/destinations";
import { useState } from "react";

export default function LostTrailsJourneys() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleWhatsAppClick = () => {
    window.open(whatsappLinkLostTrails, '_blank');
  };

  const handleDownloadPDF = (journeyType: string) => {
    const pdfPath = `/pdfs/${journeyType.toLowerCase().replace(/\s+/g, '-')}.pdf`;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${journeyType}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const journeyImages = [
    {
      src: "/images/filmmaking.jpeg",
      alt: "Filmmaking bootcamp in nature",
      title: "Filmmaking Bootcamp",
      description: "Capture stories in the wilderness"
    },
    {
      src: "/images/yoga.jpeg",
      alt: "Pathways to soul journey",
      title: "Pathways to Soul",
      description: "Inner exploration in nature's embrace"
    },
    {
      src: "/images/socialmedia.jpeg",
      alt: "Social media detox retreat",
      title: "Social Media Detox",
      description: "Disconnect to reconnect with yourself"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % journeyImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + journeyImages.length) % journeyImages.length);
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
              <div className="relative h-[700px] rounded-lg overflow-hidden">
                <Image
                  src="/images/cover.png"
                  alt="Lost Trails Journeys"
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
                    Lost Trails Journeys
                  </h1>
                  <p className="text-lg text-white/95 mb-6 drop-shadow-md leading-relaxed">
                    Curated journeys to the most breathtaking unexplored places. Experience transformative adventures that go beyond typical travel — from filmmaking bootcamps in the wilderness to soul-searching retreats in the mountains.
                  </p>
                  <p className="text-base text-white/90 mb-8 drop-shadow-md leading-relaxed">
                    Whether you're seeking creative inspiration, spiritual growth, or a digital detox, our journeys are designed to reconnect you with nature and yourself.
                  </p>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700 w-fit shadow-lg backdrop-blur-sm bg-opacity-90"
                  >
                    📱 Explore Our Journeys
                  </Button>
                </div>
              </div>
            </div>

            {/* Desktop Hero - Side by Side */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  Lost Trails Journeys
                </h1>
                <p className="text-lg text-gray-400 mb-8">
                  Curated journeys to the most breathtaking unexplored places. Experience transformative adventures that go beyond typical travel — from filmmaking bootcamps in the wilderness to soul-searching retreats in the mountains.
                </p>
                <p className="text-base text-gray-400 mb-8">
                  Whether you're seeking creative inspiration, spiritual growth, or a digital detox, our journeys are designed to reconnect you with nature and yourself.
                </p>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700"
                >
                  📱 Explore Our Journeys
                </Button>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/cover.png"
                  alt="Lost Trails Journeys"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Journey Sections - One after another */}
          <div className="max-w-4xl mx-auto mb-16 space-y-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Transformative Journeys</h2>
            
            {/* Filmmaking Bootcamp */}
            <div className="bg-background border rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src="/images/filmmaking.jpeg"
                    alt="Filmmaking Bootcamp"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Filmmaking Bootcamp</h3>
                  <p className="text-gray-400 mb-6">
                    Immerse yourself in the art of storytelling through filmmaking in the heart of nature. Learn cinematography, editing, and narrative techniques while capturing the raw beauty of unexplored landscapes.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2 mb-6">
                    <li>• Professional filmmaking workshops</li>
                    <li>• Hands-on shooting in pristine locations</li>
                    <li>• Post-production and editing sessions</li>
                    <li>• Portfolio development and feedback</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={() => handleDownloadPDF("filmmaking")}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      📄 Download Complete Info
                    </Button>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      📱 Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pathways to Soul */}
            <div className="bg-background border rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full lg:order-2">
                  <Image
                    src="/images/yoga.jpeg"
                    alt="Pathways to Soul"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:order-1">
                  <h3 className="text-2xl font-bold mb-4">Pathways to Soul</h3>
                  <p className="text-gray-400 mb-6">
                    Embark on a spiritual journey of self-discovery in the serene mountains. Through meditation, yoga, and mindful practices, reconnect with your inner self and find clarity in nature's embrace.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2 mb-6">
                    <li>• Guided meditation and yoga sessions</li>
                    <li>• Mindfulness workshops in nature</li>
                    <li>• Spiritual counseling and reflection</li>
                    <li>• Sacred mountain rituals and ceremonies</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={() => handleDownloadPDF("shojalosttrails")}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      📄 Download Complete Info
                    </Button>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      📱 Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Detox */}
            <div className="bg-background border rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src="/images/socialmedia.jpeg"
                    alt="Social Media Detox"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Social Media Detox</h3>
                  <p className="text-gray-400 mb-6">
                    Disconnect from the digital world and reconnect with the real world. Experience the freedom of being present in nature, away from screens and social media distractions.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2 mb-6">
                    <li>• Digital detox workshops and guidance</li>
                    <li>• Nature immersion activities</li>
                    <li>• Mindfulness and presence practices</li>
                    <li>• Healthy digital habits formation</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={() => handleDownloadPDF("socialmediadetox")}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      📄 Download Complete Info
                    </Button>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      📱 Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience Our Journeys</h2>
            
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src={journeyImages[currentImage].src}
                  alt={journeyImages[currentImage].alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {journeyImages[currentImage].title}
                  </h3>
                  <p className="text-white/90 text-lg">
                    {journeyImages[currentImage].description}
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
                  {journeyImages.map((_, index) => (
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
              {journeyImages.map((image, index) => (
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
          <div className="max-w-6xl mx-auto text-center">
            <div className="bg-primary/10 border-2 rounded-xl p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Each journey is carefully crafted to provide you with a unique experience that goes beyond typical travel. Whether you're seeking creative inspiration, spiritual growth, or a digital detox, we have the perfect journey for you.
              </p>
              <div className="mb-8">
                <p className="text-lg text-gray-400 mb-4">📍 Want to learn more about our journeys?</p>
                <p className="text-lg text-gray-400">Contact us for detailed itineraries, dates, and pricing.</p>
              </div>
              <p className="text-lg text-gray-400 mb-8 italic">
                Your next great adventure awaits.
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700 text-wrap h-auto"
              >
                📱 Start Your Journey Today
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 