import "@fortawesome/fontawesome-free/css/all.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import leaf from "../assets/leaf.svg";
import { Button } from "./ui/button";
export default function TopThingsToDo() {
  return (
    <div
      id="top_things_to_do"
      className="relative text-black bg-white w-full pl-64 pr-64 mt-36"
    >
      <div className="w-full flex justify-center items-center">
        <div className="w-2/3 grid grid-rows-2 grid-flow-col justify-center gap-y-0 self-center m-auto text-center">
          <h1 className="text-[128px] font-bold font-mono flex md:text-light-blue row-span-2">
            TOP
          </h1>
          <h1 className="text-[64px] font-bold font-mono flex leading-[3rem] md:text-light-blue items-end p-0">
            things
          </h1>
          <h1 className="text-[64px] font-bold font-mono leading-[3.25rem] flex md:text-light-blue items-start p-0 relative">
            to do
            <img
              height={70}
              width={70}
              src={leaf}
              className="absolute top-10 right-0 transform translate-x-1/2 -translate-y-1/2"
            />
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-24">
        <div className="relative">
          <LazyLoadImage
            effect="blur"
            src="https://plus.unsplash.com/premium_photo-1664358190450-2d84d93b9546?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Thing 1"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
        <div className="relative flex items-center justify-center w-full bg-white text-black md:max-w-md">
          <div className="flex flex-col space-y-4 p-8 max-w-xl w-full">
            <h2 className="text-xl font-bold text-left">
              Special Private Tour
            </h2>
            <div className="flex items-center text-left">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-sm text-left flex-grow">
              A brief description of the activity goes here. Short and engaging.
            </p>
            <div className="flex flex-col mt-auto">
              <div className="flex justify-between items-center mb-4">
                <p className="text-xs text-gray-500">1.7k views ~ 478 likes</p>
              </div>
              <div className="flex justify-between items-center">
                <Button variant={"reserveOpposite"}>See details</Button>
                <p className="text-sm font-bold">Starts at $399 / group</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="relative flex items-center justify-center w-full bg-white text-black">
          <div className="flex flex-col space-y-4 p-8 max-w-xl w-full">
            <h2 className="text-xl font-bold text-left">
              Special Private Tour
            </h2>
            <div className="flex items-center text-left">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-sm text-left flex-grow">
              A brief description of the activity goes here. Short and engaging.
            </p>
            <div className="flex flex-col mt-auto">
              <div className="flex justify-between items-center mb-4">
                <p className="text-xs text-gray-500">1.7k views ~ 478 likes</p>
              </div>
              <div className="flex justify-between items-center">
                <Button variant={"reserveOpposite"}>See details</Button>
                <p className="text-sm font-bold">Starts at $399 / group</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <LazyLoadImage
            effect="blur"
            src="https://plus.unsplash.com/premium_photo-1664358190450-2d84d93b9546?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Thing 1"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="relative">
          <LazyLoadImage
            effect="blur"
            src="https://plus.unsplash.com/premium_photo-1664358190450-2d84d93b9546?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Thing 1"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
        <div className="relative flex items-center justify-center w-full bg-white text-black">
          <div className="flex flex-col space-y-4 p-8 max-w-xl w-full">
            <h2 className="text-xl font-bold text-left">
              Special Private Tour
            </h2>
            <div className="flex items-center text-left">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-sm text-left flex-grow">
              A brief description of the activity goes here. Short and engaging.
            </p>
            <div className="flex flex-col mt-auto">
              <div className="flex justify-between items-center mb-4">
                <p className="text-xs text-gray-500">1.7k views ~ 478 likes</p>
              </div>
              <div className="flex justify-between items-center">
                <Button variant={"reserveOpposite"}>See details</Button>
                <p className="text-sm font-bold">Starts at $399 / group</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
