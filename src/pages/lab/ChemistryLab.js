import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Header from "./Header";
import 화학실험실 from "./화학실험실.module.css";
import Lt from "./Lt";
import Footer from "./Footer";
import Main from "./Main";

function ChemistryLab() {
    return (
        <div>
            <Header LabName={"chemistry"} />
            <Lt LabName={"chemistry"} />

            <Main LabName={"chemistry"} />
            <Footer />
        </div>
    );
}
export default ChemistryLab;
