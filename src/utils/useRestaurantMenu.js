import { useEffect, useState } from "react";
import { RES_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resMenuInfo, setResMenuInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    });
    
    const fetchMenu = async () => {
        const resMenuData = await fetch(RES_URL + resId);
        const json = await resMenuData.json();
        setResMenuInfo(json.data);
    };

    return resMenuInfo;
};

export default useRestaurantMenu;
