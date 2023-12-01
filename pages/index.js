import React from "react";
import axios from "axios";
import Movies from "../Components/Movies";

const movie = ({movies}) => {
  if (!movies) return <h1>Loading ...</h1>;
  return (
    <div>
      <div className="container py-3">
        <div className="row">
          {movies.map((movie, i) => {
            return (
              <div className="col-md-2 col-sm-4 " key={i}>
                <div className="box1  div position-relative ">
                  <img
                    src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                    className="w-100"
                    alt="img"
                  />
                  <h6 className="py-2">{movie.name}</h6>
                  <h6 className="position-absolute top-0 end-0 bg-info  p-1 ">
                    {movie.vote_count}
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Movies/> */}
    </div>
  );
};

export default movie;

export async function getServerSideProps() {
  
  
  let { data } = await axios(
    " https://api.themoviedb.org/3/trending/tv/week?api_key=f1aca93e54807386df3f6972a5c33b50 "
  )
  let movies = data.results;


  return {
    props: {
      movies,
    },
  };
}
