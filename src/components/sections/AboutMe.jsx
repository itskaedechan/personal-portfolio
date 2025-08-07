import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.div
      id="home"
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.8, delay: 1, ease: "easeOut" }}
      className="off-white bg-cream aboutMe sticky top-0 grid h-[649px] w-[240px] justify-center py-9 shadow"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
        className="auto-rows-5 mx-auto grid max-w-[185px]"
      >
        <img
          src="/images/profile-photo.jpg"
          alt="profile-photo"
          className="mx-auto h-[140px] w-[140px] rounded-full border-2 border-white object-cover"
        />
        <div>
          <img
            src="/icons/clover.svg"
            alt="clover-icon"
            className="h-[50px] w-[50px]"
          />
          <h1 className="charcoal-text font-cg font-medium leading-snug">
            About <br /> Me
          </h1>
        </div>

        <p className="charcoal-text">Hi, I’m Anne.</p>
        <p className="charcoal-text">
          Combining my tech experience with modern web tools, I build <br />
          user-friendly websites using HTML, CSS, JavaScript, and React. I enjoy
          turning ideas into functional and accessible web applications.
        </p>
      </motion.div>
    </motion.div>
  );
}
