import React from "react";
import failImg from '../assets/images/payment/2.gif'
import { Button, Card, CardBody, Chip } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const PaymentCancelPage = () => {
    return <div className="h-screen flex flex-col justify-center items-center w-full">

    <Chip
        variant="ghost"
        color="red"
        size="lg"
        value="Status : Fail"
        className="max-w-min mx-auto"
        icon={
            <span className="mx-auto mt-2 block h-2 w-2 rounded-full bg-red-900 content-['']" />
        }
    />
    <div className="mt-8">
        <Card className="rounded-3xl w-[40rem] bg-red-50">
            <CardBody>
                <img className="w-60 mx-auto" src={failImg} alt="" />
                <p className="text-center my-6 font-bold text-2xl">
                    Payment Unsuccessful
                </p>

                <Link to="/login">
                    {" "}
                    <Button
                        color="blue"
                        fullWidth
                        className="bg-[#1d355e] tracking-widest"
                    >
                       try again
                    </Button>
                </Link>
            </CardBody>
        </Card>
    </div>
</div>;
};

export default PaymentCancelPage;
