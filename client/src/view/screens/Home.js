import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const userSession = require("../../controller/session.controller");

function Home() {
    const [user, setUser] = useState(false);

    useEffect(() => {
        let userLogged = userSession.getSession();
        if (userLogged) {
            setUser(userLogged);
        }
    }, []);

    return (
        <div className="Body">
            {user ?
                <h1 className="pageHeader">Welcome {user}!</h1>
                : <h1 className="textHeader">Friendly and amaizing</h1>}
            <div className="spaceVertical"></div>
            <div className="imageHeader">
                <img alt="logo" src="/assets/logo2.PNG" />
            </div>
            <div className="spaceVertical"></div>
            <div className="spaceVertical"></div>
            <div className="spaceVertical"></div>
            {user ?
                <h3 className="textHeader">Friendly and sustainable</h3>
                : <h6 className="textHeader"><Link to="/login">Admin sign in</Link></h6>}
        </div>
    );
}

export default Home;