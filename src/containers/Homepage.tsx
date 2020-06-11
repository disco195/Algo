import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Theme,
  ButtonBase,
  Paper,
  Typography,
} from "@material-ui/core";
import { setModule } from "../actions/index";

interface HomepageProps {
  setModule: () => void;
}

function Homepage(props: HomepageProps) {
  useEffect(() => {
    props.setModule();
  });

  const classes = useStyles(props);

  return (
    <main className={classes.root}>
      <div className={classes.container}>
        <Paper elevation={3}>
          <ButtonBase
            to="/sorting"
            component={Link}
            style={{ width: "100%", height: "100%" }}
          >
            <Typography variant="h3">Sorting</Typography>
          </ButtonBase>
        </Paper>
        <Paper elevation={3}>
          <ButtonBase
            to="/lists"
            component={Link}
            style={{ width: "100%", height: "100%" }}
          >
            <Typography variant="h3">Lists</Typography>
          </ButtonBase>
        </Paper>
      </div>
    </main>
  );
}
//
//
// Styling
//
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "92vh",
    width: "100%",
  },
  container: {
    width: "85%",
    margin: "auto",
    padding: "50px 15px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(24),
      height: theme.spacing(24),
    },
  },
}));

//
//  Redux Connect
//
const mapStateToProps = (state: CombinedState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setModule: () => dispatch(setModule(null)),
});

//
//  Export with props
//
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
