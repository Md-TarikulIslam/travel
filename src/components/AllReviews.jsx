import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import img from "../assets/images/destination/destination.jpg";
import img1 from "../assets/images/review/3.jpg";
import img2 from "../assets/images/review/2.jpg";
import img3 from "../assets/images/review/1.jpeg";
import img4 from "../assets/images/review/4.jpg";
import { MdOutlinePlayCircleFilled, MdStarRate } from "react-icons/md";
import { ScrollRestoration } from "react-router-dom";
import { useEffect, useState } from "react";

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
        name: "K Jhon.",
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

function StarIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-yellow-700"
        >
            <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default function AllReviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://server.patagoniaexplore.com/api/reviews`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("travel-token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div>
            <div className="relative bg-black ">
                <div className=" bg_overlay w-full">
                    <img
                        className="h-[60vh] w-full object-cover opacity-100"
                        src={img}
                        alt="Banner Image"
                    />
                </div>
            </div>
            <div className=" absolute z-10 top-44 2xl:left-44 text-white  px-4">
                <p className="text-[13px] uppercase mb-1 tracking-[5px]">
                    The Best Travel Agency
                </p>
                <h1 className="md:text-[48px] text-[40px] leading-[1.3em] font-bold mb-5 Kaushan ">
                    Checkout our customers <br />
                    <span className="text-[#2095AE]">Reviews</span>
                </h1>
            </div>
            <div className="max-w-screen-xl mx-auto grid-cols-1 md:grid-cols-2 grid lg:grid-cols-4 py-20 gap-4 px-4 lg:px-0">
                {allData.map((data, index) => {
                    return (
                        <Card
                            key={index + 1}
                            className="w-full p-4 shadow shadow-blue-900"
                        >
                            <CardHeader
                                color="transparent"
                                floated={false}
                                shadow={false}
                                className="mx-0 flex items-center gap-4 pt-0 pb-8"
                            >
                                <Avatar
                                    size="lg"
                                    variant="circular"
                                    src={data.img}
                                    alt="tania andrew"
                                />
                                <div className="flex w-full flex-col gap-0.5">
                                    <div className="flex items-center justify-between">
                                        <Typography
                                            className="text-lg"
                                            color="blue-gray"
                                        >
                                            {data.name}
                                        </Typography>
                                        <div className="5 flex items-center gap-0">
                                            {data.rating.map((r) => (
                                                <p className="text-yellow-700 text-lg">
                                                    {r.rate}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardBody className="mb-6 p-0 text-justify">
                                <Typography>{data.details}</Typography>
                            </CardBody>
                        </Card>
                    );
                })}
                {reviews?.map((data, index) => {
                    return (
                        <Card
                            key={index + 1}
                            className="w-full p-4 shadow shadow-blue-900"
                        >
                            <CardHeader
                                color="transparent"
                                floated={false}
                                shadow={false}
                                className="mx-0 flex items-center gap-4 pt-0 pb-8"
                            >
                                <Avatar
                                    size="lg"
                                    variant="circular"
                                    src={data?.avatar}
                                    alt="tania andrew"
                                />
                                <div className="flex w-full flex-col gap-0.5">
                                    <div className="flex items-center justify-between">
                                        <Typography
                                            className="text-lg"
                                            color="blue-gray"
                                        >
                                            {data?.name}
                                        </Typography>
                                        <div className="5 flex items-center gap-0">
                                            {data?.rating === 5 && (
                                                <span className="text-yellow-700 text-lg flex">
                                                    <MdStarRate />{" "}
                                                    <MdStarRate />{" "}
                                                    <MdStarRate />{" "}
                                                    <MdStarRate />{" "}
                                                    <MdStarRate />
                                                </span>
                                            )}
                                            {data?.rating === 4 && (
                                                <span className="text-yellow-700 text-lg flex">
                                                    <MdStarRate />{" "}
                                                    <MdStarRate />{" "}
                                                    <MdStarRate />{" "}
                                                    <MdStarRate />
                                                </span>
                                            )}
                                            {data?.rating === 3 && (
                                                <span className="text-yellow-700 text-lg flex">
                                                    <MdStarRate />{" "}
                                                    <MdStarRate />{" "}
                                                    <MdStarRate />
                                                </span>
                                            )}
                                            {data.rating === 2 && (
                                                <span className="text-yellow-700 text-lg flex">
                                                    <MdStarRate />{" "}
                                                    <MdStarRate />
                                                </span>
                                            )}
                                            {data.rating === 1 && (
                                                <span className="text-yellow-700 text-lg flex">
                                                    <MdStarRate />
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardBody className="mb-6 p-0 text-justify">
                                <Typography>{data.review}</Typography>
                            </CardBody>
                        </Card>
                    );
                })}
            </div>
            <ScrollRestoration />
        </div>
    );
}
