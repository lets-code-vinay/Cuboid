import { SET_USER_IMAGES } from "./constants";

/**
 * Setting user images from API
 *
 * @param {*} userImages
 * @returns
 */
export const setUserImagesAction = (userImages) => {
  return {
    type: SET_USER_IMAGES,
    data: userImages,
  };
};
