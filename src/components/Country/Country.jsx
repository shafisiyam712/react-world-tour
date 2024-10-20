
import { useState } from 'react';
import './country.css'

const Country = ({country , handleVisitedCountry, handleVisitedFlags}) => {
    const{name,flags,population,area,cca3}=country

    const[visited,setVisited]=useState(false)

    const handleVisited=()=>{
        setVisited(!visited)
    }
    
    //console.log(handleVisitedCountry);//get the function
    
    return (
        <div className={`country ? ${visited && 'visited'}`}>
            <h3 style={{color:visited?'black':'white'}}>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p style={{color:visited?'black':'white'}}>Population:{population}</p>
            <p style={{color:visited?'black':'white'}}>Area: {area}</p>
            <small style={{color:visited?'black':'white'}}>Code: {cca3}</small>
            <button onClick={()=>handleVisitedCountry(country)}>Mark as visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' :'Ongoing'}</button>
           {/* {visited && 'I have visited'} */}
           {visited ? 'I have visited' :'I want to visit'}

           
        </div>
    );
};

export default Country;