import React, { useEffect, useState } from "react";
import {
  UserButton,
  HeaderItem,
  HeaderContainer,
  UserPicture,
} from "../styled-components/HeaderStyle";

const URL = "https://randomuser.me/api/";

export default function Header(props) {
  const viewSidebar = props.viewSidebar;
  const setViewSidebar = props.setViewSidebar;
  const [user, setUser] = useState({});
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getNewsData = async () => {
      const getTheNews = await fetch(URL, {
        method: "GET",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonNews = await getTheNews.json();
      console.log(jsonNews);
      setUser({
        ...jsonNews.results[0],
        userImage: jsonNews?.results[0]?.picture?.thumbnail,
      });
    };
    getNewsData();
    return () => {};
  }, [counter]);



  return (
    <HeaderContainer>
      <UserButton onClick={() => setViewSidebar(!viewSidebar)}>
        {viewSidebar ? "Hide Sidebar" : "Show Sidebar"}
      </UserButton>
      <HeaderItem>FakeBook</HeaderItem>
      <HeaderItem>
        <UserButton onClick={() => setCounter(counter + 1)}>
          Get New User
        </UserButton>
      </HeaderItem>
      <HeaderItem>
        <p>
          Welcome {user?.name?.first} {""} {user?.name?.last}
        </p>
      </HeaderItem>

      <HeaderItem>
        <UserPicture src={user?.picture?.large} alt="" />
      </HeaderItem>
    </HeaderContainer>
  );
}