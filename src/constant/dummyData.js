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
import easterIsland2 from "../assets/images/tours/easterIsland2.jpg";
import easterIsland3 from "../assets/images/tours/easterIsland3.webp";
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
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 2,
                title: "Day 2 - Buenos Aires",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 3,
                title: "Day 3 - Flight to Iguazu  (Brasilian Side)",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 4,
                title: "Day 4 - Flight to Iguazu  (Argentinean  side)",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 5,
                title: "Day 5 - Super chill day in Colonia del Sacramento, Uruguay",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
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
                title: "Day 1 - Buenos Aires",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 2,
                title: "Day 2 - Buenos Aires",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 3,
                title: "Day 3 - Flight to Iguazu  (Brasilian Side)",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 4,
                title: "Day 4 - Flight to Iguazu  (Argentinean  side)",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 5,
                title: "Day 5 - Super chill day in Colonia del Sacramento, Uruguay",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
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
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 2,
                title: "Day 2 - Buenos Aires",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 3,
                title: "Day 3 - Flight to Iguazu  (Brasilian Side)",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 4,
                title: "Day 4 - Flight to Iguazu  (Argentinean  side)",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 5,
                title: "Day 5 - Super chill day in Colonia del Sacramento, Uruguay",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
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
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 2,
                title: "Day 2 - Buenos Aires",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 3,
                title: "Day 3 - Flight to Iguazu  (Brasilian Side)",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 4,
                title: "Day 4 - Flight to Iguazu  (Argentinean  side)",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 5,
                title: "Day 5 - Super chill day in Colonia del Sacramento, Uruguay",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
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
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 2,
                title: "Day 2 - Buenos Aires",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 3,
                title: "Day 3 - Flight to Iguazu  (Brasilian Side)",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 4,
                title: "Day 4 - Flight to Iguazu  (Argentinean  side)",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 5,
                title: "Day 5 - Super chill day in Colonia del Sacramento, Uruguay",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
        ],
    },
    {
        id: "Easter-Island",
        img: img6,
        country: "Chile",
        title: "Easter Island",
        place: "island, Chile",
        expense: 4995,
        shortDesq: `Easter Island, also known as Rapa Nui, is a tiny island known for its huge moai statues scattered all over the island.The world is fascinated by the creation of these statues.`,
        day: 7,
        person: 12,
        ratings: "8.0 Impressive",
        popularTour: true,
        payment_link: "link6",
        details: {
            desq1: `Easter Island, also known as Rapa Nui, is a tiny island known for its huge moai statues scattered all over the island. The world is fascinated by the creation of these statues not only for the impressive size and quantity of them, but also for the circumstances under which they were built.`,
            desq2: `This small island had very limited resources; not much drinking water, no cattle and no metal. The statues were transported to their final location several kilometers across hilly terrain - all of this being accomplished with the highest leader being a tribal chieftain.`,
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
            mapImg: map6,
            imgGallery: [
                {
                    id: 1,
                    img: img6,
                },
                {
                    id: 2,
                    img: easterIsland2,
                },
                {
                    id: 3,
                    img: easterIsland3,
                },
            ],
        },
        itenary: [
            {
                id: 1,
                title: "Day 1 - Buenos Aires",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 2,
                title: "Day 2 - Buenos Aires",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 3,
                title: "Day 3 - Flight to Iguazu  (Brasilian Side)",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 4,
                title: "Day 4 - Flight to Iguazu  (Argentinean  side)",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
            {
                id: 5,
                title: "Day 5 - Super chill day in Colonia del Sacramento, Uruguay",
                desq: [
                    "10 AM - transport after hotel breakfast",
                    "Walking tour : Recoleta Cemetery and  neighborhood",
                    "Transport to La Boca neigborhood.",
                    "Walking tour in La Boca / Caminito neigborhood.",
                    'Lunch in Steakhouse "El Gran Paraiso"',
                    "Transport to Barolo Palace (private tour on site)",
                    "Transport to Hotel.",
                    "2 hour  rest at Hotel.",
                    "Transport to dinner place ( probable tango show)",
                    "Transport to Hotel.",
                ],
            },
        ],
    },
];
