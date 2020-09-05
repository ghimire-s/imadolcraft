import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
  homeStyles: {
    flex: 0.1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          ImadolCraft
        </Typography>
        <Typography className={classes.homeStyles}>Home</Typography>
        <Typography className={classes.homeStyles}>About</Typography>
        <Typography className={classes.homeStyles}>Category</Typography>
        <ShoppingCartIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
