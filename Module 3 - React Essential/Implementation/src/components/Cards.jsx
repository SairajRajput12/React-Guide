import React from "react";
function Card(props) {
  return (
    <div> 
        <div className="card bg-dark text-warning" style={{ width: '18rem' }}>
        {/* <img className="card-img-top" src={props.href} alt="Card image cap"/> */}
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.info}</p>
            </div>
            <p className="list-group list-group-flush text-center">
                    {props.Description}
            </p>
            <p className="list-group list-group-flush text-center">
                {props.Goal}
            </p>
            <div className="card-body text-center">
                <a href={props.link} className="card-link">Card link</a>
            </div>
        </div>
    </div>
  );
}

export default Card;
