import React from 'react';
import { IconType } from 'react-icons';

interface CardProps {
  title: string;
  description: string;
  Icon: IconType; 
}

function Card ({ title, description, Icon }:CardProps)  {
  return (
    <div className="card-content">
    <div className="card">
      <div className="icon">
        <Icon size={40} color="#0070f3" /> 
      </div>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <a href="#" className="readMore">
        Read more
      </a>
    </div>
    </div>
  );
};

export default Card;
