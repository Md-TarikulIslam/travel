import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const info = JSON.parse(localStorage.getItem("booking-details"));
const email = info?.info?.email;
const person = parseFloat(info?.info?.people);

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [amount, setAmount] = useState(info?.price);
    const [loading, setLoading] = useState(false);
    const [paymentError, setPaymentError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const person = parseFloat(info?.info?.people);

        try {
            const { token, error } = await stripe.createToken(
                elements.getElement(CardElement),
            );

            if (error) {
                setPaymentError(error.message);
            } else {
                const response = await axios.post(
                    "http://localhost:5000/api/create-payment-intent",
                    {
                        amount: parseFloat(amount) * person * 100,
                        email,
                    },
                );

                const { clientSecret } = response.data;

                const result = await stripe.confirmCardPayment(clientSecret, {
                    payment_method: {
                        card: elements.getElement(CardElement),
                    },
                });

                if (result.error) {
                    setPaymentError(result.error.message);
                } else {
                    console.log("Payment succeeded!");
                    setAmount("");
                    setPaymentError(null);

                    fetch("http://localhost:5000/api/create-order", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            authorization: `Bearer ${localStorage.getItem(
                                "travel-token",
                            )}`,
                        },
                        body: JSON.stringify({
                            userInfo: {
                                name: info?.info?.fullName,
                                email: info?.info?.email,
                            },
                            serviceInfo: {
                                title: info?.title,
                                price: info?.price * person,
                            },
                            paymentInfo: {
                                status: "Paid",
                                transactionID: result.paymentIntent.id,
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
                            navigate("/payment-success");
                        });
                }
            }
        } catch (error) {
            console.error("Error:", error);
            setPaymentError("Payment failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-1/2 mx-auto">
            <div className="flex flex-col justify-center items-center bg-gray-800 text-gray-100 mt-24 w-full rounded-xl">
                <h3 className="text-2xl mt-6">Pay with card</h3>
                <form onSubmit={handleSubmit} className="py-4 w-full mx-auto">
                    <div className="py-3 px-2 rounded-lg w-5/6 my-2 mx-auto">
                        <h1>Destination: {info?.title}</h1>
                    </div>
                    <div className="px-2 rounded-lg w-5/6 mx-auto">
                        <p className="cl">Name: {info?.info?.fullName}</p>
                        <p>Email: {info?.info?.email}</p>
                        <p>No of People: {person}</p>
                    </div>
                    <div className="flex justify-between py-4 px-2 rounded-lg w-5/6 mx-auto">
                        <p className="cl">Amount: {amount * person}</p>
                        <p>Date: {info?.info?.date}</p>
                    </div>
                    <div className="bg-gray-200 py-3 px-2 rounded-lg w-5/6 my-2 mx-auto">
                        <CardElement />
                    </div>
                    <div className="py-4 rounded-lg w-5/6 my-2 mx-auto">
                        <button
                            type="submit"
                            disabled={!stripe || loading}
                            className="bg-blue-900 p-3 rounded-lg w-full"
                        >
                            {loading ? "Processing..." : "Pay"}
                        </button>
                    </div>

                    {paymentError && (
                        <p className="text-red-500 mt-2">{paymentError}</p>
                    )}
                </form>
            </div>
        </div>
    );
};

const Payment = () => {
    const [stripePromise, setStripePromise] = useState(null);

    useEffect(() => {
        const loadStripeJs = async () => {
            const stripeObj = await loadStripe(
                `${import.meta.env.VITE_STRIPE_KEY}`,
            );
            setStripePromise(() => stripeObj);
        };

        loadStripeJs();
    }, []);

    return (
        <div>
            {stripePromise && (
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
};

export default Payment;
