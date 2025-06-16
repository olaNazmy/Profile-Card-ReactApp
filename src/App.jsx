import "./style.css";

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
      <Skill skill="React" emoji="✌️" color="red" />
      <Skill skill="RESTFUL API" emoji="💪" color="orange" />
      <Skill skill="C#" emoji="🫰" color="yellow" />
      <Skill skill="JavaScript" emoji="✊" color="blue" />
      <Skill skill="Git and GitHub" emoji="💪" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
