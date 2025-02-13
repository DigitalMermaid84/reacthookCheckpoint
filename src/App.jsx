import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDescription from './MovieDescription';

function App() {
  const initialMovies = [
    {
      id: 1,
      title: 'Inception',
      description: 'Cobb, a skilled thief who enters the dreams of others to steal secrets, is tasked with planting an idea in someone\'s mind instead.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
      rating: 8.5,
      trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      rating: 9.2,
      trailerLink: 'https://www.youtube.com/embed/6hB3S9bQrc',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests of his ability to fight injustice.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
      rating: 9.0,
      trailerLink: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    },
    {
      id: 4,
      title: '12 Angry Men',
      description: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZTI0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
      rating: 9.0,
      trailerLink: 'https://www.youtube.com/embed/A9V5Z3LQSUA',
    },
  ];
  

  return (
    <div>
    <h1>Movie App</h1>
    <Filter onFilter={handleFilter} />
    <button onClick={handleAddMovie}>Add Movie</button>
    <MovieList movies={filteredMovies} />
  </div>
);
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDescription} />
      </Switch>
    </BrowserRouter>
  
}

export default App