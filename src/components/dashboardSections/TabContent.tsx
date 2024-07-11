import React from "react";
import Profile from "./profileForm/Profile";

const TabContent = ({ activeTab, setMobileMenu, mobileMenu }: any) => {
  return (
    <>
      {/* Render components based on activeTab */}
      {activeTab?.label === "Profile" && (
        <Profile
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
    </>
  );
};

export default TabContent;
