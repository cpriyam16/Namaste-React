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
            <div className="card-info">
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <div className="flex justify-between">
                    <h4>{avgRating}</h4>
                    <p>{deliveryTime} minutes</p>
                </div>
            </div>
        </div>
    );
};

export const withLabelOpen = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-800 text-white m-2 p-2">Open now</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;