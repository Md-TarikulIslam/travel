import { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { auth, googleProvider, facebookProvider } from "../firebase.init";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    signInWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
    const navigate = useNavigate();
    const [isContainerActive, setIsContainerActive] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUpButton = () => {
        setIsContainerActive(true);
    };

    const signInButton = () => {
        setIsContainerActive(false);
    };

    const handleReset = () => {
        navigate("/reset-password");
    };

    const handleSocialLogin = async (provider) => {
        const response = await signInWithPopup(auth, provider);

        const userInfo = {
            name: response?.user?.displayName,
            email: response?.user?.email || `${response?.user?.displayName}@example.com`,
            avatar: response?.user?.photoURL,
        };

        fetch("https://server.patagoniaexplore.com/api/signup", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("travel-token", data.token);
            });

        navigate("/");
    };

    const handleEmailPasswordLogin = async () => {
        try {
            if (isContainerActive) {
                await createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;

                        
                        sendEmailVerification(user);

                        fetch(
                            "https://server.patagoniaexplore.com/api/signup",
                            {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json",
                                },
                                body: JSON.stringify({
                                    name,
                                    email,
                                    avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                                }),
                            },
                        )
                            .then((res) => res.json())
                            .then((data) => {
                                localStorage.setItem(
                                    "travel-token",
                                    data.token,
                                );
                            });
                        toast("Account created. Please check your email for verification.");
                        navigate("/");
                    })
                    .catch((error) => {
                        showMessage(error);
                    });
            } else {
                await signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;

                       
                        if (user && !user.emailVerified) {
                            toast("Please verify your email before signing in.");
                            return;
                        }

                        fetch(
                            "https://server.patagoniaexplore.com/api/signin",
                            {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json",
                                },
                                body: JSON.stringify({
                                    email,
                                }),
                            },
                        )
                            .then((res) => res.json())
                            .then((data) => {
                                
                                localStorage.setItem(
                                    "travel-token",
                                    data.token,
                                );
                            });
                        navigate("/");
                    })
                    .catch((error) => {
                        showMessage(error);
                    });
            }
        } catch (error) {
            console.log("Final Error: ", error);
        }
    };

    const showMessage = (error) => {
        if (error.code === "auth/invalid-login-credentials") {
            toast("Enter right email and password");
        }
        if (error.code === "auth/wrong-password") {
            toast("Wrong password");
        }
        if (error.code === "auth/invalid-email") {
            toast("Invalid email");
        }
        if (error.code === "auth/email-already-in-use") {
            toast("Email already in use");
        }
        if (error.code === "auth/weak-password") {
            toast("Weak password");
        }
        if (error.code === "auth/missing-email") {
            toast("Missing email");
        }
        if (error.code === "auth/missing-password") {
            toast("Missing password");
        }
    };

    return (
        <section className="flex justify-center items-center h-[100vh] bg-gradient-to-r from-[#777698] to-[#3c849a]">
            <div
                className={`container bg-white rounded-[30px] sm:mt-16 mt-5 shadow-lg relative overflow-hidden w-[768px] max-w-full min-h-[480px] mx-4 ${isContainerActive ? "active" : ""
                    } `}
            >
                <div className="absolute top-0 h-full transition-all duration-500 right-[100%] sm-right-0 sm:left-0 sm:w-[50%] w-[100%] opacity-0 z-[1] form-container  sign-up">
                    <div className="bg-white flex items-center justify-center flex-col sm:px-10 px-5 h-full">
                        <h1 className="text-3xl font-semibold text-black">
                            Create Account
                        </h1>
                        <p className="mt-2 sm:hidden block text-black">
                            Already have an account?{" "}
                            <span
                                onClick={signInButton}
                                className="text-blue-500 cursor-pointer"
                            >
                                Sign In
                            </span>
                        </p>
                        <div className="social-icons my-5">
                            <div
                                onClick={() =>
                                    handleSocialLogin(googleProvider)
                                }
                                className="text-[#333] text-[13px] mt-3.5 mb-2.5 border border-[#ccc] rounded-[20%] inline-flex justify-center items-center mx-1 w-10 h-10 cursor-pointer"
                            >
                                <FaGoogle />
                            </div>
                            <div
                                onClick={() =>
                                    handleSocialLogin(facebookProvider)
                                }
                                className="text-[#333] text-[13px] mt-3.5 mb-2.5 border border-[#ccc] rounded-[20%] inline-flex justify-center items-center mx-1 w-10 h-10 cursor-pointer"
                            >
                                <FaFacebookF />
                            </div>
                        </div>
                        <span className="text-[12px] mb-2 text-black">
                            or use your email for registeration
                        </span>
                        <input
                            className="bg-[#eee] border-none my-2 py-2.5 px-3.5 text-[13px] rounded-lg w-full outline-none"
                            type="text"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className="bg-[#eee] border-none my-2 py-2.5 px-3.5 text-[13px] rounded-lg w-full outline-none"
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="bg-[#eee] border-none my-2 py-2.5 px-3.5 text-[13px] rounded-lg w-full outline-none"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            onClick={handleEmailPasswordLogin}
                            className=" bg-[#512da8] text-white text-[12px] py-2.5 px-11 border border-transparent rounded-lg font-semibold tracking-[0.5px] uppercase mt-2.5 cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>

                <div className="absolute top-0 h-full transition-all duration-500 left-0 sm:w-[50%] w-full z-[2] sign-in form-container">
                    <div className="bg-white flex items-center justify-center flex-col sm:px-10 px-5 h-full">
                        <h1 className="text-3xl font-semibold">Sign In</h1>
                        <p className="mt-2 sm:hidden block">
                            For create a new account?{" "}
                            <span
                                onClick={signUpButton}
                                className="text-blue-500 cursor-pointer"
                            >
                                Sign Up
                            </span>
                        </p>
                        <div className="social-icons my-5">
                            <div
                                onClick={() =>
                                    handleSocialLogin(googleProvider)
                                }
                                className="text-[#333] text-[13px] mt-3.5 mb-2.5 border border-[#ccc] rounded-[20%] inline-flex justify-center items-center mx-2 w-10 h-10 cursor-pointer"
                            >
                                <FaGoogle />
                            </div>
                            <div
                                onClick={() =>
                                    handleSocialLogin(facebookProvider)
                                }
                                className="text-[#333] text-[13px] mt-3.5 mb-2.5 border border-[#ccc] rounded-[20%] inline-flex justify-center items-center mx-2 w-10 h-10 cursor-pointer"
                            >
                                <FaFacebookF />
                            </div>
                        </div>
                        <span className="text-[12px] mb-2">
                            or use your email password
                        </span>
                        <input
                            className="bg-[#eee] border-none my-2 py-2.5 px-3.5 text-[13px] rounded-lg w-full outline-none"
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="bg-[#eee] border-none my-2 py-2.5 px-3.5 text-[13px] rounded-lg w-full outline-none"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p>
                            Forget Your Password?{" "}
                            <button onClick={handleReset} className="text-blue-500">Reset</button>
                        </p>
                        <button
                            onClick={handleEmailPasswordLogin}
                            className=" bg-[#512da8] text-white text-[12px] py-2.5 px-11 border border-transparent rounded-lg font-semibold tracking-[0.5px] uppercase mt-2.5 cursor-pointer"
                        >
                            Sign In
                        </button>
                    </div>
                </div>
                <div className="toggle-container sm:block hidden">
                    <div className="toggle bg-[#512da8] h-full bg-gradient-to-r from-[#5c6bc0] to-[#512da8] text-white relative -left-[100%] w-[200%] translate-x-0 transition-all ">
                        <div className="toggle-panel toggle-left">
                            <h1 className="text-3xl font-semibold">
                                Welcome Back!
                            </h1>
                            <p className="text-sm leading-5 tracking-[0.3px] my-5">
                                Enter your personal details to use all of site
                                features
                            </p>
                            <button
                                onClick={signInButton}
                                className="text-white text-[12px] py-2.5 px-11 border border-white rounded-lg font-semibold tracking-[0.5px] uppercase mt-2.5 cursor-pointer bg-transparent"
                                id="login"
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1 className="text-3xl font-semibold">
                                Hello, Friend!
                            </h1>
                            <p className="text-sm leading-5 tracking-[0.3px] my-5">
                                Register with your personal details to use all
                                of site features
                            </p>
                            <button
                                onClick={signUpButton}
                                className="text-white text-[12px] py-2.5 px-11 border border-white rounded-lg font-semibold tracking-[0.5px] uppercase mt-2.5 cursor-pointer bg-transparent"
                                id="register"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
