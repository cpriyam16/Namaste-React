import { useEffect, useState, ususeEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RES_URL } from "./../utils/constants"

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const { resId } = useParams();

    const fetchMenu = async () => {
        const data = await fetch(RES_URL + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

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
