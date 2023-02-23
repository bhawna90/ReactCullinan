import React, { useState } from "react";

import "../styles/App.css";

import User from "../models/user";

const App = () => {
  const [userName, setUserName] = useState("");

  const [userEmail, setUserEmail] = useState("");

  const [userPassword, setUserPassword] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [user, setUser]=useState({})

  const [loginEmail, setLoginEmail] = useState("");

  const [loginPassword, setLoginPassword] = useState("");

  const [activePage, setActivePage] = useState(false);

  const handlePassword = () => {
    if (currentPassword === confirmPassword) {
      setUserPassword(confirmPassword);
    }
  };

  const handleClick = () => {
    handlePassword();
    const userObj = new User(userEmail, currentPassword, userName)
    console.log(userObj);
    setUser(userObj)
  };

  const handleLogin = () => {
    console.log("user",user,loginEmail,loginPassword);
    if (loginEmail === user.email && loginPassword === user.password) {
      setActivePage(true);
    }
  };

  return (
    <div id="main">
      <table id="all-users">
        <tbody>
          <tr>
            <th>Name</th>

            <th>Email</th>

            <th>Password</th>
          </tr>

          <tr>
            <td key={user.name}>{/** user's name */ user.name}</td>

            <td key={user.email}>{/** user's email */ user.email}</td>

            <td key={user.password}>{/** user's password */ user.password}</td>
          </tr>
        </tbody>
      </table>
  {!activePage? 
  
      <div>
        <form className="signup-form">
          <label htmlFor="signupName">Name</label>

          <input
            type="text"
            name="signupName"
            id="signupName"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <label htmlFor="signupEmail">Email</label>

          <input
            type="email"
            name="signupEmail"
            id="signupEmail"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />

          <label htmlFor="signupPassword">Password</label>

          <input
            type="password"
            name="signupPassword"
            id="signupPassword"
            onChange={(e) => {
              setCurrentPassword(e.target.value);
            }}
          />

          <label htmlFor="signupConfirmPassword">Confirm Password</label>

          <input
            type="password"
            name="signupConfirmPassword"
            id="signupConfirmPassword"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </form>

        <button id="signup-button" type="button" onClick={handleClick}>
          {console.log(User.password)}
          Signup
        </button>

        <form className="login-styles">
          <label htmlFor="loginEmail">Email</label>

          <input
            id="loginEmail"
            name="loginEmail"
            type="email"
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />

          <label htmlFor="loginPassword">Password</label>

          <input
            id="loginPassword"
            name="loginPassword"
            type="password"
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
        </form>

        <button id="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
      :
      (
        <div>
          <h3 id="username">{/** Logged in user's name */ user.name}</h3>

          <h3 id="email">{/** Logged in user's email */ user.email}</h3>

          <button
            id="logout-button"
            onClick={() => {
              setActivePage(false);
            }}
          >
            Logout
          </button>
        </div>
      )}

     
    </div>
  );
};

export default App;
