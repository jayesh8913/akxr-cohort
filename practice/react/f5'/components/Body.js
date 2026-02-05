import { useState } from "../node_modules/react";
import resList from "../utils/mockdata";
import RestaurantCard from "./RestaurentCard";

const Body = () => {
    const[listofres,setlistofres]= useState(resList)
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-button" onClick={()=>{
            const filteredlist = listofres.filter(
                (res)=> res.data.avgRating>4
            );
            setlistofres(filteredlist)
        }}>filtered res</button>
      </div>
      <div className="res-container">
        {listofres.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;