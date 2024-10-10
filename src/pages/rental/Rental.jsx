import { useEffect } from "react";
import { Link } from "react-router-dom";
import Lt from "../lab/Lt";
import Header from "../utill/Header";
import rental from "./rental.module.css";
function Rental() {
    return (
        <div>
            <Header LabName={"borrow"} />
            <Lt LabName={"borrow"} />
            <main>
                <div className={rental.box}>
                    <table className={rental.maintable}>
                        <thead>
                            <tr>
                                <th id={rental.name}>
                                    실험기구/시약 명 (개수)
                                </th>
                                <th id={rental.date}>대출 날짜</th>
                                <th id={rental.dead}>반납기한</th>
                                <th id={rental.repre}>대표학생</th>
                                <th id={rental.tcher}>담당교사</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default Rental;
