import heroImg from "@/assets/hero-indonesia.jpg";
import uluwatuImg from "@/assets/uluwatu.jpg";
import nusaImg from "@/assets/nusa-lembongan.jpg";
import giliImg from "@/assets/gili-t.jpg";
import kutaImg from "@/assets/kuta-lombok.jpg";
import vibeBoatPartyImg from "@/assets/vibe-boatparty.jpg";
import vibeMantarayImg from "@/assets/vibe-mantaray.jpg";
import vibeSunsetImg from "@/assets/vibe-sunset.jpg";
import logoImg from "@/assets/mad-monkey-logo.png";

export interface TripConfig {
  creator: {
    name: string;
    instagram: string;
    instagramUrl: string;
    tiktok?: string;
    tiktokUrl?: string;
  };
  poweredBy: {
    name: string;
    logo: string;
  };
  trip: {
    title: string;
    highlightColor: "red" | "teal" | "yellow" | "black";
    dates: string;
    durationDays: number;
    locationCount: number;
    locationLabel: string;
    heroImage: string;
  };
  stripeBookingUrl: string;
  spots: {
    total: number;
    remainingText: string;
  };
  pricing: {
    currency: string;
    total: number;
    deposit: number;
    instalments: { amount: number; due: string }[];
    depositDeadline: string;
    minTravellers: number;
  };
  locations: {
    name: string;
    daysLabel: string;
    duration: string;
    image: string;
    description: string;
    highlights: string[];
  }[];
  included: {
    icon: "bed" | "bus" | "utensils";
    title: string;
    items: string[];
  }[];
  notIncluded: {
    title: string;
    description: string;
  }[];
  whoItsFor: string[];
  bookingSteps: {
    title: string;
    description?: string;
    rows?: { label: string; amount: string; due: string }[];
    footer?: string;
  }[];
  faq: { question: string; answer: string }[];
  vibeGallery: {
    image: string;
    alt: string;
  }[];
  footer: {
    copyright: string;
  };
}

