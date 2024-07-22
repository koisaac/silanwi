import device_info_style from "./device_info.module.css";
import Header from "../lab/Header";
import Footer from "../lab/Footer";

import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
async function api_call_Device(id) {
    var response = await fetch(
        "https://labour.jshs-project.duckdns.org/device_info/" + id
    );
    var data = await response.json();
    return data;
}

function Device_info() {
    useEffect(() => {
        document.body.className = device_info_style.body;
    }, []);
    const { id } = useParams();
    const [device_info, setDeviceInfo] = useState({});
    const init_set = async (device_id) => {
        var data = await api_call_Device(device_id);
        setDeviceInfo(data[0]);
    };

    useEffect(() => {
        init_set(id);
    }, [id]);

    const [fontSize, setfontSize] = useState({
        tit: "0px",
        rent: "opx",
        left: "0px",
        para_1: "0px",
        para_2: "0px",
    });
    const titRef = useRef(null);
    const rentRef = useRef(null);
    const leftRef = useRef(null);
    const para_1Ref = useRef(null);
    const para_2Ref = useRef(null);

    const [img_size, setImgSize] = useState({
        width: "0px",
        height: "0px",
    });
    const imgBox = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            const tit_size = titRef?.current.offsetWidth || 0;
            const rent_size = rentRef?.current.offsetWidth || 0;
            const left_size = leftRef?.current.offsetWidth || 0;
            const para_1_size = para_1Ref?.current.offsetWidth || 0;
            const para_2_size = para_2Ref?.current.offsetWidth || 0;

            setfontSize({
                tit: tit_size * 0.06,
                rent: rent_size * 0.15,
                left: left_size * 0.15,
                para_1: para_1_size * 0.023,
                para_2: para_2_size * 0.023,
            });
            setImgSize({
                width: (imgBox?.current.offsetWidth || 0) * 0.7 + "px",
                height: (imgBox?.current.offsetWidth || 0) * 1.33 + "px",
            });
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <Header />
            <main>
                <div className={device_info_style.lt}>
                    <div className={device_info_style.upper}>
                        <p
                            ref={titRef}
                            style={{ fontSize: fontSize.tit }}
                            className={device_info_style.labmap}
                        >
                            {device_info.device_name}
                        </p>
                        <div className={device_info_style.arrow}>
                            <a href="./메인.html">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/img/icons/arrow.svg"
                                    }
                                />
                            </a>
                        </div>
                    </div>

                    <div className={device_info_style.down}>
                        <a href="대여사이트.html?name=UV-vis_분광광도계">
                            <div
                                ref={rentRef}
                                style={{ fontSize: fontSize.rent }}
                                className={device_info_style.rent}
                            >
                                대여
                            </div>
                        </a>
                        <div
                            ref={leftRef}
                            style={{ fontSize: fontSize.left }}
                            className={device_info_style.left}
                        >
                            {device_info.ReservedCount}/{device_info.number}{" "}
                            남음
                        </div>
                        <div></div>
                    </div>
                </div>

                <div className={device_info_style.box}>
                    <div className={device_info_style.box_detail}>
                        <div className={device_info_style.list_outbox}>
                            <div className={device_info_style.list_box}>
                                <h3>목차</h3>
                                <ol>
                                    <li>개요</li>
                                    <li>사용방법</li>
                                    <li>여담</li>
                                </ol>
                            </div>
                        </div>
                        <div ref={imgBox} id={device_info_style.equipt_img}>
                            <img
                                style={{
                                    width: img_size.width,
                                    height: img_size.height,
                                }}
                                src={
                                    "https://labour.jshs-project.duckdns.org/public/광학현미경.png"
                                }
                                alt="생명과학 실험실 UV-VIS 분광광도계"
                            />
                        </div>
                        <div className={device_info_style.main_text}>
                            <h1>1. 개요</h1>
                            <p
                                ref={para_1Ref}
                                style={{ fontSize: fontSize.para_1 }}
                            >
                                {device_info.explanation}
                            </p>
                            <h1>2. 사용방법</h1>
                            <iframe
                                className={device_info_style.waytouse}
                                src="./기구사용방법/FTIR/FTIR.html"
                            ></iframe>
                            <h1>3. 여담</h1>
                            <p
                                ref={para_2Ref}
                                style={{ fontSize: fontSize.para_2 }}
                            >
                                {device_info.digression}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default Device_info;
