import { Link } from "react-scroll";
import links from "../components/data/links";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";

export default function Header() {
  const linkProps = {
    smooth: "easeOutQuart",
    duration: 1500,
  };

  const linksArray = links.map((name) => (
    <li key={nanoid()}>
      <Link
        to={name.link}
        {...linkProps}
        className="inline-block transition-transform duration-300 hover:scale-110"
      >
        {name.name}
      </Link>
    </li>
  ));

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
    >
      <nav>
        <ul className="flex gap-6 px-8 font-cg text-xl font-medium tracking-wide">
          {linksArray}
        </ul>
      </nav>
    </motion.header>
  );
}
