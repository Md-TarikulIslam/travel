import img1 from '../assets/images/tours/5.jpg'
import img2 from '../assets/images/tours/2.jpg'
import img3 from '../assets/images/tours/3.jpg'
import img4 from '../assets/images/tours/4.jpg'
import img5 from '../assets/images/gallery/2.jpg'
import img6 from '../assets/images/tours/6.jpg'
import img7 from '../assets/images/tours/6.jpg'
import img8 from '../assets/images/tours/6.jpg'

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
        detailsdesq : [{
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
                // priceIncludes : [
                //     Accommondation, Porter & Personal Guide,  Insurance, Breakfast, Tranportation / Car
                // ],
                // priceExcludes : [
                //     Flights , Lunch ,Typical Souvenir , Sunscreen, toiletries and personal items
                // ],
                imgGallery : [
                    {
                        id : 1,
                        img : img1
                    },
                    {
                        id : 2,
                        img : img2
                    },
                    {
                        id : 3,
                        img : img3
                    }
                ]

            }

    },
    {
        id : 2,
        img : img2,
        country : "France",
        title : "France Tour",
        place : 'Buenos Aires, El Calafate, El Chaltén',
        expense : 1200,
        desq : `Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.`,
        day : 15,
        night : 11,
        person : 15,
        ratings : '9.2 Superb',
        popularTour : true,
    },
    {
        id : 3,
        img : img3,
        country : "Italy",
        title : "Italy Tour",
        place : 'Buenos Aires, El Calafate, El Chaltén',
        expense : 500,
        desq : `Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.`,
        day : 30,
        night : 11,
        person : 6,
        ratings : '8.0 Impressive',
        popularTour : true,
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
