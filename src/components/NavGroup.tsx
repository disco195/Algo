import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Tabs, Tab } from "@material-ui/core";
import { Abbr } from "./";

interface NavGroupProps {
  currentModule: MODULES;
}

function NavGroup(props: NavGroupProps) {
  const [value, setValue] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  switch (props.currentModule) {
    case "SORTING":
      return (
        <Fragment>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Choose Sorting Algorithm"
          >
            <Tab
              label={
                <Abbr label="BUBBLE" abbr="BBL" index={0} current={value} />
              }
            />
            <Tab
              label={
                <Abbr label="COUNTING" abbr="CNT" index={1} current={value} />
              }
            />
            <Tab
              label={
                <Abbr label="RADIX" abbr="RDX" index={2} current={value} />
              }
            />
          </Tabs>
        </Fragment>
      );

    case "LISTS":
      return (
        <Fragment>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Choose Lists Data Structure"
          >
            <Tab
              label={
                <Abbr label="SINGLY" abbr="SLL" index={0} current={value} />
              }
            />
            <Tab
              label={
                <Abbr label="DOUBLY" abbr="DLL" index={1} current={value} />
              }
            />
            <Tab
              label={
                <Abbr label="STACK" abbr="STK" index={2} current={value} />
              }
            />
          </Tabs>
        </Fragment>
      );
    default:
      return <Fragment></Fragment>;
  }
}

const mapStateToProps = (state: GeneralState) => ({
  currentModule: state.currentModule,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavGroup);
