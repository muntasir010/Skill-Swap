import Features from "../components/Features";
import Hero from "../components/Hero";
import Items from "../components/Items";
import About from "./About";

const Home = () => {
    return (
        <div>
            <Hero />
            <Items/>
            <About/>
            <Features/>
        </div>
    );
};

export default Home;