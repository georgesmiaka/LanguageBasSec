import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const userSession = require("../../controller/session.controller");


function Info() {

    const [user, setUser] = useState(false);
    useEffect(() => {
        let userLogged = userSession.getSession();
        if (userLogged) {
            setUser(userLogged);
        }
    }, []);

    return (
        <div className='Body'>
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 mb-4 mb-sm-5">
                            <div class="card card-style1 border-0">
                                <div class="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6 mb-4 mb-lg-0">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                        </div>
                                        <div class="col-lg-6 px-xl-10">
                                            <div class="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                                                <h3 class="h2 text-white mb-0">{user}</h3>
                                                <span class="text-primary">User</span>
                                            </div>
                                            <ul class="list-unstyled mb-1-9">
                                                <li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Balance:</span>{user.balance}</li>
                                                <li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Permission:</span>{user.permission}</li>
                                                <li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Active:</span>{user.active}</li>
                                                <li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Joined:</span>{user.joined}</li>
                                            </ul>
                                            <ul class="social-icon-style1 list-unstyled mb-0 ps-0">
                                                <li><a href="#!"><i class="ti-twitter-alt"></i></a></li>
                                                <li><a href="#!"><i class="ti-facebook"></i></a></li>
                                                <li><a href="#!"><i class="ti-pinterest"></i></a></li>
                                                <li><a href="#!"><i class="ti-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Info;