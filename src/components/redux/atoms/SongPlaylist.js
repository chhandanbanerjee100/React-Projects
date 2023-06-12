import { createRandomSong } from "../data/Index";
import { addSong, removeSong } from "../store/Index";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../third_project/atoms/Button";

function SongPlaylist() {
  const dispatch = useDispatch();
  const songPlaylist = useSelector((state)=>{
    // console.log(JSON.stringify(state))
    return state.songs;
  });

  const handleSongAdd = (song) => {
    const action = addSong(song);
    // console.log(action, song);
    dispatch(action);
    // To Do:
    // Add song to list of songs
  };
  const handleSongRemove = (song) => {
    // console.log(song)
    dispatch(removeSong(song));
    // To Do:
    // Remove song from list of songs
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song} className="flex w-2/3 items-center py-2 px-4 bg-gray-200 rounded-lg mb-2">
        <span className="text-lg font-semibold flex-grow">{song}</span>
        <button
          onClick={() => handleSongRemove(song)}
          className="ml-4"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content m-3 text-2xl">
      <div className="table-header my-3">
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
      <div className="my-3">
        <ul>{renderedSongs}</ul>
      </div>
    </div>
  );
}

export default SongPlaylist


/*
  The selector is getting called twice. WHY??

Because it runs both in the render phase, and after an action is dispatched. So, the first log happens when [the component] is rendered, and the second log happens when you click the button and dispatch an action that updates the store state.

useSelector also re-runs the selector a second time after the component has mounted, to check if there are any other changes due to actions being dispatched while the component tree was being constructed.

https://stackoverflow.com/questions/65827794/why-does-the-selector-inside-useselector-run-twice



Official docs:

When the function component renders, the provided selector function will be called and its result will be returned from the useSelector() hook. (A cached result may be returned by the hook without re-running the selector if it's the same function reference as on a previous render of the component.)

However, when an action is dispatched to the Redux store, useSelector() only forces a re-render if the selector result appears to be different than the last result. The default comparison is a strict === reference comparison. This is different than connect(), which uses shallow equality checks on the results of mapState calls to determine if re-rendering is needed. This has several implications on how you should use useSelector().

With mapState, all individual fields were returned in a combined object. It didn't matter if the return object was a new reference or not - connect() just compared the individual fields. With useSelector(), returning a new object every time will always force a re-render by default.

https://react-redux.js.org/api/hooks#equality-comparisons-and-updates
*/
