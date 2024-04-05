import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Header from "./Header";
import 화학실험실 from "./화학실험실.module.css";
import Lt from "./Lt";
import Footer from "./Footer";

function ChemistryLab() {
    return (
        <div>
            <Header LabName={"chemistry"} />
            <Lt LabName={"chemistry"} />
            <div className={화학실험실.map}>
                <div id={화학실험실.back}></div>
                <img src={process.env.PUBLIC_URL + "/img/화실_지도.svg"} />
                <button id={화학실험실.room1}></button>
                <button id={화학실험실.room2}></button>
                <button id={화학실험실.room3}></button>
                <button id={화학실험실.room4}></button>
            </div>
            <Footer />
        </div>
    );
}
export default ChemistryLab;
