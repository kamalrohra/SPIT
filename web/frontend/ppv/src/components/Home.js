// import './Home.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';

function Home() {
  return (
    <div className="Home">
      <Header/>
      <br/>
      <div className="main-display" style={{"display" : "flex"}}>
      <Sidebar/>
       <Videos/>
      </div>
      {/* <Player/> */}
  </div> 
  );
}

export default Home;
