import './index.scss'
import Resume from '../../assets/images/sandeepRES7.pdf';



const About = () => {
  return (
    <>
      <div className="container about-page ">
        <div className="text-zone">
          <h1>
            About Me
          </h1>
          <p>
            I am a highly motivated Full-stack developer, I am seeking a position with a reputable IT company to work on diverse and exciting projects using the latest technologies. I am eager to join a challenging and diverse team.
          </p>
          <p align="LEFT">
            I am naturally curious and quietly confident,
            which motivates me to consistently improve my skills.
            I challenge myself to solve complex design problems,
            with the aim of enhancing my abilities and achieving success.
          </p>
          <p>
            If I were to define myself in one sentence,
            I would describe myself as a friendly and sociable
            who values spending time with others. Whether it's travelling
            with friends or going solo, I enjoy exploring new places and
            different cultures.
          </p>
        </div>
        <a class="letter-image" href={Resume}>
          <div class="animated-mail">
            <div class="back-fold"></div>
            <div class="letter">
              <div class="letter-border"></div>
              <div class="letter-title">Resume</div>
              <div class="letter-context">Click here</div>
            </div>
            <div class="top-fold"></div>
            <div class="body"></div>
            <div class="left-fold"></div>
          </div>
          <div class="shadow"></div>
        </a>
      </div>
    </>
  );
}

export default About;
