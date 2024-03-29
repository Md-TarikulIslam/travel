import img1 from "../assets/images/tours/1.jpg";
import img2 from "../assets/images/tours/2.jpg";
import img3 from "../assets/images/tours/3.jpg";
import img4 from "../assets/images/tours/4.jpg";
import img5 from "../assets/images/tours/5.jpg";
import img6 from "../assets/images/tours/6.jpg";
import Glaciers2 from "../assets/images/gallery/2.jpg";
import Glaciers3 from "../assets/images/gallery/13.jpg";
import delPaine2 from "../assets/images/gallery/35.jpg";
import delPaine3 from "../assets/images/gallery/5.jpg";
import wTrek2 from "../assets/images/tours/w-trek2.jpg";
import wTrek3 from "../assets/images/tours/w-trek3.jpg";
import peritoMoreno2 from "../assets/images/tours/perito-moreno2.jpg";
import peritoMoreno3 from "../assets/images/tours/perito-moreno3.jpg";
import iguazuFalls2 from "../assets/images/tours/iguazu-falls2.jpg";
import iguazuFalls3 from "../assets/images/tours/iguazu-falls3.webp";
import colonia2 from "../assets/images/tours/colonia2.webp";
import colonia3 from "../assets/images/tours/colonia3.jpg";
import map1 from "../assets/images/map/1.jpg";
import map2 from "../assets/images/map/2 & 3.jpg";
import map3 from "../assets/images/map/2 & 3.jpg";
import map4 from "../assets/images/map/4.jpg";
import map5 from "../assets/images/map/5.jpg";
import map6 from "../assets/images/map/6.jpg";

