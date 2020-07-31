import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./Button";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import {
  TextField,
  DialogContent,
  Dialog,
  IconButton,
  CircularProgress
} from "@material-ui/core";

import { addTweet } from "../actions/index";
const useStyles = makeStyles(theme => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "red",
    marginBotom: "30px"
  },
  form: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  btn: {
    marginTop: "20px",
    width: "40%"
  },
  text: {
    width: "100%"
  },
  spinner: {
    marginLeft: "10px"
  }
}));

const TweetModal = ({ open, setOpen, addTweet }) => {
  const classes = useStyles();
  const [tweet, setTweet] = useState("");
  const [loading, setLoading] = useState(false);
  const formSubmit = async e => {
    setLoading(true);
    e.preventDefault();
    await addTweet(tweet);
    setLoading(false);
    setTweet("");
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        maxWidth={"xs"}
        fullWidth
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={() => setOpen(false)}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <form onSubmit={formSubmit}>
            <div className={classes.form}>
              <TextField
                id="outlined-name"
                label="Enter Tweet"
                className={classes.text}
                value={tweet}
                onChange={e => setTweet(e.target.value)}
                variant="outlined"
                rows={3}
                multiline
                required
              />
              <Button className={classes.btn} type="submit" color="red">
                Submit{" "}
                {loading && (
                  <CircularProgress
                    color="inherit"
                    className={classes.spinner}
                    size="20px"
                  />
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default connect(
  null,
  { addTweet }
)(TweetModal);
