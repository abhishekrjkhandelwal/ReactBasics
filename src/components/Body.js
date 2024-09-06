import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/dummyData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    //State Variable - Super powerful variable

    const [listofRest, setListOfRest] = useState([]);

    const [searchText, setSearchText] = useState("");

    console.log("Body Rendered")

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 1000)
        
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        setListOfRest(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return listofRest.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={() => {
                        //Filter the restraunt cards and update the UI
                        console.log(searchText)
                        const filteredRestro = listofRest.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                        setListOfRest(filteredRestro)
                    }}>search</button>
                </div>

                <button className="filter_btn" 
                onClick={() => {
                    //Filter out list of restro
                    const filterListofRest = listofRest.filter((res) => res.info.avgRating > 4)
                    setListOfRest(filterListofRest)

                }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                   listofRest.map(restaruant => (
                   <RestaurantCard key={restaruant.info.id} resData={restaruant}/>
                ))}
            </div>
        </div>
    )
}

export default Body;