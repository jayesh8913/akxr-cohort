import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  const [listofres, setlistofres] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6326695&lng=73.8220565&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

   const restaurants =json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;


    console.log(json.data.cards);

    setlistofres(restaurants || []);
  };
  

  return (
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
      </div>

      <div className="res-container">
        {listofres.map((restaurant) => (
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
