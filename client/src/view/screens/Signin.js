import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link } from "react-router-dom";
const userController = require("../../controller/user.controller");
const userSession = require("../../controller/session.controller");

async function signInUser(name, password) {
    const response = await fetch("/user/login", {
        method: "POST",
        headers: { "content-type": "application/json", },
        body: JSON.stringify({
            username: name,
            password: password,
            //email: email,
        }),
    });
    const data = await response.json();
    return data;
}


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(false)

    const navigate = useNavigate();
    const redirection = () => {
        navigate('/')
    }

    return (
        <div className='Body'>
            <div className="formDiv">
                <h1 className="pageHeader">Login</h1>
                <div className="spaceVertical"></div>
                <div className="imageHeader">
                    <img alt="scooter" src="/assets/scooter.png" height={250} />
                </div>
                {message ? <h1 className="pageHeader">Failed!</h1> : <p></p>}
                <Form onSubmit={async (event) => {
                    event.preventDefault();
                    let data = await signInUser(email, password);
                    if (data.respons === "success") {
                        userSession.removeSession();
                        userSession.setSession(data.data);
                        setMessage(false);
                        redirection();
                        window.location.reload(false);
                    } else {
                        console.log("Failed!");
                        setMessage(true);
                    }
                }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                        <Form.Text className="text-muted">
                            We'll never share your data with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => { setPassword(event.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Show password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div className="spaceVertical"></div>
                <div className="spaceVertical"></div>
                <div className="spaceVertical"></div>
                <h6 className="textHeader">Don't have an account yet?<Link to="/signup"> Sign up</Link></h6>
            </div>
        </div>
    );
}

export default Login;