import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Videos from './components/Videos';
import Player from './components/Player';
import Register from './components/Register';
function App() {
  return (
    <Router>
    <div className="App">
     {/* <ul className="App-header">
       <li>
         <Link to="/">Home</Link>
       </li>
       <li>
         <Link to="/video">PlayerPage</Link>
       </li>
     </ul> */}
     
    <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/video' element={< PlayerPage />}></Route>
   </Routes>
   </div>
</Router>
  );
}

export default App;
