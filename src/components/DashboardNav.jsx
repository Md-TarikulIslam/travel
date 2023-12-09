import { Card, CardBody } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/images/destination/destination.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.init";
import { toast } from "react-toastify";

const DashboardNav = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                localStorage.removeItem("travel-token");
                toast("Sign out successful");
                navigate("/");
                window.location.reload("/");
            })
            .catch((error) => {
                // An error happened.
            });
    };

    useEffect(() => {
        fetch(`https://server.patagoniaexplore.com/api/user/${auth.currentUser?.email}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("travel-token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            });
    }, []);

    return (
        <div className="">
            <div className="relative bg-black">
                <div className=" bg_overlay">
                    <img
                        className="h-[60vh] w-full object-cover opacity-100"
                        src={img}
                        alt="Banner Image"
                    />
                </div>
                <div className=" absolute z-10 top-48 2xl:left-52 text-white  px-4">
                    <p className="text-[13px] uppercase mb-1 tracking-[5px]">
                        All details
                    </p>
                    <h1 className="md:text-[48px] text-[40px] leading-[1.3em] font-bold mb-5 Kaushan">
                        <span className="text-[#2095AE]">Dashboard</span>
                    </h1>
                </div>
            </div>
            <div className="max-w-screen-lg mx-auto ">
                <div className="flex px-2 lg:px-0  items-center lg:gap-4 justify-center py-10 ">
                    <div>
                        <Link to="/dashboard/profile">
                            <Card className="w-32 lg:w-56 h-20 flex items-center justify-center bg-[#1d355e]">
                                <CardBody>
                                    <p className="text-white font-bold tracking-widest">
                                        Profile
                                    </p>
                                </CardBody>
                            </Card>
                        </Link>
                    </div>
                    <div>
                        <Link to="/dashboard/transaction">
                            <Card className="w-32 lg:w-56 h-20 flex items-center justify-center bg-[#1d355e]">
                                <CardBody>
                                    <p className="text-white font-bold tracking-widest">
                                        Transaction
                                    </p>
                                </CardBody>
                            </Card>
                        </Link>
                    </div>
                    {user?.role === "admin" && (
                        <div>
                            <Link to="/dashboard/users">
                                <Card className="w-32 lg:w-56 h-20 flex items-center justify-center bg-[#1d355e]">
                                    <CardBody>
                                        <p className="text-white font-bold tracking-widest">
                                            Users
                                        </p>
                                    </CardBody>
                                </Card>
                            </Link>
                        </div>
                    )}
                    <div>
                        <Card
                            onClick={handleSignOut}
                            className="w-32 lg:w-56 h-20 flex items-center justify-center bg-[#1d355e] cursor-pointer"
                        >
                            <CardBody>
                                <p className="text-white font-bold tracking-widest">
                                    Log Out
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;
