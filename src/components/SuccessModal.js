import React from "react";
import { Modal, Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addArtists } from "../global-state/selectedSingersSlice";
import { addAlbums } from "../global-state/selectedAlbumsSlice";
import { addSongs } from "../global-state/selectedSongsSlice";

export default function SuccessModal({ show, setShow, handleChange }) {
  const selectedSongs = useSelector((state) => state.selectedSongs.value);
  const songs = useSelector((state) => state.songs);
  const songsObject = songs.filter((song) => selectedSongs.includes(song.name));

  const dispatch = useDispatch();
  const dispatchAlbums = useDispatch();
  const dispatchSongs = useDispatch();

  const confirmBuy = () => {
    dispatchAlbums(addAlbums([]));
    dispatchSongs(addSongs([]));
    dispatch(addArtists([]));
    handleChange(null, 0);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    padding : "20px"
  };

  return (
    <Modal
      open={show}
        onClose={() => setShow(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        <Box  sx={{ ...style }}>
          <h2 id="child-modal-title">Your Choices</h2>
          <div className="space-between">
            {songsObject?.map((song) => {
            return (
              <p>
                {song.name} by {song.artist} from {song.album}
              </p>
            );
          })}
          </div>
          <hr />
          <div id="child-modal-description" className="space-between">
            <span>Total Price</span>
            <strong>
              {songsObject?.map((song) => song.price).reduce((a, b) => a + b)}
            </strong>
          </div>
          <div className="navigation">
          <Button style={{background : "#f41f4e" ,marginTop : "20px"}} onClick={confirmBuy}>Confirm</Button>
          </div>
        </Box>{" "}
      </div>
    </Modal>
  );
}
