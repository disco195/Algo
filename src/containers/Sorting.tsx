import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles, Theme, Tabs, Tab } from "@material-ui/core";
import { setModule } from "../actions";
import { TabPanel } from "../components";

interface SortingProps {
  setModule: () => void;
}

function Sorting(props: SortingProps) {
  useEffect(() => {
    props.setModule();
  });
  const classes = useStyles(props);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main className={classes.root}>
      <section className={classes.topContainer}>Visualization</section>
      <section className={classes.bottomContainer}>
        <div className={classes.controls}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="CREATE" />
            <Tab label="SORT" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            SORT
          </TabPanel>
        </div>
        <span>code</span>
      </section>
    </main>
  );
}

//
// Styling
//
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "92vh",
    width: "100%",
  },
  topContainer: {
    height: "65%",
    width: "80%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    height: "35%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  controls: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

//
//  Redux Connect
//
const mapStateToProps = (state: CombinedState) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setModule: () => dispatch(setModule("SORTING")),
});

//
//  Export with props
//
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
