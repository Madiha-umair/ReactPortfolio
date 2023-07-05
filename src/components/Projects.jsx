import { useState, useEffect } from "react";
import playpalImage from "../assets/images/Playpal App.png";
import haveinnImage from "../assets/images/HaveInn Hotel.png";
import eventmanagementImage from "../assets/images/Event Management.png";
import healthylifestyleImage from "../assets/images/Healthy Life Style.png";
import giftshopImage from "../assets/images/Gift Basket Shop.png";
import portfoliov2Image from "../assets/images/Portfolio-V2.png";
import portfoliocmsImage from "../assets/images/Portfolio-Backend-CMS.png";
import webevaluatorImage from "../assets/images/Web Evaluator.png";
import aspImage from "../assets/images/Asp.Net.jpg";
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
import mysqlImage from "../assets/images/MySql.jpg";
import adobeImage from "../assets/images/AdobeXd.jpg";
import expressImage from "../assets/images/Expressjs.jpg";

export default function Project() {
  const [project, setProject] = useState([]);
  const imageMap = {
    "Playpal App": playpalImage,
    "HaveInn Hotel": haveinnImage,
    "Event Management": eventmanagementImage,
    "Healthy Life Style": healthylifestyleImage,
    "Gift Basket Shop": giftshopImage,
    "Portfolio-V2": portfoliov2Image,
    "Portfolio-Backend-CMS": portfoliocmsImage,
    "Web Evaluator": webevaluatorImage,
    "Asp.Net": aspImage,
    "Html": htmlImage,
    "CSS": cssImage,
    "JavaScript": jsImage,
    "React": reactImage,
    "PHP": phpImage,
    "Laravel": laravelImage,
    "Bootstrap": bootStrapImage,
    "NodeJS": nodejsImage,
    "MongoDb": mongodbImage,
    "Figma": figmaImage,
    "MySql": mysqlImage,
    "AdobeXd": adobeImage,
    "Expressjs": expressImage
  };

  useEffect(() => {
    const getProject = async () => {
      let response = await fetch("./laravel-blade-cms.json");
      let databaseTables = await response.json();
      console.log(databaseTables);

      const projectsTable = databaseTables.find(
        (table) => table.name === "projects"
      );
      const projectSkillTable = databaseTables.find(
        (table) => table.name === "project_skill"
      );
      const skillsTable = databaseTables.find(
        (table) => table.name === "skills"
      );

      if (projectsTable && projectSkillTable && skillsTable) {
        let each_Project = projectsTable.data.map((item) => {
          const skillIds = projectSkillTable.data
            .filter((skill) => skill.project_id === item.id)
            .map((skill) => skill.skill_id);
          const skills = skillsTable.data
            .filter((skill) => skillIds.includes(skill.id))
            .map((skill) => ({
              title: skill.title,
              image: imageMap[skill.title], // Assign the corresponding skill image from imageMap
            }));
          return {
            title: item.title,
            source: item.source,
            content: item.content,
            skills: skills,
          };
        });

        setProject(each_Project);
        console.log(each_Project);
      }
    };
    getProject();
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      <div id="project_container">
        {project.map((projectWork, index) => (
          <div className="project_item" key={index}>
            <div className="project_image">
              {imageMap[projectWork.title] && (
                <img
                  src={imageMap[projectWork.title]}
                  alt={projectWork.title}
                />
              )}
            </div>
            <div className="project_details">
              <h3>
                <a href={projectWork.source}>{projectWork.title}</a>
              </h3>
              <p>{projectWork.content}</p>
              <div className="project_skills">
                <ul>
                  {projectWork.skills.map((skill, index) => (
                    <li key={index}>
                      {skill.image && (
                        <div>
                          <img src={skill.image} alt={skill.title} />
                          <span>{skill.title}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="project_code">
                <a href={projectWork.source}>{projectWork.source}</a>
              </div>
            </div>
          </div>
        ))}
        <hr id="line" />
      </div>
    </div>
  );
}
/*eslint-disable react/no-unknown-property */