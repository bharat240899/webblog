import React from 'react';
import Data from '../contentlibrary/content';
const Cards = ({ cardData}) => {
    const dynamicSources = Data.Blog.sources;
    // const iterationsArray = Array.from({ length: n }, (_, index) => index);

    return (
        <>
            <h2 className='text-center'>Dev Blogs</h2>
             <div className='row' >
            {Data.Blog.title.map((item, index) => (
               <div className='col-lg-4 mb-5' key={index}> 
                    <div className="card" >
               <img className="card-img-top bg-dark" src={dynamicSources} alt='TEXT-IMG'/>
                <div className="card-body">
                    <p className="card-text">{item}</p>
                </div>
             </div>
                </div>
               
                  
            ))}
              </div>
        </>
    );
};

export default Cards;
