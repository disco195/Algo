import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles, Theme, Button } from "@material-ui/core";
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
      <Button color="primary" to="/sorting" component={Link}>
        Sorting
      </Button>
      <Button color="primary" to="/lists" component={Link}>
        Lists
      </Button>
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
