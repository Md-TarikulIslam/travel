import React, { useEffect } from "react";

const info = JSON.parse(localStorage.getItem("booking-details"));

info &&
    fetch("https://patagonia-explore-server.vercel.app/api/create-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("travel-token")}`,
        },
        body: JSON.stringify({
            userInfo: {
                name: info?.info?.fullName,
                email: info?.info?.email,
            },
            serviceInfo: {
                title: info?.title,
                price: info?.price,
            },
            orderInfo: {
                date: info?.info?.date,
                numberOfPeople: info?.info?.people,
                comments: info?.info?.enquire,
            },
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            localStorage.removeItem("booking-details");
        });

const PaymentSuccesspage = () => {
    return <div>Payment Success</div>;
};

export default PaymentSuccesspage;
