import React from 'react';

const TeamMemberCard = ({ name, title, image, description }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} alt={`${name}'s photo`} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{title}</p>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;