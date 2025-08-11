import contacts from "../data/contacts.json";
import Button from "../buttons/Button";
import { useState } from "react";

export default function LetsConnect() {
  const [copiedId, setCopiedId] = useState(null);

  const copyEmail = (email, id) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 3000);
  };

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
            onClick={(e) => {
              if (social.type === "email") {
                e.preventDefault();
                copyEmail(social.link, social.id);
              }
            }}
          >
            <img
              src={social.img}
              alt={social.social}
              className="transition-transform duration-200 ease-in-out hover:scale-110"
            />
            <span className="text-md absolute left-10 top-9 whitespace-nowrap rounded-md bg-gray-100 px-2 py-1 opacity-0 shadow transition duration-200 group-hover:opacity-100">
              {copiedId === social.id ? "Email copied!" : social.hover}
            </span>
          </a>
        ))}
      </div>

      <Button
        variant="resume"
        href="https://bit.ly/4m8UWXS"
        className="mx-auto"
      >
        View My Resume
      </Button>
    </div>
  );
}
