import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../utill/Header";
import Lt from "./Lt";
import Footer from "../utill/Footer";
import Main from "./Main";

function Lab() {
    const { lap_name } = useParams();
    return (
        <div>
            <Header LabName={lap_name} />
            <Lt LabName={lap_name} />
            <Main LabName={lap_name} />
        </div>
    );
}
export default Lab;
