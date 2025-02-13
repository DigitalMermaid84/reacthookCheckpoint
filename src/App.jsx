import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';


const initialMovies = [
  {
    title: 'Movie 1',
    description: 'Description 1',
    posterURL: 'https://via.placeholder.com/150',
    rating: 5,
  },
  {
    title: 'Movie 2',
    description: 'Description 2',
    posterURL: 'https://via.placeholder.com/150',
    rating: 4,
  },
  {
    title: 'Movie 3',
    description: 'Description 3',
    posterURL: 'https://via.placeholder.com/150',
    rating: 3,
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (filter) => {
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
        movie.rating >= filter.rating
      );
    });
    setFilteredMovies(filteredMovies);
  };

  const handleAddMovie = () => {
    const newMovie = {
      title: 'New Movie',
      description: 'New Description',
      posterURL: 'https://via.placeholder.com/150',
      rating: 5,
    };
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <h1>Movie App</h1>
      <Filter onFilter={handleFilter} />
      <button onClick={handleAddMovie}>Add Movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;