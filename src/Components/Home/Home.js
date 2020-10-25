import React, { useState } from 'react';
import './home.css'
import Nav from '../Navbar/Nav';
import { Link } from 'react-router-dom';
import Place from '../FakeData/place.json'

const Home = () => {
    const place = [...Place];
    const [spot, setSpot] = useState(place[0])
    const handelCart = (id) => {
        setSpot(place[id])
    }
    return (
        <div className="main-div">
            <Nav></Nav>
            <div className="booking-area">
                <h1>{spot.name}</h1>
                <p>{spot.details}</p>
                <Link className="btn btn-warning" to={`/booking/${spot.id}`}>Booking</Link>
            </div>
            <div className="cart-area d-flex flex-row">
                <div onClick={() => handelCart (0)} className="cart1 d-flex align-items-end">
                    <h4>COX'S BAZAR</h4>
                </div>
                <div onClick={() => handelCart (1)} className="cart2 d-flex align-items-end">
                    <h4>SREEMANGAL</h4>
                </div>
                <div onClick={() => handelCart (2)} className="cart3 d-flex align-items-end">
                    <h4>SUNDARBAN</h4>
                </div>
            </div>
        </div>
    );
};

export default Home;