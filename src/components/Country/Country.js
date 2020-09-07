import React from 'react';

const Country = (props) => {
//    console.log(props)
   const {name,flag,population,region} = props.country;
    const flagStyle = {width:'100px'}
    const divStyle = {border:'1px solid salmon',margin:'15px', padding:'10px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style = {divStyle}>
            <h3>Country: {name}</h3>
            <img style={flagStyle}src={flag} alt=""/>
            <p>Population: {population}</p>
            <p>Region:{region}</p>
            <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};
export default Country;
