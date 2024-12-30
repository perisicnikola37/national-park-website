import image from "../src/image.png";
import StarParticlesComponent from "./components/StarParticlesComponent";

function App() {
  return (
    <>
      <StarParticlesComponent />
      <div id="hero">
        <header>
          <div className="logo">ParkScape Adventures</div>
          <nav>
            <ul>
              <li>
                <a href="#link1">About camp</a>
              </li>
              <li>
                <a href="#link2">Events</a>
              </li>
              <li>
                <a href="#link3">Sign in</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="content">
          <p className="left-text">lescale camping pointe</p>
          <div className="centeredText">
            <p>Your Adventure Begins Here</p>
            <p>Discover the Great Outdoors</p>
            <p className="stretched">
              Discover the magic of untouched landscapes, connect with nature in
              its purest form, and awaken your sense of wonder as you navigate
              through rugged trails, lush forests, and tranquil lakes.
            </p>
          </div>
        </div>
        <div className="smoke-container">
          <svg>
            <path d="M 150 0 Q 200 100 100 250 C 0 450 120 400 50 600" />
          </svg>
        </div>
        <div className="reserve-btn-container">
          <center>
            <button className="reserve-btn">Reserve a Spot</button>
            <p className="price">Starts at $299 / night</p>
          </center>
        </div>
      </div>

      <div id="info-section" className="bg-[#0C0E16] py-16 text-white p-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Box (Image) */}
          <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
            <img src={image} height={630} width={630} alt="Nature" />
          </div>

          {/* Right Box (Text) */}
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-xl font-bold mb-4">Explore the Wilderness</h1>
            <p className="text-lg">
              Join us for an unforgettable experience in the heart of nature.
              Our national park offers a variety of activities for all ages,
              from hiking and camping to bird watching and stargazing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
