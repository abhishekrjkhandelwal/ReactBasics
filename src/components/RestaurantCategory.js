import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data, setShowIndex }) => {
    
    const [showItems, setShowItems] = useState(false)

    const handleClick = () => {
        setShowItems(!showItems)
    }

    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                {<span>{data.title} ({data.itemCards.length})</span>}
            </div>
            {showItems && <ItemList items={data.itemCards} />}
        </div>
    )
}

export default RestaurantCategory;