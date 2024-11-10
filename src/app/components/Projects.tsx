"use client";

import React from 'react';
import Heading from './Heading';
import Cards from './Cards';
import './style/projects.css';

const data = [
  {
    id: 0,
    title: 'Static Resume',
    desc: 'A personal static resume perfect for job applications',
    img: '/resume2.jpeg',
    tags: ['CSS', 'HTML'],
  },
  {
    id: 1,
    title: 'Shareable Resume Builder',
    desc: 'A simple HTML and CSS-based resume builder that is also shareable',
    img: '/resume.jpeg',
    tags: ['CSS', 'HTML'],
  },
  {
    id: 3,
    title: 'Bakery Website',
    desc: 'A Next.js project showing a working bakery website',
    img: '/bakery.jpeg',
    tags: ['Next.js', 'React', 'Tailwind'],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <Heading title="My Projects" />
      <div className="projects-grid">
        {data.map((el) => (
          <Cards
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
