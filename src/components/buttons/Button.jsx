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
    variantStyle = `bg-accent text-[#FFFFFF] ${variant == "zen" ? "py-2.5 w-auto" : ""}`;
  } else if (variant == "secondary") {
    variantStyle =
      "charcoal-text bg-transparent ring-2 ring-inset ring-[#3333334D]";
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
