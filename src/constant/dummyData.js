import delPaine2 from "../assets/images/banner/DiscoverImg.jpg";
import Glaciers3 from "../assets/images/gallery/13.jpg";
import Glaciers2 from "../assets/images/gallery/2.jpg";
import {
  default as delPaine3,
  default as img5,
} from "../assets/images/gallery/5.jpg";
import img1 from "../assets/images/tours/1.jpg";
import img2 from "../assets/images/tours/2.jpg";
import img3 from "../assets/images/tours/3.jpg";
import img4 from "../assets/images/tours/4.jpg";
import {
  default as img6,
  default as img7,
  default as img8,
} from "../assets/images/tours/6.jpg";
import wTrek2 from "../assets/images/tours/w-trek2.jpg";
import wTrek3 from "../assets/images/tours/w-trek3.jpg";

export const toursCardData = [
  {
    id: 1,
    img: img1,
    country: "Argentina",
    title: "Glaciers & Peaks",
    place: "Buenos Aires, El Calafate, El Chaltén",
    expense: 9816,
    shortDesq : `Venture into the heart of spectacular Patagonia, where vast stretches of natural beauty await your discovery`,
    day: 12,
    night: 11,
    person: 12,
    ratings: "9.5 Superb",
    popularTour: true,
    details: {
        desq1 : `Venture into the heart of spectacular Patagonia, where vast stretches of natural beauty await your discovery. Explore the cultural gems of Buenos Aires with a private guide.
        Stand in awe of Patagonia’s natural wonders during hikes & immersive excursions.
        `,
        desq2 : `Visit the legendary Perito Moreno Glacier, one of the country's most stunning sights. Marvel at the mighty Mount Fitz Roy, one of the majestic and challenging peaks in the world.Featuring a curated selection of premier accommodations and lodging.`,
      duration: "5 Days 4 Nights",
      departure: "NYC International Airport",
      departureTime: "7.00AM",
      ReturnTime: "9.30PM",
      priceIncludes: [
        "Accommondation",
        "Porter & Personal Guide",
        "Insurance",
        "Breakfast",
        "Tranportation / Car",
      ],
      priceExcludes: [
        "Flights",
        "Lunch",
        "Typical Souvenir",
        "Sunscreen",
        "toiletries and personal items",
      ],
      imgGallery: [
        {
          id: 1,
          img: img1,
        },
        {
          id: 2,
          img: Glaciers2,
        },
        {
          id: 3,
          img: Glaciers3,
        },
      ],
    },
    itenary: [
      {
        id: 1,
        desq1: "hello from timeline 1",
      },
      {
        id: 2,
        desq1: "hello from timeline 2",
      },
      {
        id: 3,
        desq1: "hello from timeline 2",
      },
      {
        id: 4,
        desq1: "hello from timeline 2",
      },
      {
        id: 5,
        desq1: "hello from timeline 3",
      },
    ],
  },
  {
    id: 2,
    img: img2,
    country: "Chile",
    title: "Torres del Paine",
    place: "Santiago, Puerto Natales, Torres del Paine",
    expense: 9612,
    shortDesq : `Southern Chile impresses in this unforgettable journey through breathtaking Torres del Paine & Puerto Natales`,
    day: 15,
    night: 11,
    person: 15,
    ratings: "9.2 Superb",
    popularTour: true,
    details: {
        desq1 : `Southern Chile impresses in this unforgettable journey through breathtaking Torres del Paine & Puerto Natales. Explore the rugged beauty of Torres del Paine from the comfort of a mountain lodge.
        Delve the depths of ethereal Mylodon Cave with a private guide.
        `,
        desq2 : `Experience life on a traditional Chilean ranch at stunning Estancia La Peninsula.
        Treat your taste buds to a symphony of flavors in Santiago.
        Featuring a curated collection of premier accommodations.`,
      duration: "5 Days 4 Nights",
      departure: "NYC International Airport",
      departureTime: "7.00AM",
      ReturnTime: "9.30PM",
      priceIncludes: [
        "Accommondation",
        "Porter & Personal Guide",
        "Insurance",
        "Breakfast",
        "Tranportation / Car",
      ],
      priceExcludes: [
        "Flights",
        "Lunch",
        "Typical Souvenir",
        "Sunscreen",
        "toiletries and personal items",
      ],
      imgGallery: [
        {
          id: 1,
          img: img2,
        },
        {
          id: 2,
          img: delPaine2,
        },
        {
          id: 3,
          img: delPaine3,
        },
      ],
    },
    itenary: [
      {
        id: 1,
        desq1: "hello from timeline 1",
      },
      {
        id: 2,
        desq1: "hello from timeline 2",
      },
      {
        id: 3,
        desq1: "hello from timeline 2",
      },
      {
        id: 4,
        desq1: "hello from timeline 2",
      },
      {
        id: 5,
        desq1: "hello from timeline 3",
      },
    ],
  },
  {
    id: 3,
    img: img3,
    country: "Chile",
    title: "W Trek del Paine",
    place: "Puerto Natales, Chile",
    expense: 1720,
    shortDesq : `The W Trek is normally walked east to west, starting at Refugio Las Torres and ending at Refugio Paine Grande. It runs up three valleys, creating the W shape that gives it its name.`,
    day: 30,
    night: 11,
    person: 6,
    ratings: "8.0 Impressive",
    popularTour: true,
    details: {
        desq1 : `The W Trek is normally walked east to west, starting at Refugio Las Torres and ending at Refugio Paine Grande. It runs up three valleys, creating the W shape that gives it its name. Ideal for experienced hikers and active adventurers`,
        desq2 : `Take a break from the hustle and bustle of the city on a 5-day hike through Torres del Paine National Park, and discover scenic landmarks including Nordenskjöld Lake, the French Valley, and the Grey Glacier. Explore at a pace that suits you on an independent trek, and avoid hidden costs with meals and accommodation included as per itinerary, with a choice of single, double, or dorm packages available.`,
      duration: "5 Days 4 Nights",
      departure: "NYC International Airport",
      departureTime: "7.00AM",
      ReturnTime: "9.30PM",
      priceIncludes: [
        "Accommondation",
        "Porter & Personal Guide",
        "Insurance",
        "Breakfast",
        "Tranportation / Car",
      ],
      priceExcludes: [
        "Flights",
        "Lunch",
        "Typical Souvenir",
        "Sunscreen",
        "toiletries and personal items",
      ],
      imgGallery: [
        {
          id: 1,
          img: img3,
        },
        {
          id: 2,
          img: wTrek2,
        },
        {
          id: 3,
          img: wTrek3,
        },
      ],
    },
    itenary: [
      {
        id: 1,
        desq1: "hello from timeline 1",
      },
      {
        id: 2,
        desq1: "hello from timeline 2",
      },
      {
        id: 3,
        desq1: "hello from timeline 2",
      },
      {
        id: 4,
        desq1: "hello from timeline 2",
      },
      {
        id: 5,
        desq1: "hello from timeline 3",
      },
    ],
  },
  {
    id: 4,
    img: img4,
    country: "Bangladesh",
    title: "Italy Tour",
    place: "Buenos Aires, El Calafate, El Chaltén",
    expense: 1000,
    shortDesq : `Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.`,
    day: 12,
    night: 11,
    person: 12,
    ratings: "9.5 Superb",
    popularTour: true,
  },
  {
    id: 5,
    img: img5,
    country: "Netherlands",
    title: "Italy Tour",
    place: "Buenos Aires, El Calafate, El Chaltén",
    expense: 1000,
    shortDesq : `Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.`,
    day: 12,
    night: 11,
    person: 12,
    ratings: "9.5 Superb",
    popularTour: true,
  },
  {
    id: 6,
    img: img6,
    country: "USA",
    title: "Italy Tour",
    place: "Buenos Aires, El Calafate, El Chaltén",
    expense: 1000,
    shortDesq : `Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.`,
    day: 12,
    night: 11,
    person: 12,
    ratings: "9.5 Superb",
    popularTour: true,
  },
  {
    id: 7,
    img: img7,
    country: "India",
    title: "Italy Tour",
    place: "Buenos Aires, El Calafate, El Chaltén",
    expense: 1000,
    shortDesq : `Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.`,
    day: 12,
    night: 11,
    person: 12,
    ratings: "9.5 Superb",
    popularTour: false,
  },
  {
    id: 8,
    img: img8,
    country: "UK",
    title: "Italy Tour",
    place: "Buenos Aires, El Calafate, El Chaltén",
    expense: 1000,
    shortDesq : `Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.`,
    day: 12,
    night: 11,
    person: 12,
    ratings: "9.5 Superb",
    popularTour: false,
  },
];
