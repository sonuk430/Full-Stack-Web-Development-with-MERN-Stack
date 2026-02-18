// import { useContext } from "react";
// import { NavBarContext } from "./NavBar";

import { useAppContext } from "./NavBar";

const UserContainer = () => {
  const { user, logOut } = useAppContext();

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there,{user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logOut}>
            LogOut
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

export default UserContainer;
