import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const Page404 = () => {
    document.title = '404 Page';
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 

    return ( 
    <>
    <div className="h-screen flex justify-center items-center">
        <h1 className="text-center text-4xl">
            The requested page was not found or is under development
            <br />
            <Link 
                to="/"
                className='text-center text-3xl text-[#46856E]'
            >
                Home
            </Link>
        </h1>
    </div>
    </> );
}
 
export default Page404;