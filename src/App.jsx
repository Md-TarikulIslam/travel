import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import img from '../src/assets/images/loader.png'

function App() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);
    return (
        <>
            {loading ? <div className="flex justify-center items-center h-screen w-full"><img className="animate-spin" src={img} alt="" /></div> : <RouterProvider router={router}></RouterProvider>}
            <ToastContainer position="bottom-center" />
        </>
    );
}

export default App;
