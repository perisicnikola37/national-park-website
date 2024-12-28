import Particles from "react-particles";
import { type Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

function App() {
  const particleOptions = {
    preset: "stars",
    background: {
      color: {
        value: "",
      },
    },
    style: {
      width: "100%",
      height: "30vh",
    },
    particles: {
      number: {
        density: {
          enable: true,
          value_area: 300,
        },
      },
    },
  };

  const customInit = async (engine: Engine) => {
    const test = await loadStarsPreset(engine);
    return test;
  };

  return (
    <>
      <div id="tsparticles">
        <Particles options={particleOptions} init={customInit} />
      </div>
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
    </>
  );
}

export default App;
