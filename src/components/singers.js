import React, { useEffect, useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { addArtists } from "../global-state/selectedSingersSlice";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";

export default function Singers() {

    const dispatch = useDispatch()
  const artists = useSelector((state) => state.artists);

  const [selectedSingers , setSelectedSingers] = useState([])

  const handleChange = (e , v)=>{
      console.log(e.target.value)
      console.log(v)
      let selectedSingersCopy = [...selectedSingers]

      if(v){
          selectedSingersCopy.push(e.target.value)
          setSelectedSingers(selectedSingersCopy)
      }
      else{
        const filteredCopy = selectedSingersCopy.filter(singer => singer !== e.target.value)
        setSelectedSingers(filteredCopy)
      }
  }

  useEffect(()=>{
    dispatch(addArtists(selectedSingers))

    console.log(selectedSingers)
  },[selectedSingers])
 
  return (
    <>
      <Grid container spacing={2}>
        {artists.map((artist) => {
          return (
            <Grid key={artist.name} item xs={4}>
              <div className="card">
                <p>{artist.name}</p>
                <Checkbox
                  value={artist.name}
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
