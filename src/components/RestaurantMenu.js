import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu'

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId)

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