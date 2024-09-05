import "./About.scss";

import headShot from "../../assets/images/profile.jpg";
import email from "../../assets/icons/contact/email.svg";
import github from "../../assets/icons/contact/github.svg";
import linkedIn from "../../assets/icons/contact/linkedin.svg";
import phone from "../../assets/icons/contact/phone.svg";
import resume from "../../assets/icons/contact/resume.svg";
import ContactIcon from "../ContactIcon/ContactIcon";

const About = () => {
  const contactIcons = [
    {
      link: "https://www.linkedin.com/in/alejandro-castro-professional/",
      name: "LinkedIn",
      icon: linkedIn,
    },
    {
      link: "https://github.com/alejo2198",
      name: "Github",
      icon: github,
    },
    {
      link: "https://docs.google.com/document/d/1k4IQN1LOXPvVGYoyf9VfNVUcsgeGms5naMfbv3h5wEA/edit?usp=sharing",
      name: "Resume",
      icon: resume,
    },
    {
      link: "tel:6475455417",
      name: "Phone",
      icon: phone,
    },
    {
      link: "mailto:alejo199821@gmail.com",
      name: "Email",
      icon: email,
    },
  ];

  return (
    <section id="about" className="about">
      <h1 className="about__name">
        Alejandro Castro{" "}
        <span className="about__name--subheader">Junior Web Developer</span>
      </h1>
      <div className="about__layout-wrapper">
        <img
          className="about__headshot"
          src={headShot}
          alt="headshot of Alejandro Castro"
        />
        <div className="about__content-wrapper">
          <h3>About Me</h3>
          <p className="about__paragraph">
            I’m a passionate full-stack junior web developer who loves solving
            problems in innovative ways.{" "}
          </p>
          <p className="about__paragraph">
            I have college, university, boot-camp and freelance experience that
            I leverage to find my way around the trickiest of problems.
          </p>
          <h3>Interests</h3>
          <ul className="about__interests_list">
            <li className="about__interest">React Development</li>
            <li className="about__interest">Three JS and 3D web development</li>
            <li className="about__interest">UX/UI Design and animations</li>
          </ul>
        </div>
        <ul className="contact__icons">
          {contactIcons.map((contactIcon, index) => {
            return (
              <li key={index}>
                <ContactIcon contactIcon={contactIcon} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default About;
