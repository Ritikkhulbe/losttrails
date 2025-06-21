export interface Destination {
    id: number;
  title: string;
  image: string;
  location: string;
  description: string;
  category: string;
  link: string;
}

export const whatsappLinkJibhi = "https://wa.me/9910095505?text=Can%20I%20get%20more%20info%20on%20the%20%22Jibhi%20Experience%22?%20";
export const whatsappLinkSethan = "https://wa.me/9910095505?text=Can%20I%20get%20more%20info%20on%20the%20%22Sethan%20Experience%22?%20";
export const whatsappLinkShangarh = "https://wa.me/9910095505?text=Can%20I%20get%20more%20info%20on%20the%20%22Shangarh%20Experience%22?%20";
export const whatsappLinkCustom = "https://wa.me/9910095505?text=Can%20I%20get%20more%20info%20on%20the%20%22Custom%20Experience%22?%20";
export const whatsappLinkCorporate = "https://wa.me/9910095505?text=Can%20I%20get%20more%20info%20on%20the%20%22Corporate%20Experience%22?%20";
export const whatsappLinkLostTrails = "https://wa.me/9910095505?text=Can%20I%20get%20more%20info%20on%20the%20%22Lost%20Trails%20Journeys%22?%20";

export const destinations: Destination[] = [
  {
    id: 1,
    title: "Jibhi",
    location: "Himachal / June 2025",
    description:
      "Nestled in Himachal Pradesh's Tirthan Valley, is a haven for trekking enthusiasts. The region offers a variety of trails, from serene lakes to ancient forts, catering to both beginners and seasoned trekkers. Here are some notable treks",
    image:
      "/images/jibhi.webp",
    link: "/destinations/jibhi",
    category: "Mountains & Valleys",
  },
  {
    id: 2,
    title: "Sethan",
    location: "Himachal / July 2025",
    description:"A serene village located approximately 12 km from Manali in Himachal Pradesh, serves as a gateway to several captivating treks. Perched at an altitude of around 2,700 meters, it offers a tranquil environment ideal for both novice and seasoned trekkers. Here are some notable treks accessible from Sethan:",  
    image:
      "/images/sethan.jpg",
    link: "/destinations/sethan",
    category: "Mountains & Valleys",
  },
  {
    id: 3,
    title: "Shangarh",
    location: "Himachal / August 2025",
    description:
      "Beyond the tourist hotspots lie secluded islands with pristine beaches. Kayak through mangrove forests, dive in crystal-clear waters with vibrant marine life, and camp under the stars on uninhabited shores.",
    image:
      "/images/shangarh.jpg",
    link: "/destinations/shangarh",
    category: "Mountains & Valleys",
  },
]; 

// Get unique categories from destinations
export const categories = Array.from(new Set(destinations.map(dest => dest.category)));


