import { Button, Card, CardBody, Chip } from "@material-tailwind/react";
import successImg from "../assets/images/payment/1.gif";
import { Link } from "react-router-dom";

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
