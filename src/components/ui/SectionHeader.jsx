export default function SectionHeader({ title, isFirst }) {
  return <h1 className={`mb-4 ${isFirst ? "" : "mt-20"}`}>{title}</h1>;
}
