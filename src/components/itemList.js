import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //Dispatch an action
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) => 
            (
                <div 
                    key={item.card.info.id} 
                    className="p-2 m-2 border border-black bottom-0 text-left justify-between">
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 mx-12 bg-white shadow-lg"
                            onClick={() => handleAddItem(item)}
                            >Add +</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className="w-full" />
                    </div>
                    <div>
                        <span> {item.card.info.name} </span>
                        <span> - ₹ {item.card.info.price}</span>
                    </div>
                    <p>{item.card.info.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ItemList;