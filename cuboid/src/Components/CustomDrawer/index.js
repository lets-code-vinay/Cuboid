import React, { useCallback, useState } from "react";
import { bool, func, string } from "prop-types";

import { Close as CloseIcon, Add as AddIcon } from "@material-ui/icons";
import { Box, Button } from "@mui/material";
import { Drawer } from "@mui/material";
import AddEditUser from "../../views/AddEditUser";

const SwipeAbleTemporaryDrawer = ({
  anchor = "left",
  isUserEditing,
  setUserEditing,
}) => {
  const [state, setDrawer] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  /**
   * Toggling Drawer with callback
   */
  const toggleDrawer = useCallback(
    (anchor, open) => (event) => {
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setUserEditing(open);

      setDrawer({ ...state, [anchor]: open });
    },
    [state, setUserEditing]
  );

  /**
   *
   * @param {String} anchor
   * @returns
   */
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 700,
      }}
      role="presentation"
    >
      <AddEditUser />
    </Box>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        <Button
          variant="contained"
          color="primary"
          onClick={toggleDrawer(anchor, true)}
          endIcon={<AddIcon />}
        >
          {"Add User"}
        </Button>

        <Drawer
          disableEscapeKeyDown
          anchor={anchor}
          open={state[anchor] || isUserEditing}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
          variant={"temporary"}
          hideBackdrop={true}
        >
          {list(anchor)}

          {/* Closing button for Drawer  */}
          <Button
            variant="contained"
            color="primary"
            style={{
              width: "100px",
              margin: "auto",
            }}
            onClick={toggleDrawer(anchor, false)}
            endIcon={<CloseIcon />}
          >
            Close
          </Button>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

SwipeAbleTemporaryDrawer.propType = {
  anchor: string,
  component: bool,
  isUserEditing: bool,
  setUserEditing: func,
};

SwipeAbleTemporaryDrawer.defaultProps = {
  anchor: "left",
  isUserEditing: false,
  setUserEditing: () => {},
};

export default SwipeAbleTemporaryDrawer;
