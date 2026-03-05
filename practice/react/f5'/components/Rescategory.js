import Itemlist from "./Itemlist";

const Rescategory = (data)=>{
   //  console.log(data)
    return (
    <div>
        {/*header*/ }
        <div className=" w-6/12 bg-gray-100 mx-auto my-4 p-4 rounded-lg text-left" >
            <div className="flex justify-between">
                <span className="font-bold text-lg">{data.data.title} ({data.data.itemCards.length})</span>
                <span>🔽</span>
            </div>    
            <Itemlist items={data.data.itemCards}></Itemlist>
        </div>
        {/*body*/ }
        
    </div>)
}

export default Rescategory;