import React from 'react';
import './experience.css';

import { BsFillBootstrapFill } from 'react-icons/bs';
import { FaHtml5, FaCss3, FaVuejs, FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import {
  SiMaterialui,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiMongodb,
} from 'react-icons/si';

const SkilIcon = ({ children }) => (
  <span className="experience__details-icon">{children}</span>
);

const Experience = () => {
  const frontendSkills = [
    {
      title: 'HTML',
      experience: 'Experienced',
      icon: <FaHtml5 className="icon" />,
    },
    {
      title: 'CSS',
      experience: 'Experienced',
      icon: <FaCss3 className="icon" />,
    },
    {
      title: 'Javascript',
      experience: 'Experienced',
      icon: <IoLogoJavascript className="icon" />,
    },
    {
      title: 'Vue 3',
      experience: 'Experienced',
      icon: <FaVuejs className="icon" />,
    },
    {
      title: 'React',
      experience: 'Experienced',
      icon: <FaReact className="icon" />,
    },
    {
      title: 'Bootstrap',
      experience: 'Experienced',
      icon: <BsFillBootstrapFill className="icon" />,
    },
    {
      title: 'MaterialUI',
      experience: 'Experienced',
      icon: <SiMaterialui className="icon" />,
    },
  ];
  const backendSkills = [
    {
      title: 'NodeJs',
      experience: 'Experienced',
      icon: <FaNodeJs className="icon" />,
    },
    {
      title: 'C#',
      experience: 'Experienced',
      icon: <SiCsharp className="icon" />,
    },
    {
      title: 'SQL Server',
      experience: 'Experienced',
      icon: <SiMicrosoftsqlserver className="icon" />,
    },
    {
      title: 'MongoDB',
      experience: 'Experienced',
      icon: <SiMongodb className="icon" />,
    },
  ];

  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendSkills.map((skill) => (
              <article className="experience__details" key={skill.title}>
                <SkilIcon>{skill.icon}</SkilIcon>
                <div>
                  <h4>{skill.title}</h4>
                  <small className="text-light">{skill.experience}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendSkills.map((skill) => (
              <article className="experience__details" key={skill.title}>
                <SkilIcon>{skill.icon}</SkilIcon>
                <div>
                  <h4>{skill.title}</h4>
                  <small className="text-light">{skill.experience}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
