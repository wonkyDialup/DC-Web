import React from "react";
import SidebarLinks from "./SidebarLinks";
import { SidebarContainer } from "../styled-components/SidebarStyle";
import { sidebardata } from "./SidebarLinksData.js";

export default function Sidebar(props) {
  const viewSidebar = props.viewSidebar;
  return (
    <>
      {viewSidebar ? (
        <SidebarContainer>
          {sidebardata?.map((linkData) => (
            <SidebarLinks linkData={linkData} />
          ))}
        </SidebarContainer>
      ) : (
        <></>
      )}
    </>
  );
}