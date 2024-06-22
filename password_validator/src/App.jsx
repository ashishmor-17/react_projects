import { useState } from "react";
import validator from 'validator';


const App = ()=>{
    const [errorMsg, setErrorMsg]= useState('')

    const validate= (value)=>{
        if(validator.isStrongPassword(value,{
            minLength:8,
            minLowercase:1,
            minUppercase:1,
            minNumbers:1,
            minSymbols:1,
        })){
            setErrorMsg("Strong password")
        }
        else{
            setErrorMsg('Weak password')
        }
    }

    return(
        <div style={
            {
                marginLeft:'200px'
            }
        }>
            <pre>
                <h2>Checking password stength</h2>
                <span>Enter password:</span>
                <input type="password" 
                onChange={(e)=>validate(e.target.value)}
                />
                <br/>
                <span style={{
                    fontWeight:"bold",
                    color:errorMsg.includes('Strong')?"green":"red"
                }}>{errorMsg}</span>
            </pre>   
        </div>
    );
}


export default App;