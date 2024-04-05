import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Header from "./Header";
import physicslab from "./physicslab.module.css";
import Lt from "./Lt";
import Footer from "./Footer";
import Main from "./Main";
function PhysicsLab() {
    return (
        <div>
            <Header LabName={"physics"} />
            <Lt LabName={"physics"} />
            <Main LabName={"physics"} />

            <Footer />
        </div>
    );
}
export default PhysicsLab;
