import { Link } from "react-scroll";
import links from "../components/data/links";
import { nanoid } from "nanoid";

export default function Header() {
  const linkProps = {
    smooth: "easeOutQuart",
    duration: 1500,
  };

  const linksArray = links.map((name, i) => {
    return (
      <li>
        <Link
          to={name.link}
          {...linkProps}
          className="inline-block transition-transform duration-300 hover:scale-110"
          key={nanoid()}
        >
          {name.name}
        </Link>
      </li>
    );
  });

  return (
    <header>
      <nav>
        <ul className="flex gap-6 px-8 font-cg text-xl font-medium tracking-wide">
          {linksArray}
        </ul>
      </nav>
    </header>
  );
}
