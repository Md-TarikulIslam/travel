import img1 from '../assets/images/tours/1.jpg'
import img2 from '../assets/images/tours/2.jpg'
import img3 from '../assets/images/tours/3.jpg'
import img4 from '../assets/images/tours/4.jpg'
import img5 from '../assets/images/gallery/5.jpg'
import img6 from '../assets/images/tours/6.jpg'
import img7 from '../assets/images/tours/6.jpg'
import img8 from '../assets/images/tours/6.jpg'
import Glaciers2 from '../assets/images/gallery/2.jpg'
import Glaciers3 from '../assets/images/gallery/13.jpg'
import  delPaine2 from '../assets/images/banner/DiscoverImg.jpg'
import  delPaine3 from '../assets/images/gallery/5.jpg'
import wTrek2 from '../assets/images/tours/w-trek2.jpg'
import wTrek3 from '../assets/images/tours/w-trek2.jpg'


export const toursCardData = [
    {
        id : 1,
        img : img1,
        country : "Argentina",
        title : "Glaciers & Peaks",
        place : 'Buenos Aires, El Calafate, El Chaltén',
        expense : 9816,
        desq : `Venture into the heart of spectacular Patagonia, where vast stretches of natural beauty await your discovery`,
        day : 12,
        night : 11,
        person : 12,
        ratings : '9.5 Superb',
        popularTour : true,
        itenary : [{
            id: 1,
            desq1 : "hello from timeline 1"
        },
        {
            id: 2,
            desq1 : "hello from timeline 2"
        },
        {
            id: 3,
            desq1 : "hello from timeline 2"
        },
        {
            id: 4,
            desq1 : "hello from timeline 2"
        },
        {
            id: 5,
            desq1 : "hello from timeline 3"
        }],
        details : 
            {
                duration : '5 Days 4 Nights',
                details : `hello`,
                departure : 'NYC International Airport',
                departureTime : '7.00AM',
                ReturnTime : "9.30PM",
                priceIncludes : [
                    'Accommondation', 'Porter & Personal Guide', 'Insurance', 'Breakfast', 'Tranportation / Car'
                ],
                priceExcludes : [
                    'Flights' , 'Lunch' ,'Typical Souvenir' , 'Sunscreen', 'toiletries and personal items'
                ],
                imgGallery : [
                    {
                        id : 1,
                        img : img1
                    },
                    {
                        id : 2,
                        img : Glaciers2
                    },
                    {
                        id : 3,
                        img : Glaciers3
                    }
                ]

            }

    },
    {
        id : 2,
        img : img2,
        country : "Chile",
        title : "Torres del Paine",
        place : 'Santiago, Puerto Natales, Torres del Paine',
        expense : 9612,
        desq : `Southern Chile impresses in this unforgettable journey through breathtaking Torres del Paine & Puerto Natales`,
        day : 15,
        night : 11,
        person : 15,
        ratings : '9.2 Superb',
        popularTour : true,
        details : 
            {
                duration : '5 Days 4 Nights',
                details : `hello`,
                departure : 'NYC International Airport',
                departureTime : '7.00AM',
                ReturnTime : "9.30PM",
                priceIncludes : [
                    'Accommondation', 'Porter & Personal Guide', 'Insurance', 'Breakfast', 'Tranportation / Car'
                ],
                priceExcludes : [
                    'Flights' , 'Lunch' ,'Typical Souvenir' , 'Sunscreen', 'toiletries and personal items'
                ],
                imgGallery : [
                    {
                        id : 1,
                        img : img2
                    },
                    {
                        id : 2,
                        img : delPaine2
                    },
                    {
                        id : 3,
                        img : delPaine3
                    }
                ]

            }

    },
    {
        id : 3,
        img : img3,
        country : "Chile",
        title : "W Trek del Paine",
        place : 'Puerto Natales, Chile',
        expense : 1720,
        desq : `The W Trek is normally walked east to west, starting at Refugio Las Torres and ending at Refugio Paine Grande. It runs up three valleys, creating the W shape that gives it its name.`,
        day : 30,
        night : 11,
        person : 6,
        ratings : '8.0 Impressive',
        popularTour : true,
        details : 
            {
                duration : '5 Days 4 Nights',
                details : `hello`,
                departure : 'NYC International Airport',
                departureTime : '7.00AM',
                ReturnTime : "9.30PM",
                priceIncludes : [
                    'Accommondation', 'Porter & Personal Guide', 'Insurance', 'Breakfast', 'Tranportation / Car'
                ],
                priceExcludes : [
                    'Flights' , 'Lunch' ,'Typical Souvenir' , 'Sunscreen', 'toiletries and personal items'
                ],
                imgGallery : [
                    {
                        id : 1,
                        img : img3
                    },
                    {
                        id : 2,
                        img : wTrek2
                    },
                    {
                        id : 3,
                        img : wTrek3
                    }
                ]

            }

    },
    {
        id : 4,
        img : img4,
        country : "Bangladesh",
        title : "Italy Tour",
        place : 'Buenos Aires, El Calafate, El Chaltén',
        expense : 1000,
        desq : `Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.`,
        day : 12,
        night : 11,
        person : 12,
        ratings : '9.5 Superb',
        popularTour : true,
    },
    {
        id : 5,
        img : img5,
        country : "Netherlands",
        title : "Italy Tour",
        place : 'Buenos Aires, El Calafate, El Chaltén',
        expense : 1000,
        desq : `Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.`,
        day : 12,
        night : 11,
        person : 12,
        ratings : '9.5 Superb',
        popularTour : true,
    },
    {
        id : 6,
        img : img6,
        country : "USA",
        title : "Italy Tour",
        place : 'Buenos Aires, El Calafate, El Chaltén',
        expense : 1000,
        desq : `Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.`,
        day : 12,
        night : 11,
        person : 12,
        ratings : '9.5 Superb',
        popularTour : true,
    },
    {
        id : 7,
        img : img7,
        country : "India",
        title : "Italy Tour",
        place : 'Buenos Aires, El Calafate, El Chaltén',
        expense : 1000,
        desq : `Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.`,
        day : 12,
        night : 11,
        person : 12,
        ratings : '9.5 Superb',
        popularTour : false,
    },
    {
        id : 8,
        img : img8,
        country : "UK",
        title : "Italy Tour",
        place : 'Buenos Aires, El Calafate, El Chaltén',
        expense : 1000,
        desq : `Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.`,
        day : 12,
        night : 11,
        person : 12,
        ratings : '9.5 Superb',
        popularTour : false,
    }
]
