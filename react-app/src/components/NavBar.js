import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { io } from "socket.io-client";
import Chat from "./Test";

const NavBar = () => {
  // let socket;

  // socket = io.connect("http://127.0.0.1:3000");

  // socket.on("connect", function () {
  //   socket.emit("my event", { data: "I'm connected!" });
  // });

  return (
    <nav>
      <div>
        {" "}
        <Chat />{" "}
      </div>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
