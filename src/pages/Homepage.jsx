import Banner from "../components/Banner"
import DiscoverWorld from "../components/DiscoverWorld"
import Review from "../components/Review"
import PopularTours from "../components/PopularTours"
import TravelCountries from "../components/TravelCountries"

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="pt-32 pb-20 px-4">
        <DiscoverWorld />
      </div>
      <div className="py-20 px-4 bg-[#f4f5f8]">
        <PopularTours />
      </div>
      <div className="py-20 px-4">
        <TravelCountries />
      </div>
      <div className="py-40 px-4 bg-[#f4f5f8]">
        <Review />
      </div>
    </div>
  )
}

export default Homepage