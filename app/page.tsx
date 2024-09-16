import ContactSection from "@/components/ContactSection";
import AboutSection from "../components/AboutSection";
import FirstSection from "../components/FirstSection";
import WorksSection from "../components/WorksSection";


export default function LandingPage() {
  return (
    <div className="flex flex-col justify-center ">
      <div className="sticky top-0 ">
        <FirstSection />
      </div>
      <div className=" bg-bgcolour shadow-[1px_-11px_19px_1px_rgba(21,20,20,0.5)] rounded-md relative z-30">
        <div className="md:mt-5 " id="works">
          <WorksSection />
        </div>
        <div id="about" className="md:my-52 mb-20 mt-48">
          <AboutSection />
        </div>
        <div id="contact" className="">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
