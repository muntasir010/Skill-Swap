import Hero from "../components/Hero";
import Items from "../components/Items";
import About from "./About";

const Home = () => {
    return (
        <div>
            <Hero />
            <Items/>
            <About/>
        </div>
    );
};

export default Home;