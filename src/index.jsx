import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/app/App";
import Lab from "./pages/lab/Lab";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Reservation_all from "./pages/reservation/Reservation_all";
import Device_info from "./pages/device_info/Device_info";
import Rental from "./pages/rental/Rental";
import Rental_page from "./pages/Rental_page/Rental_page";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/rental" element={<Rental />}></Route>
                <Route path="/lab/:lap_name" element={<Lab />}></Route>
                <Route path="/rental_page" element={<Rental_page />}></Route>
                <Route
                    path="/device_info/:id"
                    element={<Device_info />}
                ></Route>
                <Route path="*" element={<App />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
