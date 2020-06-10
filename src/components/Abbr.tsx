import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setDSType } from "../actions";

interface AbbrProps {
  DS_Type: DS_TYPE;
  label: SORT_TYPE | LIST_TYPE;
  abbr: string;
  current: number;
  index: number;
  onSelect: (v: any) => void;
}

function Abbr(props: AbbrProps) {
  const { DS_Type, label, abbr, current, index } = props;

  useEffect(() => {
    if (current === index && DS_Type !== label) {
      props.onSelect(label);
    }
  });

  return <span>{DS_Type === label ? label : abbr}</span>;
}

const mapStateToProps = (state: CombinedState) => {
  const { generalReducer, sortReducer, listsReducer } = state;

  return {
    DS_Type:
      generalReducer.currentModule === "SORTING"
        ? sortReducer.sortType
        : listsReducer.listType,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSelect: (type: DS_TYPE) => dispatch(setDSType(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Abbr);
