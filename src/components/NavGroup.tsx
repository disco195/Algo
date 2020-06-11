import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Dispatch, $CombinedState } from "redux";
import { Tabs, Tab } from "@material-ui/core";
import { Abbr } from "./";

const sortLabels: { label: SORT_TYPE; abbr: string }[] = [
  { label: "BUBBLE", abbr: "BBL" },
  { label: "SELECTION", abbr: "SEL" },
  { label: "INSERTION", abbr: "INS" },
  { label: "MERGE", abbr: "MRG" },
  { label: "QUICK", abbr: "QUI" },
  { label: "QUICK RANDOM", abbr: "QUR" },
  { label: "COUNTING", abbr: "COU" },
  { label: "RADIX", abbr: "RDX" },
];

const listsLabels: { label: LIST_TYPE; abbr: string }[] = [
  { label: "SINGLY", abbr: "SLL" },
  { label: "DOUBLY", abbr: "DLL" },
  { label: "STACK", abbr: "STK" },
  { label: "QUEUE", abbr: "QUE" },
  { label: "DEQUE", abbr: "DQU" },
];

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
            variant="scrollable"
            scrollButtons="auto"
          >
            {sortLabels.map(({ label, abbr }, i) => (
              <Tab
                key={abbr}
                label={
                  <Abbr label={label} abbr={abbr} index={i} current={value} />
                }
              />
            ))}
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
            variant="scrollable"
            scrollButtons="auto"
          >
            {listsLabels.map(({ label, abbr }, i) => (
              <Tab
                key={abbr}
                label={
                  <Abbr label={label} abbr={abbr} index={i} current={value} />
                }
              />
            ))}
          </Tabs>
        </Fragment>
      );
    default:
      return <Fragment></Fragment>;
  }
}

const mapStateToProps = (state: CombinedState) => ({
  currentModule: state.generalReducer.currentModule,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavGroup);
