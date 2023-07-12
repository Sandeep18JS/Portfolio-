import React from 'react';
import './index.scss';
import careers from '../../assets/images/careers.png';
import weather from '../../assets/images/weather.png';


const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Career Portal',
      description: " Created a Career Portal with Python, Flask, and SQL. It allows job seekers to explore opportunities, submit resumes, and connect with employers. The portal includes user registration, job listing, and search features.",
      thumbnail: careers,
      link: 'https://careers-2.onrender.com/'
    },
    {
      id: 2,
      title: 'Weather App',
      description: "Created a React weather app that fetches and displays weather data from an API in a user-friendly interface. It provides accurate and up-to-date weather information to keep users informed.",
      thumbnail: weather,
      link: ''
    },
    {
      id: 3,
      title: 'Loading',
      description: "",
      thumbnail: '',
      link: ''
    },
    {
      id: 4,
      title: 'Loading',
      description: "",
      thumbnail: '',
      link: ''
    },
  ];

  return (
    <div className="projects">
      {projects.map((project) => (
        <a key={project.id} href={project.link} className="project">
          <img src={project.thumbnail} alt={project.title} className="thumbnail" />
          <div className="details">
            <h3 className="title">{project.title}</h3>
            <p className="description">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
