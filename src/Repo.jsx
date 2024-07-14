import React from "react";

function Repo({ name, visibility, description, topics }) {
  let visible = visibility[0].toUpperCase() + visibility.slice(1);
  return (
    <li className="box-row">
      <div className="name-container">
        <a href="" className="box-reponame">
          {name}
        </a>
        <span className="box-visibility">{visible}</span>
      </div>
      <p className="box-description">{description}</p>

      <div className="topics-container">
        {topics.map((topic, index) => (
          <a key={index} href="" className="box-topics">
            {topic}
          </a>
        ))}
      </div>
    </li>
  );
}

export default Repo;
