import React from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
export default function NavigationButtons({
  value,
  handleChange,
  nextDisabled,
  prevDisabled,
  submit,
}) {
  return (
    <Grid container className="navigation">
      <Button variant="contained" disabled={prevDisabled} onClick={() => handleChange(null , value - 1)}>
        Previous
      </Button>
      <Button
        variant="contained"
        disabled={nextDisabled}
        onClick={value === 3 ? submit :  () =>  handleChange(null, value + 1)}
      >
        {value === 3 ? "Submit" : "Next"}
      </Button>
    </Grid>
  );
}