export const tripConfig: TripConfig = {
  creator: {
    name: "VINCENZO",
    instagram: "@vncdeleo",
    instagramUrl: "https://instagram.com/vncdeleo",
    tiktok: "@vncdeleo",
    tiktokUrl: "https://tiktok.com/@vncdeleo",
  },
  poweredBy: {
    name: "Mad Monkey",
    logo: logoImg,
  },
  trip: {
    title: "Indonesia Takeover",
    highlightColor: "red",
    dates: "JUL 5 - JUL 19",
    durationDays: 15,
    locationCount: 4,
    locationLabel: "across Indonesia",
    heroImage: heroImg,
  },
  stripeBookingUrl: "https://buy.stripe.com/aFaeVc2A38ruaik85ke7t20",
  spots: {
    total: 12,
    remainingText: "ONLY 12 SPOTS LEFT!",
  },
  pricing: {
    currency: "£",
    total: 550,
    deposit: 182,
    instalments: [
      { amount: 182, due: "21/06" },
      { amount: 182, due: "28/06" },
    ],
    depositDeadline: "07/06",
    minTravellers: 12,
  },
  locations: [
    {
      name: "Uluwatu",
      daysLabel: "Days 1-4",
      duration: "4 Days (Jul 5-8)",
      image: uluwatuImg,
      description:
        "Kick off in Uluwatu — cliffside sunsets, surf lessons, sunrise volcano treks, and live DJ nights at Mad Monkey.",
      highlights: [
        "Day 1 (05/07) — Sun: Arrive at Denpasar (DPS) Airport. Transfer to Mad Monkey Uluwatu. Welcome Sunset session at Panorama Point Uluwatu (5PM-7:30PM).",
        "Day 2 (06/07) — Mon: Surf Lesson (9AM-11AM) + relaxing evening at the hostel.",
        "Day 3 (07/07) — Tue: Mt Batur Sunrise Trekking (1:30AM-11AM). Recharge with Mad Monkey sauna, hot tub and ice baths.",
        "Day 4 (08/07) — Wed: Live DJ + Free Flow (8PM-11PM).",
      ],
    },
    {
      name: "Nusa Lembongan",
      daysLabel: "Days 5-7",
      duration: "3 Days (Jul 9-11)",
      image: nusaImg,
      description:
        "Island life on Nusa Lembongan — fast boats, Nusa Penida island hopping, pool parties, and unlimited BBQ and drinks.",
      highlights: [
        "Day 5 (09/07) — Thur: Taxi to Sanur, then 30-min fast boat to Mad Monkey Nusa Lembongan. Enjoy ice baths, saunas, gym and the luxury pool.",
        "Day 6 (10/07) — Fri: Island Hopping around Nusa Penida (8:30AM-5PM). Mad Monkey Pool Party (6PM-10PM).",
      ],
    },
    {
      name: "Gili Trawangan",
      daysLabel: "Days 7-9",
      duration: "3 Days (Jul 11-13)",
      image: giliImg,
      description:
        "Crystal-clear waters, snorkelling with turtles, beach volleyball, and a mid-trip free day to explore Gili T your way.",
      highlights: [
        "Day 7 (11/07) — Sat: Early fast boat to Gili Trawangan. Mad Monkey Boat Party (2PM-6PM). Unlimited BBQ and drinks back at MM.",
        "Day 8 (12/07) — Sun: Monkey Sea Monkey Do snorkelling tour (10:30AM-4PM). Beach Volleyball Tournament + Live DJ (3PM-7PM).",
        "Day 9 (13/07) — Mon: Mid-trip free day to explore Gili T.",
      ],
    },
    {
      name: "Kuta Lombok",
      daysLabel: "Days 10-15",
      duration: "6 Days (Jul 14-19)",
      image: kutaImg,
      description:
        "Wind it down in Kuta Lombok — waterfall tours, surf lessons, BBQs, free flow, and a slow recovery before flying home.",
      highlights: [
        "Day 10 (14/07) — Tue: Short boat to Lombok mainland, then shuttle to Mad Monkey Kuta Lombok.",
        "Day 11 (15/07) — Wed: Lombok Signature Waterfall Tour (10AM-5PM).",
        "Day 12 (16/07) — Thur: Relax and explore Kuta.",
        "Day 13 (17/07) — Fri: Surf Lesson (9AM-12PM).",
        "Day 14 (18/07) — Sat: Surf Lesson (9AM-12PM) + BBQ & Free Flow.",
        "Day 15 (19/07) — Sun: Recovery breakfast and 30-min shuttle to Lombok Airport (LOP).",
      ],
    },
  ],
  included: [
    {
      icon: "bed",
      title: "Stays",
      items: [
        "Mixed or Female shared dorms",
        "Mad Monkey hostels throughout",
        "Uluwatu, Nusa Lembongan, Gili T & Kuta Lombok",
      ],
    },
    {
      icon: "bus",
      title: "Transport",
      items: [
        "All internal transport",
        "Fast boats between islands",
        "Shuttle to Lombok Airport (LOP)",
        "Does NOT include international flights",
      ],
    },
    {
      icon: "utensils",
      title: "Tours & Extras",
      items: [
        "Welcome Sunset session at Panorama Point",
        "Mt Batur Sunrise Trek",
        "Surf lessons in Uluwatu & Kuta Lombok",
        "Nusa Penida island hopping",
        "Mad Monkey pool & boat parties",
        "Monkey Sea Monkey Do snorkelling tour",
        "Beach volleyball tournament + Live DJ",
        "Lombok Signature Waterfall Tour",
        "Unlimited BBQ & Free Flow nights",
        "Sauna, hot tub & ice bath access",
        "Group leader in every location",
        "WhatsApp support group",
      ],
    },
  ],
  notIncluded: [
    { title: "International Flights", description: "Flights to and from Indonesia" },
    { title: "Personal Spend", description: "Meals, drinks, and optional activities not listed in the itinerary" },
    { title: "Visas", description: "Indonesia visa on arrival (approx. $35)" },
    { title: "Travel Insurance", description: "Mandatory for all travellers" },
  ],
  whoItsFor: [
    "You're an 18–30 year old social traveller looking for the trip of a lifetime.",
    "You love island hopping, surf, sunsets, and beach party energy.",
    "You want the logistics handled so you can just show up and have fun.",
    "You're a solo traveller who wants instant community and core memories.",
    "You're a first-time backpacker looking for an easy way in.",
  ],
  bookingSteps: [
    {
      title: "Pay Your Deposit",
      description:
        "Pay your £182 deposit via the link below by 07/06.",
    },
    {
      title: "Join the Crew",
      description:
        "Once deposited, you'll be added to the private WhatsApp group for pre-trip banter and packing tips.",
    },
    {
      title: 'Wait for the "GO"',
      description:
        "This trip requires 12 confirmed travellers by 07/06. As soon as we hit the minimum, we'll confirm the takeover is ON.",
    },
    {
      title: "Pay Your Instalments",
      rows: [
        { label: "Deposit", amount: "£182", due: "07/06" },
        { label: "Instalment 1", amount: "£182", due: "21/06" },
        { label: "Instalment 2", amount: "£182", due: "28/06" },
      ],
      footer: "Total trip cost: £550",
    },
    {
      title: "Book Your Flights",
      description:
        "Do not book flights until the 12-person minimum is officially confirmed!",
    },
  ],
  faq: [
    {
      question: "Do I need to have backpacking experience?",
      answer:
        "No. This trip is beginner-friendly. All transport, accommodation, and activities are organised for you — you just need to show up ready for adventure.",
    },
    {
      question: "Do I need to know how to surf?",
      answer:
        "Not at all. Surf lessons in Uluwatu and Kuta Lombok are designed for total beginners, with experienced local instructors and soft boards. If you're already a surfer, you'll love the waves too.",
    },
    {
      question: "What kind of luggage should I bring?",
      answer:
        "We recommend a backpack or medium-sized duffel — easier to manage on fast boats and island transfers.",
    },
    {
      question: "Can I request to share a room with someone?",
      answer:
        "Yes. If you're travelling with a friend, let us know in advance and we'll do our best to place you in the same dorm.",
    },
    {
      question: "What if I don't know anyone?",
      answer:
        "That's completely normal — most travellers join solo. You'll be added to a private WhatsApp group before the trip so you can connect with everyone ahead of time.",
    },
    {
      question: "Is this a party trip?",
      answer:
        "It's a high-energy social trip with free flow nights, pool parties, and boat parties — but Indonesia is also about surf, sunrises, snorkelling, and downtime. Join in as much or as little as you like.",
    },
    {
      question: "What if I get sick or injured?",
      answer:
        "Travel insurance is mandatory. Hosts and local staff will assist you in accessing medical care if needed, but medical costs are your responsibility and must be covered by insurance.",
    },
    {
      question: "Will there be WiFi?",
      answer:
        "Yes — all Mad Monkey locations have WiFi, though speeds may vary on the smaller islands.",
    },
    {
      question: "Is there a payment plan available?",
      answer:
        "Yes. £182 deposit by 07/06, then £182 by 21/06 and £182 by 28/06. Total cost is £550. Missed payments may result in your spot being released.",
    },
    {
      question: "Is there a minimum number of travellers required?",
      answer:
        "Yes — 12 confirmed travellers by 07/06. If this minimum isn't met, the trip will be cancelled and all payments will be fully refunded.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "If you cancel before the trip is confirmed, you'll receive a full refund of your deposit. If you cancel after the trip is confirmed, all payments are non-refundable. We strongly recommend travel insurance with 'Cancel for Any Reason' (CFAR) coverage.",
    },
  ],
  vibeGallery: [
    { image: vibeBoatPartyImg, alt: "Mad Monkey boat party in Indonesia" },
    { image: vibeMantarayImg, alt: "Snorkelling with manta rays around Nusa Penida" },
    { image: vibeSunsetImg, alt: "Cliffside sunset in Uluwatu Bali" },
  ],
  footer: {
    copyright: "Powered by Mad Monkey",
  },
};
