"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Tanishq Tiwari",
    title: "Software Engineer",
    quote:
      "I joined the Filmmaking Retreat in Himachal without knowing what to expect  and it turned out to be the most creatively fulfilling trip I've had. The group was small and everyone was so passionate. From brainstorming to shooting in the middle of pine forests, every day felt like a scene from a film. Legends of Lost Trails was such a fun and unexpected highlight. It felt like a close-knit film camp in the mountains.",
  },
  {
    id: 2,
    name: "Priyansh Goswami",
    title: "Filmmaker",
    quote:
      "What stood out for me was how immersive everything was. We weren't just handed cameras and asked to shoot  we were guided, challenged, and pushed to go deeper with our stories. The group dynamic was great and the hosts made sure no one felt left out. And yes, Legends of Lost Trails was a mad storytelling ride  probably my favourite part!",
  },
  {
    id: 3,
    name: "Harshul Thareja",
    title: "Marine Biologist",
    quote:
      "This retreat gave me the courage to start creating again. It wasn't just about film — it was about connection. Every activity helped break the ice and bring people together. Legends of Lost Trails was such a wholesome game, full of laughter and depth. So grateful to have found this space.",
  },
  {
    id: 4,
    name: "Gargi Singh",
    title: "Fashion Designer",
    quote:
      "The yoga retreat was exactly what I needed. A space to pause, reflect, and move with intention. The energy of the group was so grounding, and the hosts truly made everyone feel safe and welcome. Legends of Lost Trails turned into this magical evening where strangers became friends. I left feeling stronger  both physically and emotionally.",
  },
  {
    id: 5,
    name: "Dr. Vikram Singh",
    title: "Surgeon",
    quote:
      "It was a retreat that actually felt like a retreat. Mornings began with mindful movement and breathwork, and the rest of the day was a beautiful mix of introspection, laughter, and nature. The group size made it feel personal, not overwhelming. Legends of Lost Trails was the perfect mix of fun and vulnerability.",
  },
  {
    id: 6,
    name: "Shaesta Irshad",
    title: "Lawyer",
    quote:
      "What I loved most was the intention behind everything. Nothing felt rushed or forced. The yoga sessions, the mountain air, the safe conversations  it all flowed naturally. Legends of Lost Trails was such a unique way to open up and bond. I left with a full heart and quiet mind.",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(testimonials.length / 3) - 1 : prev - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  // Get testimonials for current slide (3 for desktop, 1 for mobile)
  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-20 bg-background text-foreground transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            WHAT OUR EXPLORERS SAY
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lost Trails has unlocked rare experiences, fostered lasting connections,
            and created memories that our adventurers cherish forever.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Desktop View - 3 testimonials */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-8">
              {getCurrentTestimonials().map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardContent className="p-8 relative">
                      <div className="absolute top-4 right-4 text-4xl text-gray-200 font-serif">"</div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-lg mb-1">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground font-medium">
                          {testimonial.title}
                        </p>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-base mt-4">
                        {testimonial.quote}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile View - 1 testimonial */}
          <div className="md:hidden">
            <div className="relative">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-4 right-4 text-4xl text-gray-200 font-serif">"</div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-1">{testimonials[currentSlide].name}</h4>
                      <p className="text-sm text-muted-foreground font-medium">
                        {testimonials[currentSlide].title}
                      </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base mt-4">
                      {testimonials[currentSlide].quote}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-black' : 'bg-black/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
