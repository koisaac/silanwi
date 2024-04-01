import './navigation.css'
import { Link } from 'react-router-dom';

function Navigation(){
    return(<div id="menu">
        
        <ul>
            <li>
                <Link to = "/">HOME</Link>
            </li>
            <li><a href = "#">LAB ▽</a>
                <ul>
                    <li><Link to = "/lab/chemistry">chemistrylab</Link></li>
                    <li><Link to = "/lab/biognosy">biognosylab</Link></li>
                    <li><Link to = "/lab/physics">physicslab</Link></li>
                    <il><Link to = "/lab/earthscience">earthsciencelab</Link></il>
                </ul>
            </li>
        </ul>
    </div>)
}
export default Navigation;