
import './Popup.css';
import datas from '../data.json'
import React from "react";
import  '..'


function Popup(props) {
   return (props.trigger == props.id) ? (
    <div className="popup">
    <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(0)}>Vissza</button>
        {props.children}
    </div>

</div>
   ):""
}
export default Popup