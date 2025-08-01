import contacts from "../data/contacts.json";
import Button from "../buttons/Button";

export default function LetsConnect() {
  return (
    <div id="contact" className="mt-3 flex flex-col justify-center space-y-6">
      <div className="flex justify-center gap-6 sm:gap-8 md:gap-12">
        {contacts.map((social) => (
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            key={social.id}
            className="group relative flex"
          >
            <img src={social.img} alt={social.social} />
            <span className="text-md absolute left-10 top-9 rounded-md bg-gray-100 px-2 py-1 opacity-0 shadow transition duration-200 group-hover:opacity-100">
              {social.hover}
            </span>
          </a>
        ))}
      </div>
      <Button variant="resume" href="https://github.com/" className="mx-auto">
        View My Resume
      </Button>
    </div>
  );
}
