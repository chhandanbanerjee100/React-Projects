import Button from "../../third_project/atoms/Button";
import { createRandomMovie } from "../data/Index";

function MoviePlaylist() {
   // To Do:
  // Get list of movies
  const moviePlaylist = [];

  const handleMovieAdd = (movie) => {
    // To Do:
    // Add movie to list of movies
  };
  const handleMovieRemove = (movie) => {
    // To Do:
    // Remove movie from list of movies
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content m-3">
      <div className="table-header">
        <h3 className="text-3xl mb-3">Movie Playlist</h3>
        <div className="buttons">
          <Button
            onClick={() => handleMovieAdd(createRandomMovie())}
            success
          >
            + Add Movie to Playlist
          </Button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist
