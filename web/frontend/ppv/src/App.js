import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Videos from './components/Videos';
import DragDrop from './components/DragDrop';
import DropModal from './components/DragModal';
function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <div className="main-display" style={{"display" : "flex"}}>
      <Sidebar/>
       <Videos/>
       <DropModal/>
      </div>
    </div>
  );
}

export default App;
