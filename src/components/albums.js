import React, { useState , useEffect} from "react";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import {useDispatch , useSelector} from "react-redux";
import { addAlbums } from "../global-state/selectedAlbumsSlice";
import { addSongs } from '../global-state/selectedSongsSlice';

export default function Albums() {

  const selectedSingers = useSelector(state => state.selectedArtists.value)
  const selectedAlbumsRedux = useSelector(state => state.selectedAlbums.value)
  const [selectedAlbums , setSelectedAlbums] = useState(selectedAlbumsRedux)

  const dispatch = useDispatch()
  const dispatchSongs = useDispatch()

  const handleChange = (e , v)=>{
    console.log(e.target.value)
    console.log(v)
    let selectedAlbumsCopy = [...selectedAlbums]

    if(v){
      selectedAlbumsCopy.push(e.target.value)
      setSelectedAlbums(selectedAlbumsCopy)
    }
    else{
      const filteredCopy = selectedAlbumsCopy.filter(album => album !== e.target.value)
      setSelectedAlbums(filteredCopy)
    }
    dispatchSongs(addSongs([]))
}


  const albumsList = [
    {
      name: "Album 1",
      artist: "Maroon5",
    },
    {
      name: "Album 2",
      artist: "Maroon5",
    },
    {
      name: "Album 3",
      artist: "Queen",
    },
    {
      name: "Album 4",
      artist: "Queen",
    },
  ];
  useEffect(()=>{
    dispatch(addAlbums(selectedAlbums))
    console.log(selectedAlbums)
  },[selectedAlbums])


  return <div>
    <Grid container spacing={2}>
        {albumsList.filter(album => selectedSingers.includes(album.artist)).map((album) => {
          return (
            <Grid key={album.name} item xs={4}>
              <div className="card">
                <p>Album : {album.name}</p>
                <p>Artist : {album.artist}</p>
                <Checkbox
                  defaultChecked={selectedAlbums.includes(album.name)}
                  value={album.name}
                  onChange={handleChange}
                />
              </div>
            </Grid>
          );
        })}
      </Grid>
  </div>;
}
