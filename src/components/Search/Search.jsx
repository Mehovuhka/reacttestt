import React from "react";
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards.jsx";

function Search() {
  const [name, setName] = useState("");
  const [films, setFilms] = useState([]);
  const [trues, setTrues] = useState(false);

  useEffect(() => {
    async function filmsFetch(i) {
      await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${name}page=${i}`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "507d36be-f5a8-49bd-ae30-b5a50557f204",
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((json) => setFilms(json.films))
        .catch((err) => console.log(err));
    }
    // for (let i = 1; i < 1; i++) {
    //   filmsFetch(i);
    // }
    filmsFetch(1);
  }, [trues]);

  return (
    <div className="search">
      <h1 className="h-text">Поиск фильмов</h1>
      <input
        className="search-input"
        type="text"
        placeholder="название фильма"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTrues(!trues);
        }}
      >
        Поиск
      </button>
      <Cards films={films}></Cards>;
    </div>
  );
}

export default Search;
