import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    //State Variable - Super powerful variable

    const [listofRest, setListOfRest] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

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

    const onlineStatus = useOnlineStatus();

    if(onlineStatus == false)
        return (
        <h1>
            Look like you are offline!! Please check your interent connection;
        </h1>
    );

    return listofRest.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex">
                
                <div className="search p-4 m-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        //Filter the restraunt cards and update the UI
                        console.log(searchText)
                        const filteredRestro = listofRest.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                        setListOfRest(filteredRestro)
                    }}>search</button>
                </div>

                <div className="search p-4 m-4 flex iterms-center">
                    <button className="filter_btn" 
                    onClick={() => {
                        //Filter out list of restro
                        const filterListofRest = listofRest.filter((res) => res.info.avgRating > 4)
                        setListOfRest(filterListofRest)

                    }}
                    >Top Rated Restaurant</button>
                </div>
            </div>
            {                   console.log("listofRest==========================>73", listofRest)}
            <div className="flex flex-wrap">
                {
                   listofRest.map(restaruant => (
                   <Link
                   key={restaruant.info.id} 
                   to={"/restaurants/"+restaruant.info.id}
                   >
                    {
                        restaruant?.data?.promoted ? ( <RestaurantCardPromoted /> ) 
                        : ( <RestaurantCard resData={restaruant} /> 

                    )}

                    <RestaurantCard key={restaruant.info.id} resData={restaruant}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;