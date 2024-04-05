import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import lab from "./lab.module.css";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const __lap_name__ = {
    chemistry: "화학실",
    biognosy: "생명과학실",
    physics: "물리실",
    earthscience: "지구과학실",
};

function Header(probs) {
    const lab_name = probs.LabName;
    useEffect(() => {
        document.body.className = lab.body;
    }, []);

    return (
        <div>
            <header>
                <div id={lab.logo}>
                    <div id={lab.blogo}>
                        <Link to="/">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/img/lab_black.svg"
                                }
                                alt="LAB_OUR"
                            />
                        </Link>
                    </div>
                    <div></div>
                    <div>
                        <Link to="/lab/physics">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/img/icons/physics" +
                                    (lab_name == "physics" ? "_line" : "") +
                                    ".svg"
                                }
                                alt={"물리학 실험실"}
                            />
                        </Link>
                    </div>
                    <div>
                        <Link to="/lab/chemistry">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/img/icons/chemical" +
                                    (lab_name == "chemistry" ? "_line" : "") +
                                    ".svg"
                                }
                                alt={"화학 실험실"}
                            />
                        </Link>
                    </div>
                    <div>
                        <Link to="/lab/biognosy">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/img/icons/biology" +
                                    (lab_name == "biognosy" ? "_line" : "") +
                                    ".svg"
                                }
                                alt={"생명과학 실험실"}
                            />
                        </Link>
                    </div>
                    <div>
                        <a href="./대여관리.html">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/img/icons/borrow.svg"
                                }
                                alt={"예약하기"}
                            />
                        </a>
                    </div>
                    <div></div>
                    <div
                        id={lab.loginbutton}
                        style={{ float: "right", display: "block" }}
                    >
                        <a href="http://iam.jshsus.kr/?service=jshsus">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/img/icons/login2.svg"
                                }
                                alt={"Login"}
                                style={{ display: "block" }}
                                width="100%"
                            />
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default Header;
