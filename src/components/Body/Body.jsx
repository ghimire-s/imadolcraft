import React from "react";
import CraftCard from "../CraftCard/CraftCard";
import { Grid } from "@material-ui/core";
import craftMakerList from "../../data";

const Body = () => {
  const getCraftMakerCard = (craftMakerObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <CraftCard {...craftMakerObj} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={2}>
      {craftMakerList.map((craftMakerObj) => getCraftMakerCard(craftMakerObj))}
    </Grid>
  );
};

export default Body;
