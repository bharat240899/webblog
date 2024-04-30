import React from 'react';
import {Link} from 'react-router-dom'
const NavMenu=()=>{
    return(
       <nav className='bg-dark'>
                <ul className=''>
                    <li className='nav-item'>
                        <Link to='/landingpage'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/articles'>Articles</Link>
                    </li>
                    
                   
                </ul>
       </nav>
    )
} 
export default NavMenu;