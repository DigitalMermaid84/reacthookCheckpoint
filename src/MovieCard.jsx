import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ width: '18rem', margin: '20px' }}>
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;