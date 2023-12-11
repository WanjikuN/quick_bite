import { NavLink } from "react-router-dom";

export default function Navbar({setType}){
    return(
        <div id="navbar">
            <div className="logo">
               <NavLink to="/" style={{textDecoration:'none',color:'white'}}> <h2>QUICK</h2>
                    <h2>BITE</h2> </NavLink>
            </div>
            <div className="nav-buttons">
                <NavLink to='/login' ><button onClick={()=>setType(true)}>Login</button></NavLink>
                <NavLink to='/login'><button onClick={()=>setType(false)}>Sign up</button></NavLink>
            </div>
        
        </div>
        
    )
}