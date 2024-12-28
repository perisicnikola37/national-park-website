import React from "react";
import Particles from "react-particles";
import { type Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

const StarParticlesComponent: React.FC = () => {
  const particleOptions = {
    preset: "stars",
    background: {
      color: {
        value: "",
      },
    },
    style: {
      width: "100%",
      height: "30vh",
    },
    particles: {
      number: {
        density: {
          value_area: 130,
        },
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: true,
          speed: 4,
          opacity_min: 0.5,
          sync: false,
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

  return (
    <div id="tsparticles">
      <Particles options={particleOptions} init={customInit} />
    </div>
  );
};

export default StarParticlesComponent;
