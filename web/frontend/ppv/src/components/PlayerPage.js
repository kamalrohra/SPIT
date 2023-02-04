// import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Player from './Player';
function PlayerPage() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <div className="main-display" style={{"display" : "flex"}}>
      <Sidebar/>
      <Player/>
      </div>
  </div> 
  );
}

export default PlayerPage;
