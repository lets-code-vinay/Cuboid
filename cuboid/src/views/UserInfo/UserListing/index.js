import React from "react";
import { arrayOf, func, shape } from "prop-types";
import { Box } from "@material-ui/core";

import UserCard from "../UserCard";

const UserListing = ({ user = [], onUserEditing }) => {
  return (
    <>
      <Box
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {user.length > 0 &&
          user.map((singleUser, imageIndex) => {
            return (
              <Box
                style={{
                  padding: "20px",
                }}
              >
                <UserCard
                  key={imageIndex}
                  singleUser={singleUser}
                  onUserEditing={onUserEditing}
                />
              </Box>
            );
          })}
      </Box>
    </>
  );
};

UserListing.propTypes = {
  user: arrayOf(shape({})),
  onUserEditing: func,
};

UserListing.defaultProps = {
  user: [],
  onUserEditing: () => {},
};

export default UserListing;
