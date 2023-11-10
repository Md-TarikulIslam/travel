import Banner from "../components/Banner"
import TravelCountries from "../components/TravelCountries"

const Homepage = () => {
  return (
    <div>
        <Banner />
        <div className="py-20">
        <TravelCountries />
        </div>
    </div>
  )
}

export default Homepage