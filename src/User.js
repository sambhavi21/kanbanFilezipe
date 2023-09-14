import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  fetchSuccessTickets, fetchSuccessUser } from './Redux/kanbanAction';
import { NavLink } from 'react-router-dom';
import DashBoard from './DashBoard';
import TicketCart from './TicketCart';
 

function User(props) {

const Tickets=useSelector((state=>state.Tickets))
const copy_tick=Tickets.users
var users=[{"id": "usr-1",
"name": "Anoop sharma"},
 {"id": "usr-2",
 "name": "Yogesh"}, 
 { "id": "usr-3",
 "name": "Shankar Kumar"}, 
 {"id": "usr-4",
 "name": "Ramesh"},
  { "id": "usr-5",
  "name": "Suresh"}]
var loading_tickets=useSelector((state=>state.loading_tickets))
var Tickets_error=useSelector((state=>state.Tickets_error))
var dispatch=useDispatch();
useEffect(()=>{
    dispatch(fetchSuccessTickets())
    

},[])
// useEffect(()=>{
  
// },[])
if (loading_tickets){
    <h1>loading......</h1>
}
else if(Tickets_error){
<h1>Some error has been occured {Tickets_error}</h1>
}else{
  return (
     <>
      <div className="dropdown">
  <button
    className="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
     Display
  </button>
  <ul className="dropdown-menu">
    <li>
      <NavLink className="dropdown-item" to="/">
        Status
      </NavLink>
    </li>
    <li>
    <NavLink className="dropdown-item" to="/Priority" >
         Priority
      </NavLink>
      </li>
      <li>
      <NavLink className="dropdown-item" to="/User" >
         User
      </NavLink>
    </li>
    
  </ul>
</div>
<div className="row">
<div className="column" style={{ backgroundColor: "#aaa" }}>
<div className="column" style={{ backgroundColor: "#ccc" }}>
<div className="column" style={{ backgroundColor: "#add8e6" }}>
   
     
      
    {users.map((e)=>(<TicketCart key={e} users={e} tickets={Tickets}/>))}
     
   
  </div>
   
  
  
   
        
  </div>
     
  </div>
  </div>
     </>
  )
}
}
export default User
