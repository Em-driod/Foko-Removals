import Hero from "../component/hero";
import Offer from "../component/offer";
import About from "../component/about";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
     <Offer />
     <About />
    </div>
  )
}

export default Home