import racoonImage from "../assets/racoon.svg";
import { Button } from "./ui/button";

export default function WildlifeSection() {
  return (
    <div
      id="info-section"
      className="relative h-[30rem] bg-[#0B0E15] text-white"
    >
      <div id="forest_silhouette" className="h-96"></div>
      <div
        id="content"
        className="flex justify-center items-center bg-black w-full h-[40rem]"
      >
        <div className="flex justify-between items-center h-full px-64">
          <div className="w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-4">
                <h2 className="text-2xl left_side_border">
                  Discover Captivating Wildlife
                </h2>
                <img
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

          <div className="w-1/2 flex flex-col items-center">
            <div className="relative w-64 h-64 mb-4 flex justify-center items-center">
              <div
                id="bear"
                className="absolute w-full h-full rounded-full bg-cover bg-center scale-150 animate-pulse-shadow"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
