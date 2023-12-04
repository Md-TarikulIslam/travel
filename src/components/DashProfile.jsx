import React, { useEffect, useState } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { auth } from "../firebase.init";

const DashProfile = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/api/user/${auth.currentUser?.email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("travel-token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, []);

    return (
        <div>
            <div className="text-center my-10">
                {!user && <h1>You are signed in with Facebook.</h1>}
            </div>
            {user && (
                <div className="flex flex-col lg:flex-row px-2 lg:px-0 items-center gap-4">
                    <div className="basis-5/12 w-full">
                        <img
                            className="rounded-2xl drop-shadow-2xl h-72 w-full object-cover"
                            src={user?.avatar}
                            alt=""
                        />
                    </div>
                    <div className="basis-7/12 w-full">
                        <Card className="w-full h-72 flex flex-col justify-center items-center drop-shadow-xl rounded-2xl">
                            <CardBody>
                                <div className=" h-full w-full ">
                                    <p className="font-bold">
                                        Name:{" "}
                                        <span className="text-[#eb7315]">
                                            {user?.name}
                                        </span>
                                    </p>
                                    <p className="font-bold">
                                        Phone:{" "}
                                        <span className="text-[#eb7315]">
                                            {user?.phone}
                                        </span>
                                    </p>
                                    <p className="font-bold">
                                        Email:{" "}
                                        <span className="text-[#eb7315]">
                                            {user?.email}
                                        </span>
                                    </p>
                                    <p className="font-bold">
                                        Address:{" "}
                                        <span className="text-[#eb7315]">
                                            {user?.address}
                                        </span>
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashProfile;
