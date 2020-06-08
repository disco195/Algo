import React from "react";
import { makeStyles } from "@material-ui/styles";

function Navbar(props: any) {
  const classes = useStyles(props);
  return (
    <nav className={classes.root}>
      <div className={classes.container}>
        <div className={classes.common}>
          <p>Algo</p>
        </div>
        <div className={classes.common}>Buttons will be here</div>
      </div>
    </nav>
  );
}

export default Navbar;

const common = {
  display: "flex",
  alignItems: "center",
  color: "white",
};

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "black",
  },
  common,
  container: {
    width: "80%",
    margin: "auto",
    ...common,
    justifyContent: "space-between",
  },
});
