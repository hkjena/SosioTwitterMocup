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
    width: "40%",
    textAlign: "center"
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
  const [error, setError] = useState(false);

  const handelChange = e => {
    e.target.value.trim() === "" ? setError(true) : setError(false);
    setTweet(e.target.value);
  };

  const formSubmit = async e => {
    e.preventDefault();
    if (tweet.trim() === "") return;
    setLoading(true);
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
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={() => {
            setOpen(false);
            setError(false);
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <form onSubmit={formSubmit}>
            <div className={classes.form}>
              <TextField
                error={error}
                id="outlined-name"
                label="Enter Tweet"
                className={classes.text}
                value={tweet}
                onInput={e => handelChange(e)}
                variant="outlined"
                rows={3}
                multiline
                helperText={error && "Incorrect entry."}
                required
              />
              <Button className={classes.btn} type="submit" color="red">
                {loading ? (
                  <>
                    <CircularProgress
                      color="inherit"
                      className={classes.spinner}
                      size="20px"
                    />
                  </>
                ) : (
                  "Submit"
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
