import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  inline: {
    display: "inline"
  },
  media: {
    marginRight: "10px",
    height: "102px",
    width: "102px"
  },
  profile: {
    borderRadius: "6px"
  },
  tweet: {
    minWidth: "255px",
    maxWidth: "350px"
  }
}));

const Tweet = ({ avatar, tweet }) => {
  const classes = useStyles();
  return (
    <>
      <List className={classes.root}>
        <Paper className={classes.media} elevation={5}>
          <img
            className={classes.profile}
            src={avatar}
            alt="user"
            loading="lazy"
          />
        </Paper>

        <ListItemText className={classes.tweet} secondary={tweet} />
      </List>
    </>
  );
};

export default Tweet;
