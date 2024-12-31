import { LazyLoadComponent } from "react-lazy-load-image-component";
import AnalyticsSection from "./components/AnalyticsSection";
import Author from "./components/Author";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import StarParticlesComponent from "./components/StarParticlesComponent";
import WildlifeSection from "./components/WildlifeSection";

function App() {
  return (
    <>
      <LazyLoadComponent threshold={100}>
        <StarParticlesComponent />
        <HeroSection />
        <Author />
        <InfoSection />
        <WildlifeSection />
        <AnalyticsSection />
      </LazyLoadComponent>
    </>
  );
}

export default App;
