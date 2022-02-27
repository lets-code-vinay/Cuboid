import React, { useState } from "react";
import { Box, Tab, Tabs } from "@material-ui/core";

import { USER_TABS } from "../../Configs/configs";
import UserBasicData from "./UserBasicDetail";
import Experience from "./Experience";
import Education from "./Education";

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
  };
  return (
    <>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        style={{ width: "80%", margin: 0, justifyContent: "start" }}
      >
        <Tabs
          value={activeTab}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          style={{
            width: 600,
            padding: "10px 15px",
          }}
        >
          {Object.values(USER_TABS).map(({ label, value }, tabIndex) => {
            return (
              <Tab
                label={label}
                key={tabIndex}
                style={{ minWidth: 100, width: 100 }}
              />
            );
          })}
        </Tabs>
      </Box>
      <Box
        sx={{
          width: 600,
          height: 300,
          padding: "10px 15px",
        }}
      >
        {activeTab === 0 && <UserBasicData />}
        {activeTab === 1 && <Education />}
        {activeTab === 2 && <Experience />}
      </Box>
    </>
  );
};

export default AddEditUser;
