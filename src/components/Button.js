import React from "react";
import styled from "@material-ui/core/styles/styled";
import { Button } from "@material-ui/core";

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: props =>
    props.color === "red"
      ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
      : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: props =>
    props.color === "red"
      ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
      : "0 3px 5px 2px rgba(33, 203, 243, .3)",
  color: "white",
  height: 40,
  padding: "0 30px",
  fontWeight: "bold",
  alignSelf: props => (props.alignself === "center" ? "center" : "auto"),
  textTransform: "inherit",
  margin: 8
});

export default MyButton;
