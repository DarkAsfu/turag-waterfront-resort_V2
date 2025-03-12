import About from "./Module/About";
import Accommodations from "./Module/Accommodations";
import ActivitiesCard from "./Module/ActivitiesCard";
import Banner from "./Module/Banner";
import BannerWrapper from "./Module/BannerWrapper";
import BgWithText from "./Module/BgWithText";

const Home = () => {
  return (
    <div>
      {/* <BannerWrapper /> */}
      <Banner/>
      <About/>
      <Accommodations/>
      <BgWithText/>
      <ActivitiesCard/>
    </div>
  );
};

export default Home;
