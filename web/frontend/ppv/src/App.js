import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Videos from './components/Videos';
import Player from './components/Player';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <div className="main-display" style={{"display" : "flex"}}>
      <Sidebar/>
      <Register/>
      </div>
      {/* <Register/> */}
      {/* <Player/> */}
  </div> 
  );
}

export default App;
