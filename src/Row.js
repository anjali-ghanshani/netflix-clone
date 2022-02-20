import React, { useEffect, useState } from 'react';
import axios from './axios';
import "./Row.css";

// const fetchUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=f81980ff410e46f422d64ddf3a56dddd&language=en-US`

function Row({ title, fetchUrl, isLargeRow = false }) {

  const [movies, setMovies] = useState([]);
  const api_base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log("Set movies are " + request)

      setMovies(request.data.results);
      console.log("Set movies are " + setMovies(request.data.results))
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  // console.log("Set movies are " + )

  return (
    <div className="row">
      <h2>{title}</h2>

      { <div className="row__posters">
        {movies.map((movie) => (
          <img
             className={`row__poster ${isLargeRow && "row__posterLarge"}`}
             key={movie.id}
             src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}

      </div> }

    </div>
  );
}

export default Row
