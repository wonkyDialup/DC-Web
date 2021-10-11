import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
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
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData);
  // useEffect is a hook
  // hook that fires when the component is mounted
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

      dispatch({
        type: "GET_USERS",
        payload: { ...jsonNews.results[0] },
      });
    };

    getNewsData();
    return () => { };
  },
    [counter, dispatch]
  );

  // const dispatch = useDispatch()

  return (
    <HeaderContainer>
      {/* <button onClick={() => dispatch({ type: "SET_FOOD", payload: ['PF Chang', 'KFC', 'Kani', 'Wild Wing', 'Salad'] })}>Dispatch Action</button> */}
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