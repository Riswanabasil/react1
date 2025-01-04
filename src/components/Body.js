import RestaurantCard from "./RestaurentCard"

import resList from "../utils/mockData"

import { useState } from "react"



const Body=()=>{
    const [listRes,setListRes]= useState(resList)
    const [filterRest, setFilterRest]=useState(resList)
    const [text, setText ]=useState("")
    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={text} onChange={(e)=>{
                        setText(e.target.value)
                    }}/>
                    <button onClick={()=>{
                        
                        let filterName=listRes.filter((res)=>{
                           return res.data.name.includes(text)
                           
                        })
                        setFilterRest(filterName)

                       
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filterList=listRes.filter((res)=>res.data.avgRating>4)
                    setListRes(filterList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filterRest.map((restaurant)=>{
                   return <RestaurantCard key={restaurant.data.id} resData= {restaurant}/>
                })}
                
            </div>
        </div>
    )
}

export default Body