import { useEffect, useState } from "../node_modules/react";
import RestaurentCard from "./RestaurentCard";
import { Link } from "../node_modules/react-router-dom";
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
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
      // optional chaining so that it does not break if the value is not present 
   const restaurants = json?.data?.cards?.find((c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants;


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
            <Link
    key={restaurant?.info?.id}
    to={"/restaurants/" + restaurant?.info?.id}
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <RestaurentCard resData={restaurant?.info} />
  </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
