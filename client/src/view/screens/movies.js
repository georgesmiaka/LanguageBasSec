import { Divider } from 'primereact/divider';
import React, { useEffect, useState } from "react";
import { DataScroller } from 'primereact/datascroller';
const userSession = require("../../controller/session.controller");



function Movies() {
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

  function itemTemplate(data) {
    return (
      <div className="product-item">
        <img src={data.picture} alt={data.picture} height={200} width={400}/>
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

export default Movies;