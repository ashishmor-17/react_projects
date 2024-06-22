import { useEffect, useState } from "react";
import Axios from 'axios';
import './App.css';


function IpApp(){
  // setting initial state variables
    const [ipDetails, setIp] = useState([]);

    // can chose location & timezone also
    // const [location, setLocation] = useState([]);
    // const [timezone, setTimezone] = useState([]);
    const [lat,setLat]= useState(22.5726);
    const [lng,setLng]= useState(88.3639);

    useEffect(() => {
        Axios.get('https://ipapi.co/json/').then((res) =>{
            setIp(res.data.ip);
            setLat(res.data.latitude);
            setLng(res.data.longitude);
        });
        }, []);

        return(
            <>
            <h1 className="heading">IP Address Finder</h1> 
            <div className="App"> 
                <div className="left"> 
                    <h4>What is my IPv4 address?</h4> 
                    <h1 id="ip">{ipDetails.ip}</h1> 
                    <h4>Approximate location: </h4> 
  
                    <p>{ipDetails.city}, {ipDetails.region}, 
                        {ipDetails.country_name}.</p> 
  
  
                    <h4>Internet Service Provider(ISP):</h4> 
  
                    <p>{ipDetails.org}</p> 
  
                </div> 
                {/* <Map lat={lat} lon={lon} />  */}
            </div> 
            </>
        );
}


export default IpApp;