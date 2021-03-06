import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}></Grid>
        <Body />
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
