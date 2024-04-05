import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Header from "./Header";
import Lab from "./lab.module.css";
function Lt(probs) {
    const lap_name = {
        chemistry: "화학실험실",
        biognosy: "생명실험실",
        physics: "물리실험실",
    };
    return (
        <div className={Lab.lt}>
            <p className={Lab.labmap}>
                <img
                    src={
                        process.env.PUBLIC_URL +
                        "/img/" +
                        lap_name[probs.LabName] +
                        ".svg"
                    }
                />
            </p>
            <div>
                <article className={Lab.rule} id={Lab.ex_info}></article>
            </div>
            <div className={Lab.arrow}>
                <a href="/">
                    <img
                        src={process.env.PUBLIC_URL + "/imgs/icons/arrow.svg"}
                    />
                </a>
            </div>
        </div>
    );
}
export default Lt;
