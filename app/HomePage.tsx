import AboutUs from "./_components/ui/about";
import AboutLocalization from "./_components/ui/about-localization";
import FeedbackClient from "./_components/ui/feedback-client";
import Footer from "./_components/ui/footer";
import Header from "./_components/ui/header";
import HeroHome from "./_components/ui/heroHome";
import SectionHomeInfor from "./_components/ui/section-home-infor";
import SectionHomeMessage from "./_components/ui/section-home-message";
import SectionProperty from "./_components/ui/section-property";
import Statistic from "./_components/ui/statistc";

const HomePage = () => {
  return (
    <div>
      <HeroHome />
      <Statistic />
      <SectionHomeInfor />
      <SectionProperty />
      <AboutUs />
      <AboutLocalization />
      {/* 
      <FeedbackClient /> */}
      <SectionHomeMessage />
      <Footer />
    </div>
  );
};

export default HomePage;
