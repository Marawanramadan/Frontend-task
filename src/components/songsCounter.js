import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function SongsCounter() {
  const songs = useSelector((state) => state.songs);
  const selectedSongs = useSelector((state) => state.selectedSongs.value);
  const selectedAlbums = useSelector((state) => state.selectedAlbums.value);
  const selectedArtists = useSelector((state) => state.selectedArtists.value);

  const [filteredSongs, setFilteredSongs] = useState([]);
  useEffect(() => {
    let array = [];
    if (selectedSongs.length !== 0) {
      array = songs.filter((song) => selectedSongs.includes(song.name));
    } else if (selectedAlbums.length !== 0) {
      array = songs.filter((song) => selectedAlbums.includes(song.album));
    } else if (selectedArtists.length !== 0) {
      array = songs.filter((song) => selectedArtists.includes(song.artist));
    } else {
      array = [];
    }
    setFilteredSongs(array);
  }, [selectedSongs, selectedAlbums, selectedArtists]);
  return (
    <div className="card">
      <p>{filteredSongs.length} {filteredSongs.length === 1 ? "song" : "songs"}</p>
      <p>
        Total price :{" "}
        {filteredSongs.length === 0
          ? "0 "
          : filteredSongs.map((song) => song.price).reduce((a, b) => a + b)}
      </p>
    </div>
  );
}
