import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Header from "./Header";
import physicslab from "./physicslab.module.css";
import Lt from "./Lt";
import Footer from "./Footer";
function PhysicsLab() {
    return (
        <div>
            <Header LabName={"physics"} />
            <Lt LabName={"physics"} />
            <div className={physicslab.map}>
                <div id={physicslab.back}></div>
                <img src={process.env.PUBLIC_URL + "/img/물리_지도.svg"} />
                <button id={physicslab.room1}></button>
                <button id={physicslab.room2}></button>
                <button id={physicslab.room3}></button>
            </div>

            <Footer />
        </div>
    );
}
export default PhysicsLab;
