import logo from './logo.svg';
import './App.css';
import Permission from './components/Permission';
import PermissionList from './components/PermissionList';
import {users, events, permissions} from './data/mockData';
import banner from './data/banner.jpg';

function App() {
  const peddan = users[0];
  return (
    <div className="App">
      <img src={banner}/>
      <PermissionList list={events} user={peddan}/>
    </div>
  );
}

export default App;
