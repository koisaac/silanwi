import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <div>
          <h2>
            실험실
          </h2>
          <div>
            <div>
              <Link to = "/lab/chemistry">화학실</Link>
            </div>
            <div>
              <Link to = "/lab/biognosy">생명과학실</Link>
            </div>
            <div>
              <Link to = "/lab/physics">물리실</Link>
            </div>
            <div>
              <Link to = "/lab/earthscience">지구과학실</Link>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
