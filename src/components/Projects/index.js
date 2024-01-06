import React from 'react';
import './index.scss';
import careers from '../../assets/images/careers.png';
import weather from '../../assets/images/weather.png';


const Projects = () => {
  // Sample project data
  const projects = [
        {
      id: 1,
      title: 'Paws of India',
      description: "Developed PawsofIndia.com website with a Full Stack approach, utilizing React, Tailwind CSS ,HTML. Created a platform for dog enthusiasts, featuring Indian dog breed profiles, care content, and an adoption section.",
      thumbnail: PawsofIndia,
      link: 'https://paws-of-india.vercel.app/'
    },
    {
      id: 2,
      title: 'RoomMates',
      description: " Developed an intuitive Roommates-MERN platform using React, Node.js, HTML, and CSS for seamless roommate management and expense tracking.",
      thumbnail: Roommates,
      link: 'https://mern-roommates-kcbb.vercel.app/'
    },
        {
      id: 3,
      title: 'Book Store ',
      description: "Developed a user-friendly Book Store using the MERN stack, creating an intuitive interface for book exploration and purchase.",
      thumbnail: Bookstore,
      link: ''
    },
    {
      id: 4,
      title: 'Weather App',
      description: "Created a React weather app that fetches and displays weather data from an API in a user-friendly interface. It provides accurate and up-to-date weather information to keep users informed.",
      thumbnail: weather,
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
