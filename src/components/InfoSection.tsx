import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import mapImage from "../assets/map.jpg";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";

export default function InfoSection() {
  return (
    <div
      id="info-section"
      className="bg-[#0C0E16] text-white h-[50rem] flex items-center justify-center px-4 lg:px-16 md:px-8"
    >
      <div className="container pl-44 pr-44 mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        <p className="right-text">40.71° N, 74.60° W</p>
        <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 relative select-none">
          <div className="circle pulse blue z-10"></div>
          <div className="circle pulse red z-10"></div>
          <div className="relative">
            <LazyLoadImage
              effect="blur"
              src={mapImage}
              height={630}
              width={630}
              alt={"Map of Bois-de-Liesse Nature Park"}
            />
            <div className="absolute top-0 text-white">
              <h2 className="text-2xl font-bold">Bois-de-Liesse</h2>
              <p className="text-lg">Nature park</p>
            </div>
          </div>
        </div>
        <div id="explore_section" className="md:w-1/2 md:pl-16">
          <h1 className="text-xl font-bold mb-4">
            Explore Special Camping Spots
          </h1>
          <p className="text-sm text-gray-300">
            Embark on an unforgettable journey of exploration as you venture
            into the heart of the wilderness with our camp experiences.
          </p>
          <p className="text-sm text-gray-300 mt-4">
            Whether you're a seasoned outdoor enthusiast or new to the world of
            camping, our expert guides will lead you on a path of discovery,
            sharing their knowledge of flora, fauna, and survival skills. Get
            ready to forge new connections, kindle your spirit of adventure, and
            create lasting memories in the great outdoors.
          </p>
          <div className="flex mt-4 space-x-4 select-none">
            <LazyLoadImage
              effect="blur"
              src={photo1}
              alt={"Photo 1"}
              className="w-60 h-32 rounded-sm"
            />
            <LazyLoadImage
              effect="blur"
              src={photo2}
              alt={"Photo 2"}
              className="w-60 h-32 object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
