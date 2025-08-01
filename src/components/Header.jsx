export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex gap-6 px-8 font-cg text-xl font-medium tracking-wide">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#craft">Craft</a>
          </li>
          <li>
            <a href="#zen">Zen</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
