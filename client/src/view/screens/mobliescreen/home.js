import React from 'react';
import { Divider } from 'primereact/divider';

function Home_mobilescreen() {
    const [Scooters, setScooters] = React.useState([]);

    React.useEffect(() => {
        fetch("/v1/scooters")
            .then((res) => res.json())
            .then((data) => setScooters(data));
    }, []);

    return (
        <div className="Body">
            <h1 className="pageHeader">Mobile Screen</h1>
        </div>
    )
}

export default Home_mobilescreen;
