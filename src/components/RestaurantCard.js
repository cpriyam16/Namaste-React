import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resCardData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, sla } =
        resCardData?.info;
    const { deliveryTime } = sla;
    return (
        <div className="res-card" style={{ backgroundColor: "#eeeeee" }}>
            <img
                className="res-card-img"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <p>{deliveryTime} minutes</p>
        </div>
    );
};

export default RestaurantCard;