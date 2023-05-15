import { Button } from 'primereact/button';
import React, { useEffect, useState } from "react";
import { DataScroller } from 'primereact/datascroller';
import { useNavigate } from "react-router-dom";
const userSession = require("../../controller/session.controller");



function DelMovie() {
    const [user, setUser] = useState(false);
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        let userLogged = userSession.getSession();
        if (userLogged) {
            setUser(userLogged);
        }
    }, []);

    useEffect(() => {
        fetch("/movie")
            .then((res) => res.json())
            .then((data) => setDocs(data));
    }, []);

    async function deleteMovie(id, key) {
        const response = await fetch("/movie/" + id, {
            method: "DELETE",
            headers: { "content-type": "application/json", },
            body: JSON.stringify({
                id: id,
                key: key
            }),
        });
        const data = await response.json();
        console.log(data);
        return data;
    }

    const navigate = useNavigate();
    const redirection = () => {
        navigate('/delmovie')
    }

    function itemTemplate(data) {
        return (
            <div className="product-item">
                <img src={data.picture} alt={data.picture} />
                <div className="product-detail">
                    <div className="product-name">
                        {data.titel + " "}
                        {data.favorite ?
                            <><i className="pi pi-heart product-category-icon" ></i></>
                            :
                            <><i></i></>
                        }
                    </div>
                    <br />
                    <div className="product-description">{data.description}</div>
                    <i className="pi pi-calendar product-category-icon"></i><span className="product-category">{data.year}</span>
                    <br />
                    <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.genre}</span>
                </div>

                <div className="product-action">
                    <Button label="" icon="pi pi-trash" onClick={(event) => {
                        deleteMovie(data.id, user); redirection();
                        window.location.reload(false);
                    }} />
                </div>

            </div>
        );
    }

    return (
        <div className="Body">
            <div className="datascroller-demo">
                <div className="card">
                    <DataScroller value={docs} itemTemplate={itemTemplate} rows={5} inline scrollHeight="550px" header="Scroll Down to Load More" />
                </div>
            </div>
        </div>
    );
}

export default DelMovie;