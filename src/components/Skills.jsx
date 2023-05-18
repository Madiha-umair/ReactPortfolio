
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
import aspImage from "../assets/images/Asp.Net.jpg";
import mysqlImage from "../assets/images/MySql.jpg";
import adobeImage from "../assets/images/AdobeXd.jpg";
import expressImage from "../assets/images/Expressjs.jpg";


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
    MySql: mysqlImage,
    AdobeXd: adobeImage,
    Expressjs: expressImage
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
    <div >
      <h2>Skills</h2>
    <div id="skill_container">
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {imageMap[skill] && (
              <img
                src={imageMap[skill]}
                alt={skill}
                
              />
            )}
            {skill}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}