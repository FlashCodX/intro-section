import hero from "../assets/image-hero-desktop.png";
import styles from "../styles/app.module.css";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const audiophile = require("../assets/client-audiophile.svg").default;
const databiz = require("../assets/client-databiz.svg").default;
const maker = require("../assets/client-maker.svg").default;
const meet = require("../assets/client-meet.svg").default;
function App() {
  const {
    container,
    navs,
    contentContainer,
    iconsContainer,
    imageContainer,
    buttonContainer,
    content,
    heroImage,
  } = styles;
  return (
    <>
      <main className={container}>
        <div className={navs}>
          <Navbar />
          <MobileNav />
        </div>
        <div className={contentContainer}>
          <div className={content}>
            <h1>
              Make <br /> remote work
            </h1>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <div className={buttonContainer}>
              <button>Learn more</button>
            </div>
            <div className={iconsContainer}>
              <img src={databiz} alt="" />
              <img src={audiophile} alt="" />
              <img src={meet} alt="" />
              <img src={maker} alt="" />
            </div>
          </div>
          <div className={imageContainer}>
            <img className={heroImage} src={hero} alt="hero" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
