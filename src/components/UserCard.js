import React from "react";
import Button from "./Button";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const UserCard = ({ setOpen }) => (
  <>
    <Box
      display="flex"
      flexWrap="wrap"
      height="150px"
      justifyContent="space-around"
    >
      <Box marginTop="20px" width="190px">
        <Typography variant="h5" align="center">
          User Name
        </Typography>
        <Typography variant="subtitle2">Here you can see user bio</Typography>
      </Box>
      <Button alignself="center" onClick={() => setOpen(true)}>
        Create New Tweet
      </Button>
    </Box>
  </>
);

export default UserCard;
