const skills = [
  { catagory: "Cloud platforms", skills: ["AWS"] },
  {
    catagory: "Programming",
    skills: ["HTML", "CSS", "Javascript", "Python"],
  },
  {
    catagory: "Framework and libraries",
    skills: ["React", "Next", "Node", "Express"],
  },
  {
    catagory: "Tools & DevOps",
    skills: ["Terraform", "Git", "VS Code"],
  },
  { catagory: "Operating System", skills: ["Windows", "Linux"] },
];

const Skills = () => {
  return (
    <section className="container my-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:basis-3/12">
          <p className="font-bold text-2xl">Skills</p>
        </div>
        <div className="md:basis-9/12">
          <ul className="list-disc pl-5">
            {skills.map((skill, index) => (
              <li key={index}>
                {skill.catagory}: <b>{skill.skills.join(", ")}</b>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
