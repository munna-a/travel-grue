import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

import './cart.css'
const Cart = () => {
    return (
        <div>
            <div className="booking-area">
                <h1>COX'S BAZAR</h1>
                <p> Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong.</p>
                <button className='btn btn-warning'>Booking</button>
            </div>
            <div className="cart-area d-flex flex-row">
                <div className="cart1 d-flex align-items-end">
                    <Link to="/cox's"><h4>COX'S BAZAR</h4></Link>
                </div>
                <div className="cart2 d-flex align-items-end">
                    <Link to="/sreemangal"><h4>SREEMANGAL</h4></Link>
                </div>
                <div className="cart3 d-flex align-items-end">
                    <Link to="/sundarban"><h4>SUNDARBAN</h4></Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;