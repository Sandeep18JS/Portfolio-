import React from 'react';
import './index.scss';
import Html from '../../assets/images/html.png';
import Css from '../../assets/images/css.png';
import Javascript from '../../assets/images/javascript.png';
import Rreact from '../../assets/images/react.png';



const Skills = () => {

    return (
        <div className="container skills-page cl-6">
            <div className="text-zone">
                <h1>Skills & Experience</h1>
                <p>
                I am a front-end developer with expertise in HTML, CSS, React, JavaScript, jQuery, and Bootstrap. With a strong passion for designing
                and developing responsive and user-friendly websites,</p>
                <p align="LEFT">
                "In addition to my proficiency in front-end technologies, I am also skilled in back-end development using Node.js and SQL. With these tools, I can create robust and secure web applications that deliver exceptional performance and user experience
                </p>
                <p>
                To learn more about my skills and experience, please visit my LinkedIn profile. Additionally, you can view my resume by clicking on this link.                    </p>
            </div>
            <div class="skills">
                <img className="skills-me" src={Html} alt="html" />
                <img className="skills-me" src={Css} alt="css" />
                <img className="skills-me" src={Javascript} alt="javascript" />
                <img className="skills-me" src={Rreact}alt="react" />
            </div>
        </div>
    );
}

export default Skills;
