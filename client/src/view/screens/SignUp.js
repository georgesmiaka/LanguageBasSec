import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link } from "react-router-dom";
const userController = require("../../controller/user.controller");
const userSession = require("../../controller/session.controller");

async function addNewUser(name, password) {
    const response = await fetch("/v1/users", {
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

function SignUp() {
    const [name, setName] = useState("");
    //const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const redirection = () => {
        navigate('/')
    }

    return (
        <div className='Body'>
            <div className="formDiv">
                <h1 className="pageHeader">Sign up</h1>
                <div className="spaceVertical"></div>
                <div className="imageHeader">
                    <img alt="scooter" src="/assets/scooter.png" height={250} />
                </div>
                <Form onSubmit={async (event) => {
                    event.preventDefault();
                    let data = await addNewUser(name, password); // Save into DB
                    console.log(data.data);
                    if (data.data === "1 user/s added to database.") {
                        userSession.removeSession();
                        console.log(name);
                        userSession.setSession(data.id);
                        redirection();
                        window.location.reload(false);
                    } else {
                        console.log("Failed!");
                    }
                }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={name} onChange={(event) => { setName(event.target.value) }} />
                        <Form.Text className="text-muted">
                            Username should be minimum 2 characters.
                        </Form.Text>
                    </Form.Group>

                    {/*<Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>*/}

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => { setPassword(event.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div className="spaceVertical"></div>
                <div className="spaceVertical"></div>
                <div className="spaceVertical"></div>
                <h6 className="textHeader">Already have an account?<Link to="/login"> Sign in</Link></h6>
            </div>
        </div>
    );
}

export default SignUp;