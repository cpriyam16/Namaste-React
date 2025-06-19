import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import Shimmer from './components/Shimmer';

const AppLayout = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchRestaurants, setSearchRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9967012&lng=77.758197&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json();

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setSearchRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const handleSearch = () => {
        const searchedRestaurants = searchRestaurants.filter(restaurant => {
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
        });
        setListOfRestaurants(searchedRestaurants);
    };

    return (
        <div className="app-layout">
            <Header />
            <main>
                <div className="search">
                    <input type="text" className='search-input' placeholder="Search..." value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        if (e.target.value === '') {
                            setListOfRestaurants(searchRestaurants);
                        }
                    }}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }} />
                    <button onClick={handleSearch}>Search</button>
                    <button className='top-rated-btn' onClick={() => {
                        const topRated = listOfRestaurants.filter(restaurant => restaurant.info.avgRating >= 4.5);
                        setListOfRestaurants(topRated);
                    }}>Top Rated</button>
                </div>
                <div className='restaurant-container'>
                    {listOfRestaurants.length === 0
                        ? <Shimmer />
                        :
                        listOfRestaurants.map((restaurant) => (
                            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                        ))
                    }
                </div>
            </main>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppLayout />
    </React.StrictMode>
);
