import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const userSession = require("../../controller/session.controller");

function AddMovie() {
    const [user, setUser] = useState(false);
    const [message, setMessage] = useState(false);
    const [titel, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");
    const [picture, setPicture] = useState("assets/missing.png");
    const [genre, setGenre] = useState("");

    useEffect(() => {
        let userLogged = userSession.getSession();
        if (userLogged) {
            setUser(userLogged);
        }
    }, []);

    async function addNewMovie(titel, year, description, picture, genre) {
        const response = await fetch("/movie", {
            method: "PUT",
            headers: { "content-type": "application/json", },
            body: JSON.stringify({
                titel: titel,
                year: year,
                description: description,
                picture: picture,
                genre: genre
            }),
        });
        const data = await response.json();
        console.log(data);
        return data;
    }

    return (
        <div className="Body">
            <form onSubmit={async (event) => {
                event.preventDefault();
                var respons = await addNewMovie(titel, year, description, picture, genre);
               
                if (respons.respons === "success") {
                    setMessage(true);
                }
            }}>
                {message ? <h3>Done!</h3>:<h3></h3>}
                <p>
                    <label htmlFor="titel">Titel </label><br />
                    <input type="text" className='itemField' id="titel" placeholder="Enter titel" value={titel} onChange={(event) => { setTitle(event.target.value) }} /><br />
                    <small id="titelRequired"> (This is required!)</small>
                </p>

                <p>
                    <label htmlFor="titel">Year </label><br />
                    <input type="text" className='itemField' id="year" placeholder="Enter year" value={year} onChange={(event) => { setYear(event.target.value) }} />
                </p>

                <p>
                    <label htmlFor="titel">Description </label><br />
                    <textarea id="description" className='itemField' placeholder="Enter description" value={description} onChange={(event) => { setDescription(event.target.value) }} />
                </p>

                <p>
                    <label htmlFor="picture">Picture link </label><br />
                    <input type="text" className='itemField' id="picture" placeholder="Enter the picture's link" value={picture} onChange={(event) => { setPicture(event.target.value) }} />
                </p>

                <p>
                    <label htmlFor="genre">Genre </label><br />
                    <input type="text" className='itemField' id="genre" placeholder="Enter genre" value={genre} onChange={(event) => { setGenre(event.target.value) }} />
                </p>
                <p><input type="submit" value="Add" /></p>
            </form>

        </div>
    );
}

export default AddMovie;