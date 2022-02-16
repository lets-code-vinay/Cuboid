import React, { useState } from "react";
import { Box, Tab, Tabs } from "@material-ui/core";

import { USER_TABS } from "../../Configs/configs";

const AddEditUser = () => {
  const [activeTab, setActiveTab] = useState(0);

  /**
   * Handling/ Changing TAbs
   *
   * @param {Object} e
   * @param {Number} activeTab
   */
  const handleChange = (e, activeTab) => {
    e.preventDefault();
    setActiveTab(activeTab);
    console.log("e--", e.target.value, activeTab);
  };
  return (
    <>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        style={{ width: "60%", margin: 0, justifyContent: "start" }}
      >
        <Tabs
          value={activeTab}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
        >
          {Object.values(USER_TABS).map(({ label, value }, tabIndex) => {
            return <Tab label={label} key={tabIndex} />;
          })}
        </Tabs>
      </Box>
      <Box>
        {activeTab == 0 && <h1>ACtive tab = 0</h1>}
        {activeTab == 1 && <h1>ACtive tab = 1</h1>}
      </Box>
    </>
  );
};

export default AddEditUser;
