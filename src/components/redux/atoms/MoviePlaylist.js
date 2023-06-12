import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../store/Index";
import Button from "../../third_project/atoms/Button";
import { createRandomMovie } from "../data/Index";

function MoviePlaylist() {
  const dispatch = useDispatch();
   // To Do:
  // Get list of movies
  const moviePlaylist = useSelector((state)=>{
    // Show all the movies
    return state.movies;
  });

  const handleMovieAdd = (movie) => {
    dispatch(addMovie(movie));
    // To Do:
    // Add movie to list of movies
  };
  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie))
    // To Do:
    // Remove movie from list of movies
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie} className="flex w-2/3 items-center py-2 px-4 bg-gray-200 rounded-lg mb-2">
        <span className="text-lg font-semibold flex-grow">{movie}</span>
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger ml-4"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content m-3 text-2xl">
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
      <ul className="mt-3">{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist
