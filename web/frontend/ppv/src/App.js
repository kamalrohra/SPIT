import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Videos from "./components/Videos";
import Player from "./components/Player";
import PlayerPage from "./components/PlayerPage";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Profile from "./components/Profile";
import Register from "./components/Register";
import ChannelDetail from "./components/Channel";
import App2 from "./landing/App2";

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
        {/* <Home /> */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/video/:id" element={<PlayerPage />}></Route>
          <Route exact path="/channel" element={<ChannelDetail />}></Route>
          {/* <Route exact path="landing" element={<Mainpage/>}></Route> */}
          <Route exact path="landing2" element={<App2/>}></Route>

        </Routes>
        {/* <Profile/> */}
        {/* <Register/> */}
      </div>
    </Router>
  );
}

export default App;
