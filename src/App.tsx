import { Link } from "react-router-dom";
import logo from "../public/favicon.png";
import ScrollDownArrow from "./components/ScrollDownArrow";
import StarParticlesComponent from "./components/StarParticlesComponent";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./components/ui/hover-card";
import image from "./map.png";

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

        <div className="float-right absolute bottom-10 right-10 z-10">
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <Avatar>
                <AvatarImage src={logo} />
                <AvatarFallback>NP</AvatarFallback>
              </Avatar>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/79047182?v=4" />
                  <AvatarFallback>NP</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Project author</h4>
                  <p className="text-sm">Nikola Perišić - Software Engineer</p>
                  <div className="flex items-center pt-2">
                    <Link
                      to="https://github.com/perisicnikola37"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-xs text-muted-foreground">
                        GitHub
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <ScrollDownArrow />
      </div>
      <div id="info-section" className="bg-[#0C0E16] py-16 text-white p-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 relative">
            <div className="circle pulse blue"></div>
            <div className="circle pulse red"></div>
            <img src={image} height={630} width={630} alt="Background" />
          </div>

          <div id="scroll_location" className="md:w-1/2 md:pl-8">
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
