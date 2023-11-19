// import Particles from "react-particles";
import ParticlesComponents from "./components/Partciles";
import Gallery from "./components/Gallery";
import Title from "./components/Title";
import Events from "./components/Events";
// import HeroElement from "./compone";
export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Title />
      <Gallery />
      <Events/>
      <ParticlesComponents />
      {/* <ImagesLayout/> */}
    </>
  );
}
