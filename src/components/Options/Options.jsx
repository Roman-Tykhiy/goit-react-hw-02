
import { useEffect, useState } from "react";

const Options = ({ updateFeedback, reset, total }) => {
    // const [isOpen, setIsOpen] = useState(false);
    // useEffect(() => {
    //     if (total === 0) {
    //         setIsOpen(false)
    //         return 
    //     };
    //     setIsOpen(true);

    // },[total])

    return (        
        <div >
            <button onClick={() => { updateFeedback(`good`) }}>Good</button>
            <button onClick={() => {updateFeedback(`neutral`)}}>Neutral</button>
            <button onClick={() => { updateFeedback(`bad`) }}>Bad</button>   
            {(total > 0) && <button onClick={reset}>Reset</button>} 
         </div>
            )   
   
}

export default Options;