import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <RouterProvider basename='https://patagoniaexplore.com/' router={router}></RouterProvider>
            <ToastContainer position="bottom-center" />
        </>
    );
}

export default App;
