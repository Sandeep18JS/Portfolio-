import React from 'react';
import './index.scss';
import Html from '../../assets/images/html.png';
import Css from '../../assets/images/tailwind.png';
import Javascript from '../../assets/images/javascript.png';
import Rreact from '../../assets/images/react.png';
import Nodejs from '../../assets/images/nodejs.svg';
import Expressjs from '../../assets/images/express.svg';
import Mongodb from '../../assets/images/mongodb.png';
import Sql from '../../assets/images/sql.png';




const Skills = () => {

    return (
        <div className="container skills-page cl-6">
            <div className="text-zone">
                <h1>Skills & Experience</h1>
                <p>
                I am a Full-stack developer with expertise in HTML, CSS (Tailwind),  JavaScript, React. I have a strong passion for designing and developing responsive and user-friendly websites.</p>
                <p align="LEFT">
                "In addition to my proficiency in front-end technologies, I am also skilled in back-end technologies like Node JS, Express JS,MongoDB and SQL. With these skills, I can create robust and secure web applications that deliver exceptional performance and user experience.
                </p>
                <p>
                To learn more about my skills and experience, please visit my LinkedIn profile. </p>
            </div>
            <div class="skills">
                <img className="skills-me" src={Html} alt="html" />
                <img className="skills-me" src={Css} alt="css" />
                <img className="skills-me" src={Javascript} alt="javascript" />
                <img className="skills-me" src={Rreact}alt="react" />
                <img className="skills-me" src={Nodejs}alt="node js" />
                <img className="skills-me" src={Expressjs}alt="express js" />
                <img className="skills-me" src={Mongodb}alt="mongodb" />
                <img className="skills-me" src={Sql}alt="sql" />
            </div>
        </div>
    );
}

export default Skills;
