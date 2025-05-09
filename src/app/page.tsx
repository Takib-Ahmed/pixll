import Header from "@/shared/widgets/Header";
import Hero from "@/shared/modules/Hero";
import Showcase from "@/shared/modules/Showcase";
import Services from "@/shared/modules/Services";
import Recents from "@/shared/modules/Recents";
import Featured from "@/shared/modules/Featuredfaqs";
import Button from "@/shared/components/Button";
import Footer from "@/shared/widgets/Footer";
import Linkicn from "@/assets/icons/Linkicn";
export default function Home() {
  return (
    <>
      <Header />
      <div className="  font-RethinkSans">
        <Hero />

        <Showcase />

        <Services />

        <Recents />
        <div className="  flex justify-center p-5  md:p-10 lg:p-20 ">
          <Button className='   h-8 md:h-10  lg:h-18  '>View more
            <Linkicn className='  w-[16px] sm:w-[20px] md:w-[24px] lg:w-[28px] '/>
          </Button>
        </div>
        <Featured />
        <div className="  flex justify-center  p-10 lg:p-20 ">
          <Button className=' h-8 md:h-10   lg:h-18   '>View more
            <Linkicn className='  w-[16px] sm:w-[20px] md:w-[24px] lg:w-[28px] '/>
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
}
