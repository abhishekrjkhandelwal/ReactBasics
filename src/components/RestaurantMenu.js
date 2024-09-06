import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();
    
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(
            MENU_URL+resId+"&catalog_qa=undefined&submitAction=ENTER"
        )
        const json = await data.json();
        setResInfo(json.data)
    }

    if (resInfo == null) return <Shimmer />; 

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => <li>{item?.card?.info?.name}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;