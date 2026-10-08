import { useState } from "react";
export default function Bool()
{
    const [state, stateChanger] = useState(false);

    return(
        <div>
            <p>Status: {state.toString()}</p>
            <button onClick={() => stateChanger(true)}>true</button>        
            <button onClick={() => stateChanger(false)}>false</button>        
            
        </div>

    );

}