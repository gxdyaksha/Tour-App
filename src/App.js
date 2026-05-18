import './App.css';
import Navbar from'./Project'
import React,{useState} from 'react'


function App(){
    const tour=[
        
        {id:1,name:"Kashmir Tour",price:40000,days:"3Days"},
        {id:2,name:"Goa Tour",price:20000,days:"4Days"},
        {id:3,name:"Char Dham",price:25000,days:"6Days"},
        
  ]
          const [id,setId]=useState(null);
          const [booking,setBooking]=useState(0);
          const [search,setSearch]=useState("");
          const [totalPrice, setTotalPrice] = useState(0);
    return(
        <div>
         <Navbar/>
        <div className="main">
           
            <h1>Travel Tour App</h1>
            <p>Explore Your Dream Destination</p>
            <h3>Total Booking:{booking}</h3>
            <h3>Total Price:{totalPrice}</h3>
            <input type="text" placeholder="Search Tours" value={search}
            onChange={(e)=>setSearch(e.target.value)}/>
            <div className="container">
            {tour.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase())).map((item)=>(
                <div key={item.id} className="card">
                    <h2>{item.name}</h2>
                    <h2>Price:{item.price}</h2>
                    <button onClick={()=>setId(id===item.id?null:item.id)}>
                        {id===item.id?"hide":"view details"}
                    </button>
            <button onClick={() => {setBooking(booking + 1);setTotalPrice(totalPrice + item.price);}}>
             Add to Booking</button>
                    {id===item.id&&(
                        <p>Duration:{item.days}</p>
                    )}
                    
                    </div>
            ))}
            </div>
        </div>
        </div>
    );
}
export default App