import React from "react";
import { makeStyles, Theme, Button } from "@material-ui/core";

export function AbbrButton(props: AbbrButtonProps) {
  const classes = useStyles(props);

  const { active, value, abbr } = props;

  return (
    <Button classes={{ root: classes.root }} color="primary">
      {active ? value : abbr}
    </Button>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: (props: AbbrButtonProps) => (props.active ? "white" : "grey"),
  },
}));
