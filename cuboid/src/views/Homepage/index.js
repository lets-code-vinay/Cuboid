import React, { useEffect, useState } from "react";
import { func } from "prop-types";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Box, Typography } from "@material-ui/core";

import SwipeAbleTemporaryDrawer from "../../Components/CustomDrawer";

import { GIT_DATA } from "../../Configs/api";

import { httpGet } from "../../utils/httpRequests";

import UserListing from "../UserInfo/UserListing";
import { userDetail } from "../UserInfo/data";

import { setUserImagesAction } from "../../Redux/userData/action";

const Homepage = ({ setUserImagesAction }) => {
  // States
  const [userData, setUserData] = useState(userDetail);
  const [isUserEditing, setUserEditing] = useState(false);

  // Getting initial Data
  useEffect(() => {
    setUserEditing(false);

    fetchData();
  }, []);

  /**
   * Fetching user images
   */
  const fetchData = async () => {
    try {
      const { data } = await httpGet(GIT_DATA);
      const { items = [] } = data || {};

      const avatar =
        items.length > 0 &&
        items.map((user, index) => {
          const { avatar_url: avatar = "" } = user || {};
          const code = avatar
            .replace("https://avatars.githubusercontent.com/u/", "")
            .replace("?v=4", "");
          const version = avatar.split("?");

          return {
            [`image-${index + 1}`]: avatar,
            label: code,
            value: avatar,
            version: version[1],
          };
        });

      setUserImagesAction(avatar);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * USer editing using Edit button
   */
  const onUserEditing = () => {
    setUserEditing(true);
  };

  return (
    <Box
      style={{
        backgroundColor: "darkblue",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >
        <Typography
          gutterBottom={true}
          variant={"h4"}
          className="homepage-title"
        >
          I am an Avenger
        </Typography>
        <span></span>

        <SwipeAbleTemporaryDrawer
          anchor="right"
          isUserEditing={isUserEditing}
          setUserEditing={setUserEditing}
        />
      </Box>

      <UserListing user={userData} onUserEditing={onUserEditing}></UserListing>
    </Box>
  );
};

/**
 * Props validation
 */
Homepage.propTypes = {
  setUserImagesAction: func,
};

/**
 * Default Props
 */
Homepage.propTypes = {
  setUserImagesAction: () => {},
};

/**
 * Mapping States to props
 */
const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps, {
  setUserImagesAction,
})(Homepage);
