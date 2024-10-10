import React, { useEffect, useState, useRef } from "react";
import 생명실험실 from "./생명실험실.module.css";
import 화학실험실 from "./화학실험실.module.css";
import physicslab from "./physicslab.module.css";
import lab from "./lab.module.css";
import { Link } from "react-router-dom";

const api_call_Device = async (labname) => {
    var data = await fetch(
        "https://labour.jshs-project.duckdns.org/test/" + labname
    );
    var data_json = await data.json();
    return data_json;
};

function Box(probs) {
    const [fontSize, setfontSize] = useState({
        tit1: "0px",
        tit2: "0px",
        rental: "0px",
    });
    const [box_size, setBoxSize] = useState(0);
    const tit1Ref = useRef(null);
    const tit2Ref = useRef(null);
    const rentalRef = useRef(null);
    const equipRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            const tit1_size = tit1Ref?.current.offsetWidth || 0;
            const tit2_size = tit2Ref?.current.offsetWidth || 0;
            const renatal_size = rentalRef?.current.offsetWidth || 0;
            setfontSize({
                tit1: tit1_size * 0.108,
                tit2: tit2_size * 0.15,
                rental: renatal_size * 0.25,
            });
            setBoxSize((equipRef?.current.offsetWidth || 0) * 1.18);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <li
            ref={equipRef}
            key={probs.device.id}
            className={lab.equip}
            style={{
                height: box_size,
                display:
                    probs.location == "room0" ||
                    probs.location == probs.device.location_2
                        ? "inline-block"
                        : "none",
            }}
        >
            <div className={lab.default}>
                <img src={process.env.PUBLIC_URL + "/img/300x200.jpg"} />
                <div
                    className={lab.tit1}
                    ref={tit1Ref}
                    style={{ fontSize: fontSize.tit1 }}
                >
                    <strong>{probs.device.device_name}</strong>
                </div>
            </div>
            <div className={lab.hovered}>
                <div
                    className={lab.tit2}
                    ref={tit2Ref}
                    style={{ fontSize: fontSize.tit2 }}
                >
                    <strong>{probs.device.device_name}</strong>
                </div>
                <Link to={"/device_info/" + probs.device.id}>
                    <button
                        className={lab.rental}
                        ref={rentalRef}
                        style={{ fontSize: fontSize.rental }}
                    >
                        정 보
                    </button>
                </Link>
            </div>
        </li>
    );
}

function Main(probs) {
    const lap_name = {
        chemistry: "화실",
        physics: "물리",
        biognosy: "생실",
    };
    const [device_list, setDeviceList] = useState([]);
    const [location, setLocation] = useState("room0");
    const [Loding, setLoding] = useState(true);
    const init_set = async (labname) => {
        setLoding(true);
        var data = await api_call_Device(labname);
        setLoding(false);
        setDeviceList(data);
    };

    useEffect(() => {
        setLocation("room0");
        init_set(probs.LabName);
    }, [probs.LabName]);

    console.log(device_list);
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
                    onClick={() => setLocation("room0")}
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
                    style={{
                        backgroundColor: location == "room1" ? "red" : "",
                        opacity: 0.3,
                    }}
                    onClick={() => setLocation("room1")}
                    id={
                        probs.LabName == "physics"
                            ? physicslab.room1
                            : probs.LabName == "chemistry"
                            ? 화학실험실.room1
                            : 생명실험실.room1
                    }
                ></button>
                <button
                    style={{
                        backgroundColor: location == "room2" ? "red" : "",
                        opacity: 0.3,
                    }}
                    onClick={() => setLocation("room2")}
                    id={
                        probs.LabName == "physics"
                            ? physicslab.room2
                            : probs.LabName == "chemistry"
                            ? 화학실험실.room2
                            : 생명실험실.room2
                    }
                ></button>
                <button
                    style={{
                        backgroundColor: location == "room3" ? "red" : "",
                        opacity: 0.3,
                    }}
                    onClick={() => setLocation("room3")}
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
                        style={{
                            backgroundColor: location == "room4" ? "red" : "",
                            opacity: 0.3,
                        }}
                        onClick={() => setLocation("room4")}
                        id={
                            probs.LabName == "chemistry"
                                ? 화학실험실.room4
                                : 생명실험실.room4
                        }
                    ></button>
                )}
            </div>
            <div className={lab.box}>
                {Loding ? (
                    <>Loding</>
                ) : (
                    <ul>
                        {device_list.map((device) => {
                            return (
                                <Box
                                    key={device.id}
                                    device={device}
                                    location={location}
                                />
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
}
export default Main;
