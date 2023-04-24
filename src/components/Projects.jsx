import { useState, useEffect } from "react";
import haveinnImage from "../assets/images/HaveInn Hotel.png";
import eventmanagementImage from "../assets/images/Event Management.png";
import healthylifestyleImage from "../assets/images/Healthy Life Style.png";
import giftshopImage from "../assets/images/Online Gift Shop.png";

export default function Project() {
    const [project, setProject] = useState([]);
    const imageMap = {
      "HaveInn Hotel": haveinnImage,
      "Event Management": eventmanagementImage,
      "Healthy Life Style": healthylifestyleImage,
      "Online Gift Shop": giftshopImage
    };

    useEffect(() => {
        const getProject = async () => {
          let response = await fetch("./laravel-blade-cms.json");
          let databaseTables = await response.json();
          console.log(databaseTables);

          let each_Project = databaseTables[8].data.map((item) => ({
            title: item.title,
            source: item.source,
            content: item.content
          }));
          setProject(each_Project);
          //console.log(each_Project);
        };
        getProject();
      }, []);

    return (
        <div>
        <h2>Projects</h2>
        <div id="project_container">
        <ul>
          {project.map((projectWork, index) => (
            <li key={index}>
              {imageMap[projectWork.title] && (
                <img
                  src={imageMap[projectWork.title]}
                  alt={projectWork.title}
                  width="400"
                  height="400"
                />
              )}
              <h3><a href={projectWork.source}>{projectWork.title}</a></h3>
              <p>{projectWork.content}</p>
              <a href={projectWork.source}>{projectWork.source}</a>
            </li>
          ))}
        </ul>
        <hr id="line" />
        </div>
      </div>
    );
  }