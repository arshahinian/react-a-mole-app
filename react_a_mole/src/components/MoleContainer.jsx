import React,{useState} from 'react';
import Mole from './Mole';

function MoleContainer(props) {
    let [isVisible,setIsVisible] = useState(false);
    let processMole = () => {
        props.setScore(props.score + 1);            
    }
    return(        
        <div>                      
            <p><Mole setIsVisible={setIsVisible} processMole={processMole} isVisible={isVisible}/></p>
        </div>
    )
}

export default MoleContainer;