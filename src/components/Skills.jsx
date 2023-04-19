
import { useState, useEffect } from "react";
import htmlImage from "../assets/images/Html.jpg";
import cssImage from "../assets/images/CSS.jpg";
import jsImage from "../assets/images/JavaScript.jpg";
import reactImage from "../assets/images/React.jpg";
import phpImage from "../assets/images/PHP.jpg";
import laravelImage from "../assets/images/Laravel.jpg";
import bootStrapImage from "../assets/images/Bootstrap.jpg";
import nodejsImage from "../assets/images/NodeJS.jpg";
import mongodbImage from "../assets/images/MongoDb.jpg";
import figmaImage from "../assets/images/Figma.jpg";
import aspImage from "../assets/images/ASP.Net.jpg";


export default function Skills() {
  const [skills, setSkills] = useState([]);

  const imageMap = {
    Html: htmlImage,
    CSS: cssImage,
    JavaScript: jsImage,
    React: reactImage,
    PHP: phpImage,
    Laravel: laravelImage,
    Bootstrap: bootStrapImage,
    NodeJS: nodejsImage,
    MongoDb: mongodbImage,
    Figma: figmaImage,
    "Asp.Net": aspImage,
  };

  useEffect(() => {
    const getSkill = async () => {
      let response = await fetch("./laravel-blade-cms.json");
      let data = await response.json();
      console.log(data);
      let each_skill = data[11].data.map((item) => item.title);
      setSkills(each_skill);
    };
    getSkill();
  }, []);

  return (
    <div>
      <h2>Skills</h2>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill}
            {imageMap[skill] && (
              <img
                src={imageMap[skill]}
                alt={skill}
                width="100"
                height="100"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}