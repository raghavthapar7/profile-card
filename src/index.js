import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="about">
        <Intro />
        <SkillSet />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="image" src="./Raghav.jpg" alt="Raghav Thapar"></img>;
}

function Intro() {
  return (
    <main className="intro">
      <h2 className="name">Raghav Thapar</h2>
      <p className="introduction">
        Full Stack developer at Accenture. I like to learn new languages, to
        play football and cricket, and to cook food. If I am free you might find
        me logging in hours to various video games 😉
      </p>
    </main>
  );
}

function SkillSet() {
  return (
    <div className="skill-set">
      <Skill skill="React" color="#4BC0D9" />
      <Skill skill="HTML + CSS" color="#DE3C4B" />
      <Skill skill="Apex" color="#E0CBA8" />
      <Skill skill="LWC Components" color="#33A1FD" />
      <Skill skill="MySQL" color="#403D58" />
      <Skill skill="JavaScript" color="#FFD670" />
      <Skill skill="Copado" color="#7F675B" />
    </div>
  );
}

function Skill(props) {
  return (
    <span
      className="skill"
      style={{
        backgroundColor: props.color,
      }}
    >
      {props.skill}
    </span>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
