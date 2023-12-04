import { Card, CardBody, Carousel, Rating } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { MdOutlinePlayCircleFilled, MdStarRate } from "react-icons/md";
import img3 from "../assets/images/review/1.jpeg";
import img2 from "../assets/images/review/2.jpg";
import img1 from "../assets/images/review/3.jpg";
import img4 from "../assets/images/review/4.jpg";
import thumbnail from "../assets/images/gallery/2.jpg";

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
    Typography,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import { auth } from "../firebase.init";
import { Link } from "react-router-dom";

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
    const [user, setUser] = useState({});

    useEffect(() => {
        auth?.currentUser &&
            fetch(
                `http://localhost:5000/api/user/${auth?.currentUser?.email}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${localStorage.getItem(
                            "travel-token",
                        )}`,
                    },
                },
            )
                .then((response) => response.json())
                .then((data) => setUser(data));
    }, []);

    const playVideo = () => {
        setVideoPlaying(true);
    };

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const [formData, setFormData] = useState({
        rating: 0,
        review: "",
    });

    const handleRatingChange = (value) => {
        setFormData({
            ...formData,
            rating: value,
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!auth.currentUser) {
            toast.error("Please login first.");
            handleOpen();
            return;
        }

        if (!formData.rating || !formData.review) {
            toast.error("Please fill in all fields.");
            handleOpen();
            return;
        }

        const reviewData = {
            avatar: user?.avatar,
            name: user?.name,
            email: user?.email,
            rating: formData?.rating,
            review: formData?.review,
        };

        fetch("http://localhost:5000/apgit i/create-review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("travel-token")}`,
            },
            body: JSON.stringify(reviewData),
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success(`${data.message}`);
            })
            .catch((error) => {
                console.error("Error submitting review:", error.message);
            });

        setFormData({
            rating: 0,
            review: "",
        });

        setOpen(false);
    };

    return (
        <div className="max-w-screen-xl mx-auto bg-[#19c3c2] h-[600px] lg:h-96 relative">
            <div className="flex lg:flex-row flex-col ">
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
                                <div
                                    onClick={playVideo}
                                    className="cursor-pointer"
                                >
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
                <div className="absolute mx-auto right-32 md:right-36 lg:right-52 top-64 lg:top-28">
                    <Button
                        onClick={handleOpen}
                        className=" whitespace-nowrap mb-3 text-white bg-[#1d355e] "
                    >
                        Leave a Review
                    </Button>
                </div>
                <Dialog
                    open={open}
                    size="xs"
                    handler={handleOpen}
                    className="p-3"
                >
                    <div className="flex items-center justify-between">
                        <DialogHeader className="flex flex-col items-start">
                            {" "}
                            <Typography className="mb-1" variant="h4">
                                Leave Your Review
                            </Typography>
                        </DialogHeader>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-3 h-6 w-6 cursor-pointer hover:text-red-700"
                            onClick={handleOpen}
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <DialogBody>
                            <div className="grid gap-8">
                                <div className="flex flex-col items-center">
                                    <p className="mb-1 font-normal text-lg text-black">
                                        Rate Us
                                    </p>
                                    <Rating
                                        type="number"
                                        value={formData.rating}
                                        name="rating"
                                        onChange={handleRatingChange}
                                    />
                                </div>
                                <Textarea
                                    type="text"
                                    value={formData.review}
                                    name="review"
                                    onChange={handleInputChange}
                                    label="Message"
                                />
                            </div>
                        </DialogBody>
                        <DialogFooter className="space-x-2">
                            <Button
                                variant="text"
                                color="gray"
                                onClick={handleOpen}
                            >
                                cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="gradient"
                                color="gray"
                            >
                                send message
                            </Button>
                        </DialogFooter>
                    </form>
                </Dialog>
                <div className="flex-1 absolute -bottom-28 z-10 md:right-[24rem] lg:right-[32rem] mx-auto lg:mx-0 w-full md:w-0">
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
                                    autoplayDelay={2000}
                                >
                                    {allData.map((data, index) => {
                                        return (
                                            <div key={index + 1}>
                                                <p className="uppercase tracking-widest font-bold text-2xl">
                                                    Top reviews{" "}
                                                </p>
                                                <p className="font-bold text-lg mt-4">
                                                    {" "}
                                                    {data.title}
                                                </p>
                                                <div className="flex items-center gap-1 text-[#19c3c2]">
                                                    {data.rating.map(
                                                        (d, idx) => {
                                                            return (
                                                                <div
                                                                    key={
                                                                        idx + 1
                                                                    }
                                                                >
                                                                    <p>
                                                                        {d.rate}
                                                                    </p>
                                                                </div>
                                                            );
                                                        },
                                                    )}
                                                </div>
                                                <p className="text-sm my-4">
                                                    {data.details.slice(0, 180)}
                                                    ...{" "}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <img
                                                            className="w-12 h-12 rounded-full "
                                                            src={data.img}
                                                            alt=""
                                                        />
                                                        <p className="font-semibold ">
                                                            {data.name}
                                                        </p>
                                                    </div>
                                                    <Link to="/reviews">
                                                        <Button className="text-white bg-[#1d355e]">
                                                            See all
                                                        </Button>
                                                    </Link>
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
