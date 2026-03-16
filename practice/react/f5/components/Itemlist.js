const Itemlist=({items})=>{
    console.log(items)
    return (<div>
    {
        items.map((item)=>(
            <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2 flex justify-between">
                <div className="w-9/12">
                 <div className="py-2">
                    <span className="">{item.card.info.name}</span>
                    <span> - ₹{item.card.info.price/100}</span>
                 </div>
                 <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12">
                    <div>
                        <button className=" p-2 mx-32 my-19 absolute rounded-lg bg-black text-white right-auto">Add</button>
                    </div>
                 <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item.card.info.imageId } className="w-full rounded-lg"></img>   
                </div> 
            </div>
        ))    
        
        
    }
    </div>)
}
export default Itemlist;