import logo from './logo.svg';
import './App.css';
import Permission from './components/Permission';
import PermissionList from './components/PermissionList';
import {users, events, permissions} from './data/mockData';
import banner from './data/banner.jpg';

function App() {
  const peddan = users[0];
  const filteredPermissions = permissions.filter(item => item.user === peddan.id);
  const filteredEvents = events.filter(event => filteredPermissions.filter(permission => permission.event === event.id).length > 0);
  return (
    <div className="App">
      <img src={banner}/>
      <PermissionList list={filteredEvents} user={peddan}/>
    </div>
  );
}

export default App;
