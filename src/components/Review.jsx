import { Card, CardBody, Carousel } from "@material-tailwind/react";
import { useState } from "react";
import { MdOutlinePlayCircleFilled, MdStarRate } from "react-icons/md";
import img3 from "../assets/images/review/1.jpeg";
import img2 from "../assets/images/review/2.jpg";
import img1 from "../assets/images/review/3.jpg";
import img4 from "../assets/images/review/4.jpg";
import thumbnail from '../assets/images/gallery/2.jpg'

const allData = [
  {
    title: "Client's Satisfaction",
    rating: [
      {
        rate: <MdStarRate />,
      },
      {
        rate: <MdStarRate />,
      },
      {
        rate: <MdStarRate />,
      },
      {
        rate: <MdStarRate />,
      },
      {
        rate: <MdStarRate />,
      },
    ],
    details:
      "I highly recommend Patagonia Explore and the local company they connected us to for a trip to Patagonia. Their expert itinerary took our wishlist, budget, and interests into account and created a trip of a lifetime!",
    name: "Sara A.",
    img: img1,
  },
  {
    title: "Client's Satisfaction",
    rating: [
      {
        rate: <MdStarRate />,
      },
      {
        rate: <MdStarRate />,
      },
      {
        rate: <MdStarRate />,
      },
      {
        rate: <MdStarRate />,
      },
      {
        rate: <MdStarRate />,
      },
    ],
    details:
      "Thank you Himu & Patagonia Explore for your work in setting up our unique vacation to Chile including all the details which made it stress free. You helped us create our ideal trip!!",
    name: "Kimberley S.",
    img: img2,
  },
  {
    title: "Client's Satisfaction",
    rating: [
      {
        rate: <MdStarRate />,
      },
      {
        rate: <MdStarRate />,
      },
      {
        rate: <MdStarRate />,
      },
      {
        rate: <MdStarRate />,
      },
      {
        rate: <MdStarRate />,
      },
    ],
    details: `Wonderfully planned vacation. Excellent clearly planned details provided. Always available for help along the way!
        Thank You Patagonia Explore!`,
    name: "AK Dev.",
    img: img3,
  },
  {
    title: "Client's Satisfaction",
    rating: [
      {
        rate: <MdStarRate />,
      },
      {
        rate: <MdStarRate />,
      },
      {
        rate: <MdStarRate />,
      },
      {
        rate: <MdStarRate />,
      },
      {
        rate: <MdStarRate />,
      },
    ],
    details: `Excellent and appropriately adventurous tour of Chilean alpine world, Patagonia (Torres del Paine, El Calafate, El Chaltan) and End of the World. Thank you for a great experience.`,
    name: "Patrick T.",
    img: img4,
  },
];

const Review = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const playVideo = () => {
    setVideoPlaying(true);
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-[#19c3c2] h-[600px] lg:h-96 relative">
      <div className="flex lg:flex-row flex-col">
        <div className="flex-1 absolute -top-20 md:right-40 lg:left-16 lg:mx-0 mx-auto w-full">
          <Card className=" rounded-none h-80 lg:w-[28rem] w-[20rem] mx-auto lg:mx-0">
            <CardBody className="p-0">
              {isVideoPlaying ? (
                <iframe
                  className="w-full h-80"
                  src="https://www.youtube.com/embed/WRdmk9799Y4?si=Gz2hPK8W8I_3ZCrI&autoplay=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <div onClick={playVideo} className="cursor-pointer">
                  <img
                    src={thumbnail}
                    alt="Video Thumbnail"
                    className="w-full h-80 cursor-pointer"
                  />
                  <p className="absolute top-0 flex justify-center items-center h-full w-full">
                    <MdOutlinePlayCircleFilled className="text-7xl text-red-900 bg-white rounded-full" />
                  </p>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
        <div className="flex-1 absolute -bottom-16 z-10 md:right-[24rem] lg:right-[32rem] mx-auto lg:mx-0 w-full md:w-0">
          <Card className="rounded-none h-[400px] lg:h-80 lg:w-[28rem] w-[20rem] mx-auto lg:mx-0 p-4">
            <CardBody>
              <div>
                <Carousel
                  className="rounded-none overflow-hidden lg:h-80 "
                  nextArrow={false}
                  prevArrow={false}
                  navigation={false}
                  loop={true}
                  autoplay={true}
                  autoplayDelay={3000}
                >
                  {allData.map((data, index) => {
                    return (
                      <div key={index + 1}>
                        <p className="uppercase tracking-widest font-bold text-2xl">
                          Top reviews{" "}
                        </p>
                        <p className="font-bold text-lg mt-4"> {data.title}</p>
                        <div className="flex items-center gap-1 text-[#19c3c2]">
                          {data.rating.map((d, idx) => {
                            return (
                              <div key={idx + 1}>
                                <p>{d.rate}</p>
                              </div>
                            );
                          })}
                        </div>
                        <p className="text-sm my-4">{data.details} </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <img
                              className="w-12 h-12 rounded-full "
                              src={data.img}
                              alt=""
                            />
                            <p className="font-semibold ">{data.name}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Review;
