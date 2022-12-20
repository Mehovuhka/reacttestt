import React from "react";

function Cards({ films }) {
  return (
    <div className="card">
      <ul className="list-cards">
        {console.log(films)}
        {/* {films.map((film, index) => {
          <div className="carde" key={index}>
            <h3 className="h-card">{film.nameRu}</h3>
            <img className="im-card" src={film.posterUrl} alt="" />
            <span className="stars">{film.ratingImdb}</span>
          </div>;
        })} */}
      </ul>
    </div>
  );
}

export default Cards;
