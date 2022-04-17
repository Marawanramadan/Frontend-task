import "./App.css";
import SongsCounter from "./components/songsCounter";
import Tabs from "./components/Tabs";
import Grid from "@mui/material/Grid";

function App() {
  console.log("dqdow");
  return (
    <div className="app">
      <Grid container>
        <Grid container sm={9} xs={12} spacing={2}>
          <Tabs />
        </Grid>
        <Grid className="counter-wrapper" sm={3} xs={12}>
          <SongsCounter />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
