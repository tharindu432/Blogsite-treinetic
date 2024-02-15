const TeamMember = ({ name, title, image, description }) => {
    return (
      <div className="col">
        <div className="card h-100 shadow-lg text-center">
          <img src={image} alt={`${name}'s photo`} className="card-img-top rounded-top" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{title}</p>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
  };

    export default TeamMember;