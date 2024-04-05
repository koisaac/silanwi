import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Header from "./Header";
import 생명실험실 from "./생명실험실.module.css";
import 화학실험실 from "./화학실험실.module.css";
import physicslab from "./physicslab.module.css";

function Main(probs) {
    const lap_name = {
        chemistry: "화실",
        physics: "물리",
        biognosy: "생실",
    };
    console.log(probs.LabName);
    return (
        <div>
            <div
                className={
                    probs.LabName == "physics"
                        ? physicslab.map
                        : probs.LabName == "chemistry"
                        ? 화학실험실.map
                        : 생명실험실.map
                }
            >
                <div
                    id={
                        probs.LabName == "physics"
                            ? physicslab.back
                            : probs.LabName == "chemistry"
                            ? 화학실험실.back
                            : 생명실험실.back
                    }
                ></div>
                <img
                    src={
                        process.env.PUBLIC_URL +
                        "/img/" +
                        lap_name[probs.LabName] +
                        "_지도.svg"
                    }
                />
                <button
                    id={
                        probs.LabName == "physics"
                            ? physicslab.room1
                            : probs.LabName == "chemistry"
                            ? 화학실험실.room1
                            : 생명실험실.room1
                    }
                ></button>
                <button
                    id={
                        probs.LabName == "physics"
                            ? physicslab.room2
                            : probs.LabName == "chemistry"
                            ? 화학실험실.room2
                            : 생명실험실.room2
                    }
                ></button>
                <button
                    id={
                        probs.LabName == "physics"
                            ? physicslab.room3
                            : probs.LabName == "chemistry"
                            ? 화학실험실.room3
                            : 생명실험실.room3
                    }
                ></button>
                {probs.LabName == "physics" ? (
                    <></>
                ) : (
                    <button
                        id={
                            probs.LabName == "chemistry"
                                ? 화학실험실.room4
                                : 생명실험실.room4
                        }
                    ></button>
                )}
            </div>
        </div>
    );
}
export default Main;
