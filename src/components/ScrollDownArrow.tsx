import { useEffect, useState } from "react";

const ScrollDownArrow = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScrollDown = () => {
    const element = document.getElementById("scroll_location");

    if (element) {
      element.scrollIntoView({
        block: "start",
      });
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isVisible ? (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 animate-bounce cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={handleScrollDown}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  ) : null;
};

export default ScrollDownArrow;
