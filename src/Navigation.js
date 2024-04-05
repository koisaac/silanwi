import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div id="menu">
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/reservation">예약</Link>
                </li>
                <li>
                    <a href="#">LAB ▽</a>
                    <ul>
                        <li>
                            <Link to="/lab/chemistry">chemistrylab</Link>
                        </li>
                        <li>
                            <Link to="/lab/biognosy">biognosylab</Link>
                        </li>
                        <li>
                            <Link to="/lab/physics">physicslab</Link>
                        </li>
                        <li>
                            <Link to="/lab/earthscience">earthsciencelab</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
export default Navigation;
