import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const bodyStyle = {
    padding: "30px",
};

const Body = () => {
    const [restaurantCardList, setRestaurantCardList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const filterListHandler = () => {
        const filterLists = restaurantCardList.filter(
            (res) => res.info.avgRating > 4,
        );
        setFilteredRestaurant(filterLists);
    };

    const unfilterListHandler = () => {
        setRestaurantCardList(restaurantCardList);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        );

        const json = await data.json();
        const jsonData = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantCardList(jsonData);
        setFilteredRestaurant(jsonData);

    };

    //conditional rendering
    return restaurantCardList.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body" style={bodyStyle}>
            <div className="flex align-middle justify-end">
                <div className="mx-4">
                    <input type="search" className="searchInput" placeholder="search" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} /><button className="searchBtn" onClick={() => {
                        const searchFilterData = restaurantCardList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(searchFilterData);
                    }}>Search</button>
                </div>
                <button className=" p-2 from-neutral-50 bg-orange-400 hover: bg-orange-600" onClick={filterListHandler}>
                    Top Rated
                </button>
                <button className="unfilter-btn" onClick={unfilterListHandler}>
                    Reset
                </button>
            </div>
            <div className="res-container flex">
                {filteredRestaurant.map((restaurant) => {
                    return (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} className="restaurant-card">
                            <RestaurantCard resCardData={restaurant}
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
