import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Lab from "./lab.module.css";

let rules = [
    "발생 가능한 사고에 대하여 경각심을 갖고, 사고를 미연에 방지한다.",
    "반드시 실험복을 착용하고, 실험에 적절한 보호구를 착용한다.",
    "실험자 본인 의 안전 및 타인에 대한 안전을 고려한다.",
    "사고 위험에 대비하여 소화기, 비상샤워기 등의 위치를 알고 사용법 숙지한다.",
];

function Lt(probs) {
    const lap_name = {
        chemistry: "화학실험실",
        biognosy: "생명실험실",
        physics: "물리실험실",
    };
    const [fontSize, setfontSize] = useState("0px");
    const anchorRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            var offsetWidth = anchorRef.current?.offsetWidth;
            setfontSize(offsetWidth * 0.035 + "px");
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
                <article
                    style={{ fontSize: fontSize }}
                    ref={anchorRef}
                    className={Lab.rule}
                    id={Lab.ex_info}
                >
                    {(() => {
                        var min = 0;
                        var max = rules.length;

                        var num = Math.floor(Math.random() * (max - min) + min);
                        return (
                            <>
                                "깨알! 안전수칙"
                                <br />
                                <br />
                                {rules[num]}
                            </>
                        );
                    })()}
                </article>
            </div>
            <div className={Lab.arrow}>
                <Link to="/">
                    <img
                        src={process.env.PUBLIC_URL + "/img/icons/arrow.svg"}
                    />
                </Link>
            </div>
        </div>
    );
}
export default Lt;
