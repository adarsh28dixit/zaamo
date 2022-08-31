import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function DetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`).then((res) => setMovie([res.data]));
  }, []);

  console.log(movie);

  return (
    <div>
        {/* <Navbar  /> */}
        {movie.map((i) => (
            <div className="movie_card" id="bright" key={i.id}>
            <div className="info_section">
              <div className="movie_header">
                <img className="locandina" src={i.image.medium} alt="" />
                <h1>{i.name}</h1>
                <h4>
                  {i.language}, {i.rating.average}
                </h4>
                <span className="minutes">{i.runtime} min</span>
    
                <p className="type">{i.genres.map(s => ( <>
                {s + " "}
                </>))}</p>
              </div>
              <div className="movie_desc">
                <p className="text">{i.summary.slice(20, 300)}</p>
              </div>
              <div className="movie_social">
                <ul>
                  <li>
                    <i className="material-icons">share</i>
                  </li>
                  <li>
                    <i className="material-icons"></i>
                  </li>
                  <li>
                    <i className="material-icons">chat_bubble</i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="blur_back bright_back">
              <img src={i.image.original} alt="" />
            </div>
          </div>
        ))}
      
    </div>
  );
}
