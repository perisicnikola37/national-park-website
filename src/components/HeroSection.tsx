import ScrollDownArrow from "./ScrollDownArrow";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
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
          <p className="first-letter:text-4xl">Discover the Great Outdoors</p>
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
          <Button variant={"reserve"}>Reserve a Spot</Button>
          <p className="price">
            Starts at &nbsp;
            <span className="font-semibold">
              <span className="text-sm">$</span>
              <span>299</span>
            </span>
            &nbsp; / night
          </p>
        </center>
      </div>
      <ScrollDownArrow />
    </div>
  );
}
