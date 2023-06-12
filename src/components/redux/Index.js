import MoviePlaylist from "./atoms/MoviePlaylist";
import SongPlaylist from "./atoms/SongPlaylist";
import Button from "../third_project/atoms/Button";
import { useDispatch } from "react-redux";
import { reset } from "./store/Index";
function Index() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(reset());
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
