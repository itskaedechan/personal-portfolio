import skillsData from "../data/skillsData.json";

export default function Skills() {
  return (
    <div className="mb-10 ml-5">
      {skillsData.map((category) => (
        <div key={category.id} id={category.id}>
          <p className="mb-1 font-bold">{category.title}: </p>
          <p className="mb-5 ml-5">
            {category.skills.map((individualSkill) => (
              <span
                key={individualSkill}
                id={individualSkill.replace(/\s+/g, "-").toLowerCase()}
                className="skill-item"
              >
                {individualSkill}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
