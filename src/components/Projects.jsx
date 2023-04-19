import { useState, useEffect } from "react";
import haveinnImage from "../assets/images/HaveInnHotel.png";
import eventmanagementImage from "../assets/images/EventManagement.png";
import healthylifestyleImage from "../assets/images/HealthyLifeStyle.png";
import giftshopImage from "../assets/images/Giftshop.png";

export default function Project() {
    const [project, setProject] = useState([]);
    const imageMap = {
      HaveInnHotel: haveinnImage,
      EventManagement: eventmanagementImage,
      HealthyLifeStyle: healthylifestyleImage,
      Giftshop: giftshopImage
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
  
        <ul>
          {project.map((projectWork, index) => (
            <li key={index}>
              <p>{projectWork.title}</p>
              <p>{projectWork.source}</p>
              <p>{projectWork.content}</p>

              {imageMap[projectWork.source] && (
                <img
                  src={imageMap[projectWork.source]}
                  alt={projectWork.title}
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