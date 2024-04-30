import React from 'react';
import LandingPage from './pages/landingPage';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Articles from './pages/Resources';
const Paths=()=>{
    return(       
        <>
           <Router>
                <Routes>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route path='/landingpage' element={<LandingPage/>}/>
                    <Route path='/articles' element={<Articles/>}/>
                </Routes>
        
            </Router>
        </>
         
    )
}
export default Paths;