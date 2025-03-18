import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import lab from "../lab/lab.module.css";
import { Link } from "react-router-dom";

const __lap_name__ = {
    chemistry: "화학실",
    biognosy: "생명과학실",
    physics: "물리실",
    earthscience: "지구과학실",
    borrow: "대여",
};

function Header(probs) {
    const lab_name = probs.LabName;
    useEffect(() => {
        document.body.className = lab.body;
    }, []);
    function call() {
        const call_back =
            "https://labour.jshs-project.duckdns.org/auth/callback";
        let f = document.createElement("form");

        let obj;
        obj = document.createElement("input");
        obj.setAttribute("type", "hidden");
        obj.setAttribute("name", "callback");
        obj.setAttribute("value", call_back);

        f.appendChild(obj);
        f.setAttribute("method", "post");
        f.setAttribute("action", "https://oauth.jshsus.kr/");
        document.body.appendChild(f);
        f.submit();
    }

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
                        <Link to="/rental">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/img/icons/borrow" +
                                    (lab_name == "borrow" ? "_line" : "") +
                                    ".svg"
                                }
                                alt={"예약하기"}
                            />
                        </Link>
                    </div>
                    <div></div>
                    <div
                        id={lab.loginbutton}
                        style={{ float: "right", display: "block" }}
                    >
                        <a href="https://labour.jshs-project.duckdns.org/auths">
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
