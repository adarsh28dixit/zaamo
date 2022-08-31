import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {
  const [movie, setMovie] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);

  useEffect(() => {
    axios.get("https://api.tvmaze.com/shows").then((res) => setMovie(res.data));
  }, []);

  console.log(movie);
  console.log(searchedItems);

  return (
    <div>
      <Navbar
        searchedItems={searchedItems}
        setSearchedItems={setSearchedItems}
        setMovie={setMovie}
      />
      {movie &&
        movie.map((i) => (
          <Link to={`${i.id}`} style={{ textDecoration: "none" }} key={i.id}>
            <div className="movie_card" id="bright">
              <div className="info_section">
                <div className="movie_header">
                  <img className="locandina" src={i.image.medium} alt="" />
                  <h1>{i.name}</h1>
                  <h4>
                    {i.language}, {i.rating.average}
                  </h4>
                  
                </div>
                <div className="movie_desc">
                  <p className="text">{i.summary.slice(20, 300)}</p>
                </div>
                
              </div>
              <div className="blur_back bright_back">
                <img src={i.image.original} alt="" />
              </div>
            </div>
          </Link>
        ))}

      {searchedItems.length === 0 && <h2>No Movies Found</h2>}
      {searchedItems &&
        searchedItems.map((i) => (
          <Link to={`${i.id}`} style={{ textDecoration: "none" }} key={i.id}>
            <div className="movie_card" id="bright">
              <div className="info_section">
                <div className="movie_header">
                  <img className="locandina" src={i.image.medium} alt="" />
                  <h1>{i.name}</h1>
                  <h4>
                    {i.language}, {i.rating.average}
                  </h4>
                 
                </div>
                <div className="movie_desc">
                  <p className="text">{i.summary.slice(20, 300)}</p>
                </div>
               
              </div>
              <div className="blur_back bright_back">
                <img src={i.image.original} alt="" />
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
