import RestaurantCard from "./RestaurantCard";
import { resCardList } from "../utils/mockData";
import { useState } from "react";

const bodyStyle = {
    padding: "30px",
};

const Body = () => { 
    const [restaurantCardList, setRestaurantCardList] = useState(resCardList);

    const filterListHandler = () => {
        const filterLists = restaurantCardList.filter((res) => res.info.avgRating > 4.5);
        setRestaurantCardList(filterLists);
    };

    const unfilterListHandler = () => {
        setRestaurantCardList(resCardList);
    };
    
    return (
        <div className="body" style={bodyStyle}>
            <div className="filter">
                <button className="filter-btn" onClick={filterListHandler}>Top Rated</button>
                <button className="unfilter-btn" onClick={unfilterListHandler}>Reset</button>
            </div>
            <div className="res-container">
                {restaurantCardList.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} resCardData={restaurant} />;
                })}
            </div>
        </div>
    );
};

export default Body;