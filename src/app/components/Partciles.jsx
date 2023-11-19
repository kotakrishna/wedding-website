"use client";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

export const ParticlesComponents = () => {
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      particles: {
        text:"data",
        color: { value: "#fff" },
        move: {
          direction: "bottom",
          enable: true,
          outModes: "out",
          speed: 2,
        },
        number: {
          density: {
            enable: true,
            area: 500,
          },
          value: 400,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 }, // let's randomize the particles size a bit
        },
        wobble: {
          enable: true,
          distance: 10,
          speed: 10,
        },
        zIndex: {
          value: { min: 0, max: 100 },
        },
      },
    };
    return {
      // background: {
      //   color: "#000", // this sets a background color for the canvas
      // },
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // enables the click event
            mode: "push", // adds the particles on click
          },
          onHover: {
            enable: true, // enables the hover event
            mode: "repulse", // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        links: {
          enable: true, // enabling this will make particles linked together
          distance: 200, // maximum distance for linking the particles
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 1, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 1, max: 3 }, // let's randomize the particles size a bit
        },
      },
    };
  }, []);
  const particlesInt = useCallback((engine) => {
    loadSlim(engine);
  }, []);
  return <Particles init={particlesInt} options={options} />;
};

export default ParticlesComponents;
