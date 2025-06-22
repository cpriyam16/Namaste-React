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
        const response = await fetch('https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api');

        const json = await response.json();

        const restaurants = json?.data?.cards?.find(card =>
            card.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setListOfRestaurants(restaurants);
        setSearchRestaurants(restaurants);
    };


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
