import React from 'react';
import './hotels.css'

const HotelFeature = (props) => {
    console.log(props);
    const {title, feature, details, rating, cost, image} = props.data;
    return (
        <div className="custom-style">
            
            <div className="image-area">
                <img src={image} height="150px" alt=""/>
            </div>
            <div className="content">
                <p className="text-dark title-style">{title}</p>
                <p className="text-dark">{feature}</p>
                <p className="text-dark">{details}</p>
                <p className="text-dark">Cancellation fexibility available</p>
                <div className="rating-cost-area">
                    <img src="https://img.pngio.com/download-gold-star-png-transparent-image-gold-star-transparent-star-transparent-background-png-840_839.png" height="35px" alt=""/>
                    <span>{rating}</span> <span>${cost}/night</span>
                </div>
            </div>
        </div>
    );
};

export default HotelFeature;