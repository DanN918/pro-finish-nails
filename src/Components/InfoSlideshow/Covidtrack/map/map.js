import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
// import { Icon } from "leaflet";
//import axios from "axios";
import * as covidData from "./response_1591392863023.json";
import "./map.css";

/**
 *  TODO: 
 *  Right now, map marker data is taken from .json file that is up to date as of 6/5
 *  Need to find way to updae from api directly
 * 
 *  Change color of marking depending on condition of number of cases/deaths
 *  Change size depending on number of cases (like a heat map) 
 */


//const url = "https://corona.lmao.ninja/v2/countries";

const IntegratedMap = (props) => {
  // const [latest, setLatest] = useState([]);
  // const [results, setResults] = useState([]);

  // useEffect(() => {
  //   axios
  //     .all([axios.get({ url })])
  //     .then((responseArr) => {
  //       setLatest(responseArr[0].data);
  //       setResults(responseArr[1].data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // const countriesLocation = results.map((data, i) => {
  //   return (
  //     <Marker
  //       key={data.country}
  //       position={[data.countryInfo.lat, data.countryInfo.long]}
  //     >
  //       {data.cases}
  //     </Marker>
  //   );
  // });

  const [countryPeek, setCountryPeek] = useState(null);
  return (
    <Map center={[40, -90]} zoom={3}>
      {covidData.features.map((country) => (
        <Marker
          key={country.country}
          position={[country.countryInfo.lat, country.countryInfo.long]}
          onClick={() => {
            setCountryPeek(country);
          }}
        >
          {country.cases}
        </Marker>
      ))}

      {countryPeek && (
        <Popup
          position={[countryPeek.countryInfo.lat, countryPeek.countryInfo.long]}
          onClose={() => {
            setCountryPeek(null);
          }}
        >
          <div>
            <p>
              <u>Country Name:</u> {countryPeek.country} <br/>
              Cases: {countryPeek.cases} <br/>
              Deaths: {countryPeek.deaths} <br/>
              Recovered: {countryPeek.recovered} <br/>
              Tests: {countryPeek.tests}
            
            </p>
          </div>
        </Popup>
      )}

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
};

export default IntegratedMap;
