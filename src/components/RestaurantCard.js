import React from 'react'
import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla } = resData?.info;
    return (
        <div className="restaurant-card">
            <img src={`${CDN_URL}${cloudinaryImageId}`} alt={name} />
            <div className='restaurant-info'>
                <h2>{name}</h2>
                <p>{cuisines.join(", ")}</p>
                <p>{costForTwo}</p>
                <p>Rating: {avgRating}</p>
                <p>Delivery in {sla.deliveryTime} mins</p>
            </div>
        </div>
    );
}

export default RestaurantCard
