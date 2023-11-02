import Particles from "react-particles";
import sound from "./assets/audio/sound.wav";
import { loadFull } from "tsparticles";
import { useCallback, useState, useEffect } from "react";
import "./App.scss";
import Logo from "./assets/image/logo.PNG";
import PlayIcon from "./assets/image/icons/play.svg";
import SideBarList from "./components/SideBarList/SideBarList";

const App = () => {
  //Bacckground Animation
  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#2cc6e6", "#5dddd0", "#226ce0", "#874a97"],
      },
      shape: {
        type: "triangle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 8 },
      },
      links: {
        enable: true,
        distance: 145,
        color: "#FAFA33",
        opacity: 0.6,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 120,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  //Background Music
  const [audio, setAudio] = useState(null);

  function playOrPause() {
    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }

  useEffect(() => {
    setAudio(new Audio(sound));
  }, [sound]);

  return (
    <>
      <Particles options={options} init={particlesInit} />
      <div className="app">
        <img className="app__logo" src={Logo} alt="Logo" />
        <div className="main__slogan">Discover more of London with us</div>
        <SideBarList />
        <button className="main__button" onClick={() => playOrPause()}>
          <img
            className="header__upload--icon"
            src={PlayIcon}
            alt="Upload Icon"
          ></img>
        </button>
      </div>
    </>
  );
};

export default App;
