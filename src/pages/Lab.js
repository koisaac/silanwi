import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import { useParams } from "react-router-dom";


const __lap_name__ = {"chemistry":"화학실",
                    "biognosy":"생명과학실",
                    "physics":"물리실",
                    "earthscience" : "지구과학실"}
function Lab(){

    const {lab_name}= useParams();
    const img_path = "img/"+lab_name+".PNG";
    if(__lap_name__[lab_name]){
        return(<div className='App'>
        <h1>
            {__lap_name__[lab_name]}
        </h1>
        <img  className = "map" src={process.env.PUBLIC_URL +"/img/"+lab_name+".png"}/>
    </div>);
    }

}



export default Lab;