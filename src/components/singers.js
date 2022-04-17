import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addArtists } from "../global-state/selectedSingersSlice";
import { addAlbums } from "../global-state/selectedAlbumsSlice";
import { addSongs } from '../global-state/selectedSongsSlice';
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import NavigationButtons from "./NavigationButtons";

export default function Singers({handleChange}) {
  const dispatch = useDispatch();
  const dispatchAlbums = useDispatch();
  const dispatchSongs = useDispatch()

  const artists = ["Maroon5", "Queen"];
  const selectedArtists = useSelector((state) => state.selectedArtists.value);

  const [selectedSingers, setSelectedSingers] = useState(selectedArtists);

  const onChange = (e, v) => {
    let selectedSingersCopy = [...selectedSingers];

    if (v) {
      selectedSingersCopy.push(e.target.value);
      setSelectedSingers(selectedSingersCopy);
    } else {
      const filteredCopy = selectedSingersCopy.filter(
        (singer) => singer !== e.target.value
      );
      setSelectedSingers(filteredCopy);
    }
    dispatchAlbums(addAlbums([]));
    dispatchSongs(addSongs([]))

  };

  useEffect(() => {
    dispatch(addArtists(selectedSingers));
  }, [selectedSingers]);

  return (
    <>
      <Grid container spacing={2}>
        {artists.map((artist) => {
          return (
            <Grid key={artist} item sm={4} xs={12}>
              <div className="card">
                <p>Name : {artist}</p>
                <Checkbox
                  defaultChecked={selectedArtists.includes(artist)}
                  value={artist}
                  onChange={onChange}
                />
              </div>
            </Grid>
          );
        })}
      </Grid>
      <NavigationButtons prevDisabled={true} nextDisabled={selectedArtists.length === 0} handleChange={handleChange} value={0} />


      
    </>
  );
}
