import React from 'react';

const MovieDescription = ({ movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        title={movie.title}
        src={movie.trailerLink}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default MovieDescription;