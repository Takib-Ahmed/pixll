import Header from "@/shared/widgets/Header";
import Hero from "@/shared/modules/Hero";
import Services from "@/shared/modules/Services";
import Featured from "@/shared/modules/Featuredfaqs";
import Button from "@/shared/components/Button";
import Footer from "@/shared/widgets/Footer";
import Linkicn from "@/assets/icons/Linkicn";
import RecentWorks from "@/shared/modules/RecentWorks";
import Slidershowcase from "@/shared/modules/Slidershowcase";
export default function Home() {
  return (
    <>
      <Header />
      <div className="  font-RethinkSans">
        <Hero />

      <Slidershowcase/>

        <Services />

        <RecentWorks />
        <div className="  flex justify-center p-5  md:p-10 lg:p-20 ">
          <Button className="   h-8 md:h-10  lg:h-18  ">
            View more
            <Linkicn className="  w-[16px] sm:w-[20px] md:w-[24px] lg:w-[28px] " />
          </Button>
        </div>
        <Featured />
        <div className="  flex justify-center  p-10 lg:p-20 ">
          <Button className=" h-8 md:h-10   lg:h-18   ">
            View more
            <Linkicn className="  w-[16px] sm:w-[20px] md:w-[24px] lg:w-[28px] " />
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
}