export const toursCardData = [
    {
        id: "Glaciers-&-Peaks",
        img: img1,
        country: "Argentina",
        title: "Glaciers & Peaks",
        place: "Buenos Aires, El Calafate, El Chaltén",
        expense: 2995,
        shortDesq: `Venture into the heart of spectacular Patagonia, where vast stretches of natural beauty await your discovery`,
        day: 8,
        person: 12,
        ratings: "9.5 Superb",
        popularTour: true,
        payment_link: "link1",
        details: {
            desq1: `Venture into the heart of spectacular Patagonia, where vast stretches of natural beauty await your discovery. Explore the cultural gems of Buenos Aires with a private guide.
        Stand in awe of Patagonia’s natural wonders during hikes & immersive excursions.
        `,
            desq2: `Visit the legendary Perito Moreno Glacier, one of the country's most stunning sights. Marvel at the mighty Mount Fitz Roy, one of the majestic and challenging peaks in the world.Featuring a curated selection of premier accommodations and lodging.`,
            duration: "8 Days 7 Nights",
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
                "Toiletries and personal items",
            ],
            mapImg: map1,
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
                title: "Day 1 - Buenos Aires",
                desq: [
                    "Transport after hotel breakfast",
                    "Walking tour Down Town ",
                    " Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch at : Grandes Carnicerias del Plata steakhouse',
                    " Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    " Transport to dinner place ( probable tango show)",
                    " Transport to Hotel.",
                ],
            },
            {
                id: 2,
                title: "Day 2 - Buenos Aires",
                desq: [
                    "   Transport after hotel breakfast",
                    "Walking tour Down Town ",
                    " Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch at : Grandes Carnicerias del Plata steakhouse',
                    "Barolo Palace",
                    "2 hour  rest at Hotel.",
                    "Dinner at pizzeria Güerrin ",
                    " Transport to Hotel.",
                ],
            },
            {
                id: 3,
                title: "Day 3 - El Calafate",
                desq: [
                    "Early breakfast",
                    " Transport to Airport",
                    "Flight to Calafate",
                    " Transport to Hotel.",
                    "Launch",
                    "Afternoon exploration city of Calafate",
                ],
            },
            {
                id: 4,
                title: "Day 4 - Perito Moreno Glacier",
                desq: [
                    "Early breakfast",
                    " Transport to Las Glacier National Park",
                    "Explore the Glacier",
                    " Transport to Hotel",
                    "Launch / Dinner",
                ],
            },
            {
                id: 5,
                title: "Day 5 - El Chalten",
                desq: [
                    "Early breakfast",
                    " Transport to El Chalten",
                    "Hotel Check in",
                    "Launch",
                    "Explore Chalten",
                ],
            },
            {
                id: 6,
                title: "Day 6 - Hike Lago Torre",
                desq: [
                    "Early breakfast",
                    "Hike to Lago Torre",
                    "Back to Hotel",
                    "Launch / Dinner",
                ],
            },
            {
                id: 7,
                title: "Day 7 - Hike Mont Fitz Roy",
                desq: [
                    "Early breakfast",
                    "Hike to Mont Fitz Roy",
                    "Back to Hotel",
                    "Launch / Dinner",
                ],
            },
            {
                id: 8,
                title: "Day 8 - Back to Buenos Aires",
                desq: [
                    "Early breakfast",
                    "Transfer to Calafate Airport",
                    "Flight to Buenos Aires",
                    "Hotel Check in",
                    "Launch / Dinner"
                ],
            },
        ],
    },
    {
        id: "Torres-del-Paine",
        img: img2,
        country: "Chile",
        title: "Torres del Paine",
        place: "Santiago, Puerto Natales, Torres del Paine",
        expense: 2495,
        shortDesq: `Southern Chile impresses in this unforgettable journey through breathtaking Torres del Paine & Puerto Natales`,
        day: 7,
        person: 12,
        ratings: "9.2 Superb",
        popularTour: true,
        payment_link: "link2",
        details: {
            desq1: `Southern Chile impresses in this unforgettable journey through breathtaking Torres del Paine & Puerto Natales. Explore the rugged beauty of Torres del Paine from the comfort of a mountain lodge.
        Delve the depths of ethereal Mylodon Cave with a private guide.
        `,
            desq2: `Experience life on a traditional Chilean ranch at stunning Estancia La Peninsula.
        Treat your taste buds to a symphony of flavors in Santiago.
        Featuring a curated collection of premier accommodations.`,
            duration: "7 Days 6 Nights",
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
                "Toiletries and personal items",
            ],
            mapImg: map2,
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
                title: "Day 1 - Puerto Natales",
                desq: [
                    "Reception at Puerto Natales Airport Hostal FactorÍa",
                    "Dinner",
                    "Photography and Nature Workshop",
                  
                ],
            },
            {
                id: 2,
                title: "Day 2 - Torres del Paine",
                desq: [
                    "Sunrise in Torres del Paine National Park",
                    "Gray Lake Navigation",
                    "Picnic Lunch",
                    "Visit to the Rio Serrano Sector",
                    'Group Scene',
                ],
            },
            {
                id: 3,
                title: "Day 3 - Laguna Amarga",
                desq: [
                    "Sunrise in Laguna Amarga",
                    "Wildlife sighting",
                    "Picnic Lunch",
                    "Trekking to Salto Grande and Mirador Cuernos",
                    'Group Scene',
                ],
            },
            {
                id: 4,
                title: "Day 4 - Pehoé Lake",
                desq: [
                    "Sunrise at Pehoé Lake",
                    "Trekking Mirador Condor",
                    "Picnic Lunch",
                    "Wildlife Sighting",
                    'Farewell Group Scene',
                ],
            },
            {
                id: 5,
                title: "Day 5 - Puerto Natales Coast",
                desq: [
                    "Sunrise on the Puerto Natales Coast",
                    "Group Breakfast",
                    "Check out and dispatch to Puerto Natales Airport or Railroad",
                ],
            },
        ],
    },
    {
        id: "W-Trek-del-Paine",
        img: img3,
        country: "Chile",
        title: "W Trek del Paine",
        place: "Puerto Natales, Chile",
        expense: 1495,
        shortDesq: `The W Trek is normally walked east to west, starting at Refugio Las Torres and ending at Refugio Paine Grande. It runs up three valleys, creating the W shape that gives it its name.`,
        day: 5,
        person: 10,
        ratings: "8.0 Impressive",
        popularTour: true,
        payment_link: "link3",
        details: {
            desq1: `The W Trek is normally walked east to west, starting at Refugio Las Torres and ending at Refugio Paine Grande. It runs up three valleys, creating the W shape that gives it its name. Ideal for experienced hikers and active adventurers`,
            desq2: `Take a break from the hustle and bustle of the city on a 5-day hike through Torres del Paine National Park, and discover scenic landmarks including Nordenskjöld Lake, the French Valley, and the Grey Glacier. Explore at a pace that suits you on an independent trek, and avoid hidden costs with meals and accommodation included as per itinerary, with a choice of single, double, or dorm packages available.`,
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
                "Toiletries and personal items",
            ],
            mapImg: map3,
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
                title: "Day 1 - Buenos Aires",
                desq: [
                    "Transport after hotel breakfast",
                    "Walking tour Down Town ",
                    " Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch at : Grandes Carnicerias del Plata steakhouse',
                    " Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    " Transport to dinner place ( probable tango show)",
                    " Transport to Hotel.",
                ],
            },
            {
                id: 2,
                title: "Day 2 - Buenos Aires",
                desq: [
                    "   Transport after hotel breakfast",
                    "Walking tour Down Town ",
                    " Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch at : Grandes Carnicerias del Plata steakhouse',
                    "Barolo Palace",
                    "2 hour  rest at Hotel.",
                    "Dinner at pizzeria Güerrin ",
                    " Transport to Hotel.",
                ],
            },
            {
                id: 3,
                title: "Day 3 - Flight to Iguazu  (Brasilian Side)",
                desq: [
                    "   Transport after hotel breakfast",
                    "Walking tour Down Town ",
                    " Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch at : Grandes Carnicerias del Plata steakhouse',
                    " Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    " Transport to dinner place ( probable tango show)",
                    " Transport to Hotel.",
                ],
            },
            {
                id: 4,
                title: "Day 4 - Flight to Iguazu  (Argentinean  side)",
                desq: [
                    "   Transport after hotel breakfast",
                    "Walking tour Down Town ",
                    " Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch at : Grandes Carnicerias del Plata steakhouse',
                    " Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    " Transport to dinner place ( probable tango show)",
                    " Transport to Hotel.",
                ],
            },
            {
                id: 5,
                title: "Day 5 - Super chill day in Colonia del Sacramento, Uruguay",
                desq: [
                    "   Transport after hotel breakfast",
                    "Walking tour Down Town ",
                    " Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch at : Grandes Carnicerias del Plata steakhouse',
                    " Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    " Transport to dinner place ( probable tango show)",
                    " Transport to Hotel.",
                ],
            },
        ],
    },
    {
        id: "Perito-Moreno-Glacier",
        img: img4,
        country: "Argentina",
        title: "Perito Moreno Glacier",
        place: "Santa Cruz Province, Argentina",
        expense: 1495,
        shortDesq: `One of the most famous and awe-inspiring of Argentina's natural wonders. Standing before its 70-metre high electric blue face and watching 100-tonne blocks of ice crumble.`,
        day: 5,
        person: 12,
        ratings: "8.0 Impressive",
        popularTour: true,
        payment_link: "link4",
        details: {
            desq1: `Glaciers form when large amounts of snow accumulate in an area quicker than the rate it melts, leaving behind a large mass of frozen ice. Over millennia this becomes so compacted that an ice river is formed, leaving these beautiful glaciers dotted around the world.`,
            desq2: `Visiting Perito Moreno Glacier in just one day is easy on this guided tour from El Calafate. An early-morning departure helps you beat the crowds, so you can wander along the walkways in front of the glacier without too much interference once you arrive. Then, get close within 490 feet (150 meters) of the glacier on a sailing tour around the south face.`,
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
                "Toiletries and personal items",
            ],
            mapImg: map4,
            imgGallery: [
                {
                    id: 1,
                    img: img4,
                },
                {
                    id: 2,
                    img: peritoMoreno2,
                },
                {
                    id: 3,
                    img: peritoMoreno3,
                },
            ],
        },
        itenary: [
            {
                id: 1,
                title: "Day 1 - Buenos Aires",
                desq: [
                    "Transport after hotel breakfast",
                    "Walking tour Down Town ",
                    " Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch at : Grandes Carnicerias del Plata steakhouse',
                    " Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    " Transport to dinner place ( probable tango show)",
                    " Transport to Hotel.",
                ],
            },
            {
                id: 2,
                title: "Day 2 - Buenos Aires",
                desq: [
                    "   Transport after hotel breakfast",
                    "Walking tour Down Town ",
                    " Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch at : Grandes Carnicerias del Plata steakhouse',
                    "Barolo Palace",
                    "2 hour  rest at Hotel.",
                    "Dinner at pizzeria Güerrin ",
                    " Transport to Hotel.",
                ],
            },
            {
                id: 3,
                title: "Day 3 - El Calafate",
                desq: [
                    "Early breakfast",
                    " Transport to Airport",
                    "Flight to Calafate",
                    " Transport to Hotel.",
                    "Launch",
                    "Afternoon exploration city of Calafate",
                ],
            },
            {
                id: 4,
                title: "Day 4 - Perito Moreno Glacier",
                desq: [
                    "Early breakfast",
                    " Transport to Las Glacier National Park",
                    "Explore the Glacier",
                    " Transport to Hotel",
                    "Launch / Dinner",
                ],
            },
            {
                id: 5,
                title: "Day 5 - Back to Buenos Aires",
                desq: [
                    "Early breakfast",
                    " Transport to Airport",
                    "Flight to Buenos Aires",
                    " Transport to Hotel",
                    "Launch / Dinner",
                ],
            },
        ],
    },
    {
        id: "Iguazu-Falls",
        img: img5,
        country: "Brazil",
        title: "Iguazu Falls",
        place: "waterfall, Argentina-Brazil",
        expense: 1795,
        shortDesq: `One of the planet’s most awe-inspiring sights, the Iguazú Falls are simply astounding. A visit is a jaw-dropping, visceral experience, a chain of hundreds of waterfalls nearly 1.85 miles.`,
        day: 5,
        person: 12,
        ratings: "8.0 Impressive",
        popularTour: true,
        payment_link: "link5",
        details: {
            desq1: `One of the planet’s most awe-inspiring sights, the Iguazú Falls are simply astounding. A visit is a jaw-dropping, visceral experience, and the power and noise of the cascades – a chain of hundreds of waterfalls nearly 1.85 miles (3km) in extension – live forever in the memory. An added benefit is the setting: the falls lie split between Brazil and Argentina in a large expanse of national park, much of it rainforest teeming with unique flora and fauna.`,
            desq2: `The Iguazu Falls annually receive more than 1 million tourists, being recognized worldwide for its beauty. Located within the Iguassu National Park, on the border between Brazil and Argentina (in the cities of Foz do Iguaçu and Puerto Iguazú), has a qualified structure for receiving tourists, with a visitors center, parking, hotel, restaurant, internal buses, additional sightseeing tours, shops, food court and a hiking trail to access the falls.`,
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
                "Toiletries and personal items",
            ],
            mapImg: map5,
            imgGallery: [
                {
                    id: 1,
                    img: img5,
                },
                {
                    id: 2,
                    img: iguazuFalls2,
                },
                {
                    id: 3,
                    img: iguazuFalls3,
                },
            ],
        },
        itenary: [
            {
                id: 1,
                title: "Day 1 - Buenos Aires",
                desq: [
                    "Transport after hotel breakfast",
                    "Walking tour Down Town ",
                    " Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch at : Grandes Carnicerias del Plata steakhouse',
                    " Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    " Transport to dinner place ( probable tango show)",
                    " Transport to Hotel.",
                ],
            },
            {
                id: 2,
                title: "Day 2 - Buenos Aires",
                desq: [
                    " Transport after hotel breakfast",
                    "Walking tour Down Town ",
                    " Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch at : Grandes Carnicerias del Plata steakhouse',
                    "Barolo Palace",
                    "2 hour  rest at Hotel.",
                    "Dinner at pizzeria Güerrin ",
                    " Transport to Hotel.",
                ],
            },
            {
                id: 3,
                title: "Day 3 - Jungle Adventure in Iguazu Waterfalls",
                desq: [
                    "Early Breakfast",
                    "Walking tour Down Town ",
                    "Transport to Hotel -  leave luggage",
                    "Transport to National Park",
                    "National Park - Iguazu Waterfalls - 5 hours duration aprox",
                    "Launch",
                    "Transport to 3 borders milestone ",
                    "Transport Hotel  -  Free time to rest",
                    "Transport to Street Market  -  Dinner time ",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 4,
                title: "Day 4 -  Flight back to BA",
                desq: [
                    "Early Breakfast",
                    "Transport to Airport",
                    "Flight back to Buenos Aires",
                    "Transport to Hotel",
                    "Free Afternoon",
                    "Dinner",
                ],
            },

        ],
    },
    {
        id: "Colonia-del-Sacramento",
        img: img6,
        country: "Uruguay",
        title: "Colonia del Sacramento",
        place: "Colonia del Sacramento, Uruguay",
        expense: 1495,
        shortDesq: `Colonia del Sacramento is known for its Barrio Histórico, an impeccably-preserved colonial quarter with a rich and tumultuous history.`,
        day: 5,
        person: 12,
        ratings: "8.0 Impressive",
        popularTour: true,
        payment_link: "link6",
        details: {
            desq1: `Colonia del Sacramento is known for its Barrio Histórico, an impeccably-preserved colonial quarter with a rich and tumultuous history. It was founded by the Portuguese in 1680 on the Río de la Plata and became a military stronghold in the resistance against Spain. With its wide stone walls, tiled roofs and single-story stucco buildings, the architecture is a stunning example of European colonialism.`,
            desq2: `The 17th century village is surrounded by water on three sides with a towering lighthouse facing Buenos Aires and its own drawbridge, making it feel like you’ve stepped back in time. It’s so well preserved for the period, it feels like a pirate may come around the corner at any moment.`,
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
                "Toiletries and personal items",
            ],
            mapImg: map6,
            imgGallery: [
                {
                    id: 1,
                    img: img6,
                },
                {
                    id: 2,
                    img: colonia2,
                },
                {
                    id: 3,
                    img: colonia3,
                },
            ],
        },
        itenary: [
            {
                id: 1,
                title: "Day 1 - Buenos Aires",
                desq: [
                    "Transport after hotel breakfast",
                    "Walking tour Down Town ",
                    " Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch at : Grandes Carnicerias del Plata steakhouse',
                    " Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    " Transport to dinner place ( probable tango show)",
                    " Transport to Hotel.",
                ],
            },
            {
                id: 2,
                title: "Day 2 - Buenos Aires",
                desq: [
                    " Transport after hotel breakfast",
                    "Walking tour Down Town ",
                    " Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch at : Grandes Carnicerias del Plata steakhouse',
                    "Barolo Palace",
                    "2 hour  rest at Hotel.",
                    "Dinner at pizzeria Güerrin ",
                    " Transport to Hotel.",
                ],
            },
            {
                id: 3,
                title: "Day 3 -  Relax in Colonia del Sacramento",
                desq: [
                    "Early Breakfast",
                    "Transport to mini cruise terminal",
                    "2 hrs total : including cruise trip + migrations and customs process.",
                    "Walking tour into historic center",
                    "Lunch in historic center",
                    "Free time at rivers shore",
                    "Walk back to mini cruise terminal",
                    "2 hrs total : including cruise trip + migrations and customs process.",
                    "Transport to Dinner place",
                    "Transport to Hotel",
                ],
            },
            
        ],
    },
];
