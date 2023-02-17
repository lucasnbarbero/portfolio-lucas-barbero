import React from 'react';
import './portfolio.css';

import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: 'Portfolio 1',
      github: 'https://github.com',
      demo: '#',
      image: IMG1,
    },
    {
      id: 2,
      title: 'Portfolio 2',
      github: 'https://github.com',
      demo: '#',
      image: IMG2,
    },
    {
      id: 3,
      title: 'Portfolio 3',
      github: 'https://github.com',
      demo: '#',
      image: IMG3,
    },
    {
      id: 4,
      title: 'Portfolio 4',
      github: 'https://github.com',
      demo: '#',
      image: IMG4,
    },
    {
      id: 5,
      title: 'Portfolio 5',
      github: 'https://github.com',
      demo: '#',
      image: IMG5,
    },
    {
      id: 6,
      title: 'Portfolio 6',
      github: 'https://github.com',
      demo: '#',
      image: IMG6,
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolios.map(({ id, title, github, demo, image }) => (
          <article className="portfolio__item" key={id}>
            <div className="porfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                Live demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
