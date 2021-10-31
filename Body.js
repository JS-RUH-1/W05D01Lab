import React, { useContext } from 'react';
import { langContext } from './Header';

function Body() {

   const data = useContext(langContext);
    return (
        <div>

           <h1>{data[0]}</h1>
           <img src={data[1]} width={700} height={500} alt=""/>

        </div>
    );
}

export default Body;