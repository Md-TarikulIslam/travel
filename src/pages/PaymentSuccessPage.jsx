import { Button, Card, CardBody, Chip } from "@material-tailwind/react";
import successImg from "../assets/images/payment/1.gif";
import { Link } from "react-router-dom";

// const info = JSON.parse(localStorage.getItem("booking-details"));


// info &&
//     fetch("https://server.patagoniaexplore.com/api/create-order", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             authorization: `Bearer ${localStorage.getItem("travel-token")}`,
//         },
//         body: JSON.stringify({
//             userInfo: {
//                 name: info?.info?.fullName,
//                 email: info?.info?.email,
//             },
//             serviceInfo: {
//                 title: info?.title,
//                 price: info?.price,
//             },
//             orderInfo: {
//                 date: info?.info?.date,
//                 numberOfPeople: info?.info?.people,
//                 comments: info?.info?.enquire,
//             },
//         }),
//     })
//         .then((res) => res.json())
//         .then((data) => {
//             // localStorage.removeItem("booking-details");
//             console.log("After payment", data);
//         });

const PaymentSuccesspage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center w-full">
            <Chip
                variant="ghost"
                color="green"
                size="lg"
                value="Status : Success"
                className="max-w-min mx-auto"
                icon={
                    <span className="mx-auto mt-2 block h-2 w-2 rounded-full bg-green-900 content-['']" />
                }
            />
            <div className="mt-8">
                <Card className="rounded-3xl w-[40rem] bg-green-50">
                    <CardBody>
                        <img className="w-60 mx-auto" src={successImg} alt="" />
                        <p className="text-center my-6 font-bold text-2xl">
                            Payment Successful
                        </p>

                        <Link className="w-full" to="/">
                            {" "}
                            <Button
                                color="blue"
                                fullWidth
                                className="bg-[#1d355e] tracking-widest w-full"
                            >
                                back to explore
                            </Button>
                        </Link>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default PaymentSuccesspage;
