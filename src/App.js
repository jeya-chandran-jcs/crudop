import logo from './logo.svg';
import './App.css';
import Enter from './components/Enter';
import User from './components/User';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Create from './components/Create';
import {Table} from "../src/components/User"


function App() {
  return (
    <Router>
    <div className="App">
    <User>
      <Routes>
        <Route path="/" element={<Enter/>}/>
        <Route path="/user" element={<Table/>} />
        <Route path="/user/create" element={<Create />}/>
      </Routes>
      </User>
    </div>
    
    </Router>
  );
}

export default App;
