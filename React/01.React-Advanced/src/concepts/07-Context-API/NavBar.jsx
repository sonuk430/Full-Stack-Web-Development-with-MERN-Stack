import React, { createContext, useState } from "react";
import NavLinks from "./NavLinks";
import { useContext } from "react";

export const NavBarContext = createContext();

export const useAppContext = () => useContext(NavBarContext);

const NavBar = () => {
  const [user, setUser] = useState({ name: "Bob" });

  const logOut = () => {
    setUser(null);
  };
  return (
    <NavBarContext.Provider value={{ user, logOut }}>
      <nav className="navbar">
        <h5>Context API</h5>
        <NavLinks />
      </nav>
    </NavBarContext.Provider>
  );
};

export default NavBar;
