
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './booking.css'
import Place from '../FakeData/place.json'
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import Nav from '../Navbar/Nav';

const Booking = () => {
    const { id } = useParams()
    const place = [...Place];
    const data = place[id];

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <div className="booking-header">
            <Nav></Nav>
            <div className="left-area">
             <h1>{data.name}</h1>
             <p>{data.details}</p>
            </div>
            <div className="right-area">
                <form action="">
                <label>Origin</label><br/>
                <input type="text" value="Dhaka" required/><br/>
                <label>Destination</label><br/>
                <input type="text" value={data.name} required/><br/>
                <div className="calender-box1">
                  <label>From</label><br />
                  <label className="d-flex wrap">
                    <img src="https://www.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png" height="37" alt=""/>
                        <DatePicker className="red-border w-75" closeOnScroll={true} selected={startDate} calendarIcon onChange={date => setStartDate(date)}/>
                  </label>
                </div>
                <div className="calender-box2">
                     <label>To</label><br />
                        <label className="d-flex wrap">
                            <img src="https://www.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png"  height="37" alt=""/>
                            <DatePicker className="red-border w-75" closeOnScroll={true} selected={endDate} calendarIcon onChange={date => setEndDate(date)}/>
                        </label>
                     </div>
                     <Link to={`/hotels/${data.name}`} className="btn btn-warning w-100">Start Booking</Link>
                </form>
                
                
            </div>
        </div>
    );
};

export default Booking;