import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ width: '18rem', margin: '20px' }}>
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <Link to={`/movies/${movie.id}`}>
        <button>View Description and Trailer</button>
      </Link>
    </div>
  );
};

export default MovieCard;