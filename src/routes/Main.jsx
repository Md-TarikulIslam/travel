import { Outlet } from "react-router-dom"
import Header from "../components/shared/Header"
import Footer from "../components/shared/Footer"
import ScrollToTop from "../components/ScrollToTop"

const Main = () => {
    return (
        <div>
            <Header />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Main