import React, { useEffect, useState } from "react";
import Particles from "react-particles";
import { type Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

const StarParticlesComponent: React.FC = () => {
  const [showParticles, setShowParticles] = useState(true);

  const particleOptions = {
    preset: "stars",
    background: {
      color: {
        value: "",
      },
    },
    style: {
      width: "100%",
      height: "29vh",
    },
    particles: {
      number: {
        density: {
          value_area: 100,
        },
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: true,
          speed: 5,
          opacity_min: 0.5,
          sync: true,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 5,
          size_min: 0.5,
          sync: false,
        },
      },
    },
  };

  const customInit = async (engine: Engine) => {
    await loadStarsPreset(engine);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.1;
      setShowParticles(window.scrollY < scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="tsparticles">
      {showParticles && (
        <Particles options={particleOptions} init={customInit} />
      )}
    </div>
  );
};

export default StarParticlesComponent;
