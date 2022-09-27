import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, population, area, region, flags} = props.country;
    // console.log(props.country);
    return (
        <div className="country">
            <h1>{name.common}</h1>
            <h4>Population: {population}</h4>
            <h4>Region: {region}</h4>
            <p>Area: {area}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;