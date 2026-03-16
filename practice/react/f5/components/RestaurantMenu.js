import Shimmer from "./Shimmer";
import { useParams } from "../node_modules/react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Rescategory from "./Rescategory"


const RestaurantMenu = () => {
  const { resId } = useParams();                  
 const resInfo = useRestaurantMenu(resId);
 

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const menuItems =
    resInfo?.cards
      ?.find((c) => c.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) ?? [];
     
      //console.log(menuItems)
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")} — {costForTwoMessage}</p>
      {menuItems.map((category)=>(
          <Rescategory key={category.card.card.categoryId} data={category.card.card}/>
        ))}
    
      
    </div>
  );
};

export default RestaurantMenu;