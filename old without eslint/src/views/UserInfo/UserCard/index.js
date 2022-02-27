import React from "react";
import { func, shape } from "prop-types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import { Images } from "../../../Components/Images";

const UserCard = ({
  singleUser: { name = "", email = "", avatar = Images.defaultAvatar } = "",
  onUserEditing,
}) => {
  /**
   * Call back to edit user
   */
  const onEditUser = () => {
    onUserEditing();
  };

  /**
   * Handle Delete user
   */
  const onDeleteUser = () => {
    console.log("Deleting user");
  };

  return (
    <Card sx={{ maxWidth: "300px" }} style={{ width: "300px" }}>
      <CardMedia
        component="img"
        alt={`photo of ${name}`}
        height="140"
        image={avatar}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onEditUser}>
          Edit
        </Button>
        <Button size="small" onClick={onDeleteUser}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

UserCard.propTypes = {
  singleUser: shape({}),
  onUserEditing: func,
};

UserCard.defaultProps = {
  singleUser: {},
  onUserEditing: () => {},
};
export default UserCard;
