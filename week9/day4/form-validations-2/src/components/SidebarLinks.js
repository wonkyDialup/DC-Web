import React from "react";
import { SidebarLink } from "../styled-components/SidebarStyle";
export default function SidebarLinks(props) {
    console.log({ props });
    return(
        <>
        <SidebarLink to={props.linkData.path}>{props.linkData.name}</SidebarLink>
        </>
    );
}