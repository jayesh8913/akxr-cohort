import Shimmer from "./Shimmer";
import { useParams } from "../node_modules/react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


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

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} — {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((category) =>
          category.card.card.itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} — ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;