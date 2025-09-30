import Hero from "../component/hero";
import Offer from "../component/offer";
import About from "../component/about";
import Why from "../component/why";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
     <Offer />
     <About />
     <Why />
    </div>
  )
}

export default Home