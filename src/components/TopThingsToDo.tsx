import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button } from "./ui/button";

export default function TopThingsToDo() {
  return (
    <div
      id="analytics_section"
      className="relative text-black bg-white w-full pl-64 pr-64 mt-36"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="relative">
          <img
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
          <img
            src="https://plus.unsplash.com/premium_photo-1664358190450-2d84d93b9546?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Thing 1"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="relative">
          <img
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
