import contacts from "../data/contacts.json";

export default function LetsConnect() {
  return (
    <div className="mt-3 flex justify-center gap-6 sm:gap-8 md:gap-12">
      {contacts.map((social) => (
        <div key={social.id} className="group relative flex items-center">
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            <img src={social.img} alt={social.social} />
            <span className="text-md absolute left-10 rounded-md bg-gray-100 px-2 py-1 opacity-0 shadow transition duration-200 group-hover:opacity-100">
              {social.hover}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}
