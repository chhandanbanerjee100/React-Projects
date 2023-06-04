import { createRandomSong } from "../data/Index";
import Button from "../../third_project/atoms/Button";

function SongPlaylist() {
  const songPlaylist = [];

  const handleSongAdd = (song) => {
    // To Do:
    // Add song to list of songs
  };
  const handleSongRemove = (song) => {
    // To Do:
    // Remove song from list of songs
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content m-3 ">
      <div className="table-header">
        <h3 className="text-3xl mb-3">Song Playlist</h3>
        <div className="buttons">
          <Button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
            primary
          >
            + Add Song to Playlist
          </Button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist
