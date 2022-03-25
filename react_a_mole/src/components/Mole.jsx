import {useEffect} from 'react';

function Mole(props) {
    useEffect(() =>
    {
        let seconds = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.setIsVisible(!props.isVisible)
        },seconds)
        return () => clearTimeout(timer)
    })
    
    return(
        <div>
            {props.isVisible ? <p onClick={props.processMole}>[(OvO)]</p> : <p>[__(.)__]</p>}           
        </div>
    )
}

export default Mole;