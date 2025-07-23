import ZenMoment from "./buttons/ZenMomentButton";
import Footer from "./Footer";
import SectionHeader from "./ui/SectionHeader";
import { sections } from "./data/sections";

export default function Body() {
  return (
    <div className="off-white bg-cream charcoal-text h-auto w-[640px] pb-5 font-cg font-medium shadow">
      <div className="mx-auto flex max-w-[510px] flex-col py-10">
        {sections.map((section, index) => (
          <div key={section.id} id={section.id}>
            <SectionHeader title={section.title} isFirst={index === 0} />
            {section.component}
          </div>
        ))}
      </div>
      <ZenMoment />
      <Footer />
    </div>
  );
}
