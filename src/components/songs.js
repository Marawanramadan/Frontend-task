import React ,{useEffect , useState} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import { addSongs } from '../global-state/selectedSongsSlice';
import NavigationButtons from './NavigationButtons';
export default function Songs({handleChange}) {

  const songs = useSelector(state => state.songs)
  const selectedAlbums = useSelector(state => state.selectedAlbums.value)
  const selectedSongsRedux = useSelector(state => state.selectedSongs.value)

  const [selectedSongs , setSelectedSongs] = useState(selectedSongsRedux)
  const dispatch = useDispatch()

  const onChange = (e , v)=>{
    let selectedSongsCopy = [...selectedSongs]

    if(v){
      selectedSongsCopy.push(e.target.value)
      setSelectedSongs(selectedSongsCopy)
    }
    else{
      const filteredCopy = selectedSongsCopy.filter(song => song !== e.target.value)
      setSelectedSongs(filteredCopy)
    }
}

  useEffect(()=>{
    dispatch(addSongs(selectedSongs))
  },[selectedSongs])


  return <div>
    <Grid container spacing={2}>
        {songs.filter(song => selectedAlbums.includes(song.album)).map((song) => {
          return (
            <Grid key={song.name} item sm={4} xs={12}>
              <div className="card">
                <p>Song : {song.name}</p>
                <p>Artist : {song.artist}</p>
                <p>Price : {song.price}</p>
                <Checkbox
                  defaultChecked={selectedSongs.includes(song.name)}
                  value={song.name}
                  onChange={onChange}
                />
              </div>
            </Grid>
          );
        })}
      </Grid>

      <NavigationButtons prevDisabled={false} nextDisabled={selectedSongs.length === 0} handleChange={handleChange} value={2} />
  </div>;
}


