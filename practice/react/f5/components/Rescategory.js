import { useState } from "../node_modules/react";
import Itemlist from "./Itemlist";

const Rescategory = (data)=>{
   //  console.log(data)

   const[showItems,setshowItems]=useState(false)
   const handleclick=()=>{
        setshowItems(!showItems)
   }
    return (
    <div>
        {/*header*/ }
        <div className=" w-6/12 bg-gray-100 mx-auto my-4 p-4 rounded-lg text-left cursor-pointer" >
            <div className="flex justify-between "onClick={handleclick}>
                <span className="font-bold text-lg">{data.data.title} ({data.data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            <div>{showItems &&<Itemlist items={data.data.itemCards}></Itemlist>}</div>    
            
        </div>
        {/*body*/ }
        
    </div>)
}

export default Rescategory;