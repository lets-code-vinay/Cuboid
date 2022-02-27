import { createSelector } from "reselect";

const UserDataSetUp = () => (state) => state.get("userData");

/**
 * Get user data from State
 *
 * @returns {object}
 */
export const getUserImages = () =>
  createSelector(UserDataSetUp(), (state) => state.userImages);
