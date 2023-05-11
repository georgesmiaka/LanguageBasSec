import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
const userSession = require("../../controller/session.controller");


function SignOut() {

    const [user, setUser] = useState(false);
    useEffect(() => {
        let userLogged = userSession.getSession();
        if (userLogged) {
            setUser(userLogged);
        }
    }, []);
    const navigate = useNavigate();
    const redirection = () => {
        navigate('/')
    }
    return (
        <div className='Body'>
            <div className="formDiv">
                <h1 className="pageHeader">See you soon, {user}!</h1>
                <div className="spaceVertical"></div>
                <div className="imageHeader">
                    <img alt="scooter" src="/assets/scooter.png" height={250} />
                </div>
                <div className="spaceVertical"></div>
                <div className="spaceVertical"></div>
                <div className="logoutBtn">
                    <Button variant="outline-success" onClick={(event) => {
                        userSession.removeSession();
                        redirection();
                        window.location.reload(false);
                    }}>Logout</Button>
                </div>
            </div>
        </div>
    );
}

export default SignOut;