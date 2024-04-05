import { useEffect } from "react";
import app from "./app.module.css";

import { Link } from "react-router-dom";

function App() {
    useEffect(() => {
        document.body.className = app.body;
    }, []);
    return (
        <div>
            <nav className={app.navbar}>
                <div id={app.loginbutton}>
                    <a href={"http://iam.jshsus.kr/?service=jshsus"}>
                        <img
                            src={
                                process.env.PUBLIC_URL + "/img/icons/login2.svg"
                            }
                        />
                    </a>
                </div>
            </nav>

            <header>
                <div id={app.logo}>
                    <a href="./메인.html">
                        <img
                            src={process.env.PUBLIC_URL + "/img/lab_black.svg"}
                            alt={"Logo"}
                            width={"35%"}
                        />
                    </a>
                </div>
            </header>
            <main>
                <div className={app.lab}>
                    <div></div>
                    <div className={app.button}>
                        <Link to="/lab/physics">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/img/icons/physics_text.svg"
                                }
                            />
                        </Link>
                    </div>
                    <div className={app.button}>
                        <Link to="/lab/chemistry">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/img/icons/chemical_text.svg"
                                }
                            />
                        </Link>
                    </div>
                    <div className={app.button}>
                        <Link to="/lab/biognosy">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/img/icons/biology_text.svg"
                                }
                            />
                        </Link>
                    </div>
                    <div className={app.button}>
                        <a href="./대여관리.html">
                            <img src="../imgs/icons/borrow_text.svg" />
                        </a>
                    </div>
                </div>
            </main>
            <footer>
                <div id={app.info_window}>
                    <a href="웹사이트소개.html">
                        <i className={app.FiFiSrBulb}></i>
                    </a>
                    <span>
                        Copyright 2023. 전곽 실험실안전관리위원회 All rights
                        reserved.
                    </span>
                    <span>
                        <u>dobby is free</u>
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default App;
