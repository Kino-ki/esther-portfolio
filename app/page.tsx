import ContactSection from "@/components/ContactSection";
import AboutSection from "../components/AboutSection";
import FirstSection from "../components/FirstSection";
import WorksSection from "../components/WorksSection";
import LangButton from "@/components/BilingualProvider/langButton";
import { getFirstSection, getAboutSection, getWorksSection } from "@/sanity/sanity-utils";

export default async function LandingPage() {
  const [firstSectionData, aboutData, worksData] = await Promise.all([
    getFirstSection(),
    getAboutSection(),
    getWorksSection(),
  ]);

  return (
    <div className="flex flex-col justify-center relative ">
      <div className="sticky top-0 ">
        <FirstSection data={firstSectionData[0]} />
      </div>
      <div className=" bg-bgcolour shadow-[1px_-11px_19px_1px_rgba(21,20,20,0.5)] rounded-md  z-30">
        <div className="md:mt-5 " id="works">
          <WorksSection data={worksData} />
        </div>
        <div id="about" className="md:my-44 mb-20 mt-48">
          <AboutSection data={aboutData[0]} />
        </div>
        <div id="contact" className="">
          <ContactSection />
        </div>
        <div className="fixed left-4 bottom-10 backdrop-blur-[1px] md:hidden">
          <LangButton />
        </div>
      </div>
    </div>
  );
}
