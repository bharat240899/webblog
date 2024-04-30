import React from 'react';
import NavMenu from '../templates/navBar';
import Cards from './BlogCards';
const LandingPage=()=>{
    return(
        <>
             <NavMenu/>
             <h1 className='text-center'>Dev Community</h1>
             <Cards/>
        </>
       
    )
}
export default LandingPage;