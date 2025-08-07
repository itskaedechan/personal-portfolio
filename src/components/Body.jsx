import ZenMoment from "./buttons/ZenMomentButton";
import Footer from "./Footer";
import SectionHeader from "./ui/SectionHeader";
import { sections } from "./data/sections";
import { motion } from "framer-motion";
import FadeInSection from "./ui/FadeInSection";

export default function Body() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, delay: 3 }}
      className="off-white bg-cream charcoal-text h-auto w-[640px] pb-5 font-cg font-medium shadow"
    >
      <div className="mx-auto flex max-w-[510px] flex-col py-10">
        {sections.map((section, index) => (
          <div key={section.id} id={section.id}>
            <SectionHeader title={section.title} isFirst={index === 0} />
            <FadeInSection>{section.component}</FadeInSection>
          </div>
        ))}
      </div>
      <FadeInSection>
        <ZenMoment />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </motion.div>
  );
}
