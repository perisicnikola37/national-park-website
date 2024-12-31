import "@fortawesome/fontawesome-free/css/all.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import houseMountainsImage from "../assets/house.jpg";

export default function HouseMountainsSection() {
  return (
    <div
      id="analytics_section"
      className="relative text-black bg-white h-[60rem] w-full mt-36"
    >
      {/* Gradient to cover the top, including corners */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent h-[30%] w-full"></div>
      {/* Additional white coverage for top-left and top-right corners */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-white"></div>

      <LazyLoadImage
        src={houseMountainsImage}
        className="w-full h-full object-cover"
      />

      <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 text-center px-6">
        <h1 className="text-2xl font-semibold mb-4">
          Your Exploration Starts Here
        </h1>
        <p className="text-lg mb-6 w-[60%] m-auto">
          Our mission is to provide unique experiences for adventurers who seek
          more than just a destination. Explore with us!
        </p>
        <hr className="border-black w-9/12 m-auto" />

        <div className="flex justify-evenly items-center text-lg mt-3">
          <a href="tel:+1234567890" className="text-left">
            +1 (234) 567-890
          </a>
          <a href="mailto:contact@explore.com" className="text-right">
            contact@explore.com
          </a>
        </div>
      </div>
    </div>
  );
}
