import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/dummyData";
import { useState } from "react";

const Body = () => {
    //State Variable - Super powerful variable

    const [listofRest, setListOfRest] = useState(resObj);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter_btn" 
                onClick={() => {
                    //Filter out list of restro
                    console.log("listofRest========>11", listofRest)
                    const filterListofRest = listofRest.filter((res) => res.info.avgRating > 4)
                    console.log("filterListofRest========>13", filterListofRest)
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