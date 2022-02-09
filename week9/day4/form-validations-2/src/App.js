import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Dashboard from "./components/Dashboard";
import { MainContainer } from "./styled-components/AppStyle";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import { useState } from "react";
import Garage from "./components/Garage";
import Account from "./components/Account";
import { LoginContainer } from "./styled-components/LoginStyle";


function App() {
  const [viewSidebar, setViewSidebar] = useState(true);
  // const [loggedIn, setLoggedIn] = useState(false);
  const register = true;

  const user = JSON.parse(localStorage.getItem("supabase.auth.token"));
  console.log({ user });
  return (
    <Router>
      <Switch>
        {user ? (
          <>
            <Route path="/register">
              <LoginContainer>
                <Login register={register} />
              </LoginContainer>
            </Route>
            <MainContainer>
              <Header
                viewSidebar={viewSidebar}
                setViewSidebar={setViewSidebar}
              />
              <Sidebar viewSidebar={viewSidebar} />

              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/garage">
                <Garage />
              </Route>
              <Route path="/account">
                <Account />
              </Route>
            </MainContainer>
          </>
        ) : (
          <Route path="/login"> 
              <Login />
            </Route>
        )}
      </Switch>
    </Router>
  );
}

export default App;