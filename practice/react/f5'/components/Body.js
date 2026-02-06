import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofres, setlistofres] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    fetchData();
  }, []);

  

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6326695&lng=73.8220565&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
      // optional chaining so that it does not break if the value is not present 
   const restaurants =json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;


    console.log(json.data.cards);

    setlistofres(restaurants || []);
    setFilteredRestaurant(restaurants || [])
  };

  // condiional rendering 
  // instead of putting this in if else operations , we can use terenary operator , so if listofres is 0 then shimmer ui will render
  return listofres.length===0?(<Shimmer/>):(
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filteredlist = listofres.filter(
              (res) => res?.info?.avgRating > 4
            );
            setlistofres(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search">
          <input className="inputname" type="text"  value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
              }}/>
          <button className="inpbtn" onClick={()=>{
            const filteredRestaurant=listofres.filter((res)=>{
              return res.info.name.toLowerCase().includes(searchText.toLowerCase());

            })
            setFilteredRestaurant(filteredRestaurant);

          }}>enter</button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurentCard
            key={restaurant?.info?.id}
            resData={restaurant?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
