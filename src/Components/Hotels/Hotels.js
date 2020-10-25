import React from 'react';
import { useParams } from 'react-router-dom';
import HotelData from '../FakeData/resturant.json'
import './hotels.css'
import HotelFeature from './HotelFeature';
import LogNav from '../Navbar/LogNav';
import MyMap from '../GoogleMap/GoogleMap';

const Hotels = () => {
    const {name} = useParams();
    const data = [...HotelData];
    console.log(data);

    const filterHotel = data.filter(each => each.place === name)

    return (
        <div className="main-container">
            <LogNav></LogNav>
            <div className="hotel-area mb-10">
            <div className="title">
                <h6>Stay in {name}</h6>
            </div>
            {
                filterHotel.map(each => <HotelFeature key={each.id} data={each}></HotelFeature>)
            }
            </div>
            <div className="map-area">
                <MyMap></MyMap>
            </div>
        </div>
    );
};

export default Hotels;