export default function Button({
  children,
  href,
  download = false,
  className = "",
  variant = "primary",
  onClick,
}) {
  const baseStyle = "rounded-md px-4 py-1.5 font-cg text-base font-medium";

  let variantStyle = "";
  if (["primary", "zen", "resume"].includes(variant)) {
    variantStyle = `bg-accent text-[#FFFFFF] transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#3e4b3d] ${variant == "zen" ? "py-2.5 w-auto" : ""}`;
  } else if (variant == "secondary") {
    variantStyle =
      "charcoal-text bg-transparent ring-2 ring-inset ring-[#3333334D] transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#3333330D] hover:ring-[#33333380]";
  }

  const classes = `${baseStyle} ${variantStyle} ${className}`;

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
