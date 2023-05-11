import React, { useEffect, useState } from "react";
import LayoutService from "../../service/layout.service";
const userSession = require("../../controller/session.controller");

function NavBar() {
  const [user, setUser] = useState(false);
  useEffect(() => {
      let userLogged = userSession.getSession();
      if (userLogged) {
          setUser(userLogged);
      }
  }, []);
  return (
    < LayoutService />
  );
}

export default NavBar;