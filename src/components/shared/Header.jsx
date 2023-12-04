import {
    Avatar,
    Button,
    Collapse,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo2.png";
import { auth } from "../../firebase.init";

export default function Header() {
    const [openNav, setOpenNav] = useState(false);
    const [navbarColor, setNavbarColor] = useState("transparent");
    const [navListColor, setNavListColor] = useState("white");
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 70) {
                setNavbarColor("white");
                setNavListColor("black");
            } else {
                setNavbarColor("transparent");
                setNavListColor("white");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navList = (
        <ul className="mt-2 mb-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:bg-transparent pl-3 lg:pl-0 lg:py-0 py-2">
            <Typography
                as="li"
                variant="paragraph"
                className=" p-1 font-normal hover:text-blue-600 duration-200"
            >
                <NavLink to="/" className="flex items-center">
                    Home
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="paragraph"
                className="p-1 font-normal hover:text-blue-600 duration-200"
            >
                <NavLink to="/about" className="flex items-center">
                    About
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="paragraph"
                className="p-1 font-normal hover:text-blue-600 duration-200"
            >
                <NavLink to="/destination" className="flex items-center">
                    Destination
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="paragraph"
                className="p-1 font-normal hover:text-blue-600 duration-200"
            >
                <NavLink to="/gallery" className="flex items-center">
                    Gallery
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="paragraph"
                className="p-1 font-normal hover:text-blue-600 duration-200"
            >
                <NavLink to="/contact" className="flex items-center">
                    Contact
                </NavLink>
            </Typography>
        </ul>
    );

    return (
        <div
            className={`fixed top-0 z-50 shadow-none max-w-screen-3xl  mx-auto w-full rounded-none border-none px-4 py-2  lg:py-2 transition-all duration-300 bg-${navbarColor}`}
        >
            <div className="bg-transparent container max-width flex items-center justify-between text-white-900 w-full">
                <Link to="/">
                    <img className="lg:w-48 w-36 py-2" src={logo} alt="logo" />
                </Link>
                <div className={`mr-4 hidden lg:block text-${navListColor}`}>
                    {navList}
                </div>
                <div>
                    <Link to={`${auth && user ? "/destination" : "/login"}`}>
                        <Button
                            color="blue"
                            size="md"
                            className="hidden lg:inline-block bg-[#1d355e] tracking-widest"
                        >
                            <span> Book now</span>
                        </Button>
                    </Link>
                    {auth && user && (
                        <Link to="/dashboard">
                            <Avatar
                                src={
                                    user?.photoURL ||
                                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                }
                                alt="avatar"
                                variant="rounded"
                                size="sm"
                                className="absolute top-4 right-16 lg:right-32 lg:top-[22px]"
                            />
                        </Link>
                    )}
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-8 w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-8 w-8"
                            viewBox="0 0 26 26"
                            stroke="currentColor"
                            color={navListColor}
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            viewBox="0 0 26 26"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            color={navListColor}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav} className="text-black bg-white rounded-xl">
                {navList}
                {/* {auth && user && (
                        <Link to="/dashboard">
                            <Avatar
                                src={
                                    user?.photoURL ||
                                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                }
                                alt="avatar"
                                variant="rounded"
                                size="sm"
                                className="ml-8 hidden lg:inline-block"
                            />
                        </Link>
                    )} */}

                <Link to={`${auth && user ? "/destination" : "/login"}`}>
                    <Button
                        fullWidth
                        color="blue"
                        size="md"
                        className="bg-[#1d355e]"
                    >
                        <span>Book now</span>
                    </Button>
                </Link>
            </Collapse>
        </div>
    );
}
