import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/app/App";
import Lab from "./pages/lab/Header";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Reservation from "./pages/reservation/Reservation";
import { QueryClient, QueryClientProvider } from "react-query";
import PhysicsLab from "./pages/lab/PhysicsLab";
import ChemistryLab from "./pages/lab/ChemistryLab";
import BiognosyLab from "./pages/lab/BiognosyLab";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/lab/physics" element={<PhysicsLab />}></Route>
                    <Route
                        path="/lab/chemistry"
                        element={<ChemistryLab />}
                    ></Route>
                    <Route
                        path="/lab/biognosy"
                        element={<BiognosyLab />}
                    ></Route>
                    <Route path="*" element={<App />}></Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
