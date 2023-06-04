import MoviePlaylist from "./atoms/MoviePlaylist";
import SongPlaylist from "./atoms/SongPlaylist";
import Button from "../third_project/atoms/Button";
function Index() {
  const handleResetClick = () => {
    //
  };

  return (
    <div className="container is-fluid m-3">
      <Button onClick={() => handleResetClick()} secondary rounded>
        Reset Both Playlists
      </Button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}

export default Index
