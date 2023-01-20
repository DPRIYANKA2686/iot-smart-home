import './App.css';
import RoomBtn from './RoomBtn';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Smart Home Automation</h1>
      <div className='myButtons'>
        <RoomBtn room="Bedroom" apiOn="bedroomon" apiOff="bedroomoff"/>
        <RoomBtn room="Living Room" apiOn="livingroomon" apiOff="livingroomoff"/>
        <RoomBtn room="Lounge" apiOn="loungeroomon" apiOff="loungeroomoff"/>
        <RoomBtn room="Garage" apiOn="garageon" apiOff="garageoff"/>
        <RoomBtn room="Kitchen" apiOn="kitchenroomon" apiOff="kitchenroomoff"/>
        <RoomBtn room="Fan" apiOn="fanon" apiOff="fanoff"/>
        <RoomBtn room="Door Bell" apiOn="bellon" apiOff="belloff"/>
      </div>
      <h3 className='footer'>Priyanka Anusha Amisha Bipul</h3>
    </div>
  );
}

export default App;
