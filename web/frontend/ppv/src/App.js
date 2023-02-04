import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Videos from './components/Videos';
import DragDrop from './components/DragDrop';
import Analytics from './components/Analytics';

function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      {/* <div className="main-display" style={{"display" : "flex"}}>
      <Sidebar/>
       <Videos/>
      </div> */}
      <Analytics/>
      {/* <Analytics/> */}
    </div>
  );
}

export default App;
