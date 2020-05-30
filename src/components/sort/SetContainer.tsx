// Types
import { Sort, SetContainer as Props } from "../../types/sort/common";
// Dependencies
import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";
// Components
import { ValueBar } from "./";

/**
 *
 * Parent Component for Set of ValueBar Components
 *
 */
function SetContainer(props: Props) {
  // Styling
  const classes = useStyles();

  // Map Set to JSX Component
  const renderSet = props.set.map((props) => <ValueBar {...props} />);

  return <div className={classes.root}>{renderSet}</div>;
}

const mapStateToProps = (state: Sort["state"]): Props => {
  return { set: state.set };
};

export default connect(mapStateToProps)(SetContainer);

// JSS Styling
const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
