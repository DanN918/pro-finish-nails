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
    const [isLoading, setIsLoading] = useState(true);
    componentDidMount () {  
        axios.get(url);
    }
    
    return (
        <div>
            <h1>Tracking COVID-19</h1>
            </div>
    );
}

export default Covidtrack;