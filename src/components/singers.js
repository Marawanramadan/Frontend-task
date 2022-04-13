import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addArtists } from "../global-state/selectedSingersSlice";
import { addAlbums } from "../global-state/selectedAlbumsSlice";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";

export default function Singers() {
  const dispatch = useDispatch();
  const dispatchAlbums = useDispatch();

  const artists = ["Maroon5", "Queen"];
  const selectedArtists = useSelector((state) => state.selectedArtists.value);

  const [selectedSingers, setSelectedSingers] = useState(selectedArtists);

  const handleChange = (e, v) => {
    console.log(e.target.value);
    console.log(v);
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
  };

  useEffect(() => {
    dispatch(addArtists(selectedSingers));
  }, [selectedSingers]);

  return (
    <>
      <Grid container spacing={2}>
        {artists.map((artist) => {
          return (
            <Grid key={artist} item xs={4}>
              <div className="card">
                <p>{artist}</p>
                <Checkbox
                  defaultChecked={selectedArtists.includes(artist)}
                  value={artist}
                  onChange={handleChange}
                />
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
