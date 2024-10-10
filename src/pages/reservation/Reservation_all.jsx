import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./reservation.css";

const api_call_Device = async () => {
    var data = await fetch("http://jshs-project.duckdns.org/test");
    var data_json = await data.json();
    return data_json;
};

function Reservation_all() {
    const [DeviceList, setDeviceList] = useState([]);
    const [is_push_button, setIsPushButton] = useState(0);
    const init_set = async () => {
        var data = await api_call_Device();
        setDeviceList(data);
    };
    useEffect(() => {
        init_set();
    }, [is_push_button]);

    const api_call_reservate = (id) => {
        fetch("http://jshs-project.duckdns.org/reservate/" + id);
        setIsPushButton(is_push_button + 1);
    };
    const api_call_can_reservate = async (id) => {
        await fetch("http://jshs-project.duckdns.org/can_reservate/" + id);
        setIsPushButton(is_push_button + 1);
    };

    return (
        <div>
            {(() => {
                return DeviceList.map((Device) => {
                    console.log(Device.is_reserve);
                    return (
                        <li key={Device.id}>
                            <ul>
                                <li>{Device.device_name}</li>
                                <li>
                                    {Device.is_reserve === 1 ? (
                                        <button
                                            onClick={() => {
                                                api_call_can_reservate(
                                                    Device.id
                                                );
                                            }}
                                        >
                                            예약 취소
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                api_call_reservate(Device.id);
                                            }}
                                        >
                                            예약
                                        </button>
                                    )}
                                </li>
                            </ul>
                        </li>
                    );
                });
            })()}
        </div>
    );
}

export default Reservation_all;
