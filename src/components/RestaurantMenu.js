import { useEffect, useState, ususeEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, sla, avgRating } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>Menu</h3>
            <ul>
                {itemCards.map((itemCard) => (
                    <li key={itemCard.card.info.id}>
                        {itemCard.card.info.name} | Rs{itemCard.card.info.price / 100}
                    </li>
                ))}
            </ul>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime}</h4>
        </div>
    );
};

export default RestaurantMenu;
