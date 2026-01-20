import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SpringFest from "./components/SpringFest";
import WhyMentalHealth from "./components/WhyMentalHealth";
import Impact from "./components/Impact";
import FocusAreas from "./components/FocusAreas";
import Initiatives from "./components/Initiatives";
import CreativeHealing from "./components/CreativeHealing";
import PreviousWorks from "./components/PreviousWorks";
import Collaborators from "./components/Collaborators";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SpringFest />
      <WhyMentalHealth />
      <Impact />
      <FocusAreas />
      <Initiatives />
      <CreativeHealing />
      <PreviousWorks />
      <Collaborators />
      <Team />
      <Footer />
    </>
  );
}
