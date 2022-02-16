import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";

import { GIT_DATA } from "../../Configs/api";
import { httpGet } from "../../utils/httpRequests";

import UserListing from "../UserInfo/UserListing";
import { userDetail } from "../UserInfo/data";
import SwipeAbleTemporaryDrawer from "../../Components/CustomDrawer";

const Homepage = () => {
  // States
  const [userImages, setUserImages] = useState([]);
  const [userData, setUserData] = useState(userDetail);
  const [isUserEditing, setUserEditing] = useState(false);

  console.log("userData", userData, typeof userData);

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
        items.map((user) => {
          const { avatar_url: avatar = "" } = user || {};
          return avatar;
        });

      setUserImages(avatar);
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

export default Homepage;
