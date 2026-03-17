import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearItems } from "../utils/cartSlice";

const Cart= ()=>{
    const cart=useSelector((store)=>store.cart.items);
    const dispatch= useDispatch();
    const clearcart=()=>{
        dispatch(clearItems())
    }
return (
<div className="text-center m-4 p-4">
    <h1 className="text-2xl font-bold">Cart</h1>
    <div className="w-9/12 m-auto">
        <button className="bg-black rounded-lg text-white m-2 p-2" onClick={clearcart}>clear cart</button>
        <Itemlist items={cart}></Itemlist>
    </div>
        
</div>)
}

export default Cart;