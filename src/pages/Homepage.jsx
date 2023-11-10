import Banner from "../components/Banner"
import DiscoverWorld from "../components/DiscoverWorld"
import TravelCountries from "../components/TravelCountries"

const Homepage = () => {
  return (
    <div>
       <Banner />
        <div className="pt-32 pb-20">
        <DiscoverWorld />
        </div>
        <div className="py-20 bg-[#f4f5f8]">
        <TravelCountries />
        </div>
    </div>
  )
}

export default Homepage