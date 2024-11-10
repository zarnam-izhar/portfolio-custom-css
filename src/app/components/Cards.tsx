"use client";

import React from 'react';
import Image from 'next/image';
import './style/cards.css';

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Cards: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="card-container" data-aos="zoom-in-up">
      <div className="card-image">
        <Image
          className="image-cover"
          src={img}
          width={350}
          height={200}
          alt={title}
        />
      </div>

      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-description">{desc}</div>
        <div className="card-tags">
          {tags.map((el) => (
            <div className="tag" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
