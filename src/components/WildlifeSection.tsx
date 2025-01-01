import { LazyLoadImage } from "react-lazy-load-image-component";
import racoonImage from "../assets/racoon.svg";
import { Button } from "./ui/button";

import "@fortawesome/fontawesome-free/css/all.min.css";
export default function WildlifeSection() {
  return (
    <div id="join_us_section" className="relative bg-[#0B0E15] text-white">
      <div id="forest_silhouette" className="h-96"></div>
      <div
        id="content"
        className="flex flex-col justify-center items-center bg-black w-[full]"
      >
        <div className="flex justify-between items-center w-full px-8 lg:px-64 h-[40rem]">
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-4">
                <h2 id="scroll_location" className="text-2xl left_side_border">
                  Discover Captivating Wildlife
                </h2>
                <LazyLoadImage
                  effect="blur"
                  src={racoonImage}
                  height={30}
                  width={30}
                  className="ml-2 opacity-80"
                />
              </div>

              <p className="mb-4 text-sm">
                From graceful deer grazing in meadows to the melodious songs of
                birds echoing through the trees, our park is a haven for both
                native and exotic species. Our commitment to conservation
                ensures that you'll encounter creatures thriving in habitats
                carefully designed to mirror their natural environments. <br />
                <br />
                Observe the intricate behaviors of playful otters as they frolic
                in their aquatic playground, or witness the majestic flight of
                eagles soaring high above.
              </p>
            </div>
            <Button variant="outline" className="w-[30%] rounded-full">
              Show all animals
            </Button>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="relative w-64 h-64 mb-4 flex justify-center items-center">
              <div
                id="bear"
                className="absolute w-full h-full rounded-full bg-cover bg-center scale-150 animate-pulse-shadow"
              >
                <div className="eye left-eye"></div>
                <div className="eye right-eye"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center w-[100rem] mt-[-5rem] lg:px-96 py-16">
          <div
            id="left_box"
            className="lg:w-1/2 flex justify-center items-center bg-cover bg-center h-[30rem]"
          >
            <div id="left_box" className="w-full h-full"></div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center bg-[#1A1A1A] h-[30rem]">
            <div className="text-white text-center flex flex-col justify-center items-center h-full space-y-6 px-4">
              <p className="text-lg italic font-light w-[80%]">
                &ldquo;Join us on a journey that promises not just a glimpse of
                the animal realm, but an immersive adventure that leaves you
                with a newfound reverence for the intricate tapestry of
                life.&rdquo;
              </p>
              <div className="text-lg font-semibold">
                <p>Richard Zong</p>
                <p className="text-sm font-normal italic">
                  Adventure Enthusiast
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-8 mb-24">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Why We Are Special?
          </h3>
          <div className="relative flex justify-center items-center">
            <div className="w-16 h-16 border-2 border-dashed border-gray-400 rounded-full flex justify-center items-center">
              <i className="fas fa-arrow-down text-gray-400 text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
