import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Videos from './components/Videos';
import Player from './components/Player';
import PlayerPage from './components/PlayerPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <div className="main-display" style={{"display" : "flex"}}>
      <Sidebar/>
       <Videos/>
      </div>
      {/* <Player/> */}
  </div> 
  // <PlayerPage/>
  );
}

export default App;
