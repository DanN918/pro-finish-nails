import React, {useState} from 'react';
import axios from 'axios';

/**
 * Return calls from covid19 API to showcase
 * number of deaths and cases real time in 
 * Maryland and the United States
 * Worldwide stats also shown
 * 
 */

 const url = 'https://api.covid19api.com/summary';
const Covidtrack = (props) => {
    const[count, setCount] = useState(0); 
    useEffect(async () => {
        const response = await fetch (url);
        const data = await response.json();
        const [item] = data.results;
    })
    
    return (
        <div>
            <h1>Tracking COVID-19</h1>
            </div>
    );
}

export default Covidtrack;