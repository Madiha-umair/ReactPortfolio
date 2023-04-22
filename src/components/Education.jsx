import { useState, useEffect } from "react";

export default function Education() {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const getEducation = async () => {
          let response = await fetch("./laravel-blade-cms.json");
          let databaseTables = await response.json();
          console.log(databaseTables);

          let each_education = databaseTables[10].data.map((item) => ({
            field: item.field,
            degree: item.degree,
            institute: item.institute,
            location: item.location,
            started_at: item.started_at,
            ended_at: item.ended_at
          }));
          setEducation(each_education);
        };
        getEducation();
      }, []);

    return (
        <div id="qualification_container">
        <h2>Qualification</h2>
        <ul>
          {education.map((qualification, index) => (
            <li key={index}>
             <p> {qualification.field}</p>
             <p> {qualification.degree}</p>
             <p> {qualification.location}</p>
             <p> {qualification.started_at} - {qualification.ended_at}</p>
             <p> {qualification.institute}</p>
           </li>
          ))}
          <hr id="line" />
        </ul>
      </div>
    );
  }