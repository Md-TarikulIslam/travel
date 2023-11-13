import React, { useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,

} from "@material-tailwind/react";
import logo from '../../assets/images/logo/logo2.png'

export default function Header() {
    const [openNav, setOpenNav] = React.useState(false);
    const [navbarColor, setNavbarColor] = React.useState("transparent");
    const [navListColor, setNavListColor] = React.useState("white");

    React.useEffect(() => {
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
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="md"
                color={navListColor}
                className="p-1 font-normal hover:text-blue-600"
            >
                <a href="#" className="flex items-center">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="md"
               color={navListColor}
                className="p-1 font-normal hover:text-blue-600"
            >
                <a href="#" className="flex items-center">
                    About
                </a>
            </Typography>
            <Typography
                as="li"
                variant="md"
               color={navListColor}
                className="p-1 font-normal hover:text-blue-600"
            >
                <a href="#" className="flex items-center">
                    Destination
                </a>
            </Typography>
            <Typography
                as="li"
                variant="md"
               color={navListColor}
                className="p-1 font-normal hover:text-blue-600"
            >
                <a href="#" className="flex items-center">
                    Gallery
                </a>
            </Typography>
            <Typography
                as="li"
                variant="md"
               color={navListColor}
                className="p-1 font-normal hover:text-blue-600"
            >
                <a href="#" className="flex items-center">
                    Contact
                </a>
            </Typography>
        </ul>
    );

    return (

        <div className={`fixed top-0 z-50 shadow-none max-w-screen-3xl  mx-auto w-full rounded-none border-none px-4 py-2 lg:px-0 lg:py-2 transition-all duration-300 bg-${navbarColor}`}>
            <div className="bg-transparent container max-width flex items-center justify-between text-white-900 w-full">
                <img className="lg:w-48 w-36" src={logo} alt="logo" />
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <Button
                        color="blue"
                        size="md"
                        className="hidden lg:inline-block bg-[#1d355e] tracking-widest"
                    >
                        <span>Book now</span>
                    </Button>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
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
                                className="h-6 w-6"
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
            <MobileNav open={openNav}>
                {navList}

                <Button fullWidth color="blue" size="md" className="bg-[#1d355e]">
                    <span>Book now</span>
                </Button>
            </MobileNav>
        </div>
    );
}