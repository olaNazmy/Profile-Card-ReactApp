import "/App.css";

const skills = [
  {
    skill: "RestFul APIs",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web API",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "begginer",
    color: "#E84F33",
  },
  {
    skill: "ReactJS",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "C#",
    level: "advanced",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/src/assets/me.jpeg" alt="Ola Nazmy" />;
}

function Intro() {
  return (
    <div>
      <h1>Ola Nazmy</h1>
      <p>
        Passionate .NET Full Stack Developer with hands-on experience in
        building web applications using ASP.NET Core, C#, Angular, and SQL
        Server. Currently working as a BIM Developer, combining software
        development with construction technology. ITI 9-Month Diploma graduate,
        committed to writing clean code and delivering practical solutions.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div>
      {skills.map((item) => (
        <Skill skill={item.skill} color={item.color} level={item.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "✌️"}
        {level === "begginer" && "👶"}
      </span>
    </div>
  );
}

export default App;
