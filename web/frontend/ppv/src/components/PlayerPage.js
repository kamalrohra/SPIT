// import './App.css';
import Header from './Header';
// import Sidebar from './Sidebar';
import Player from './Player';
import Chart1 from './Chart1';
import Typography from '@mui/material/Typography';

function PlayerPage() {
  return (
    <div>
      <div className="App">
      <Header />
      <br /> <br />
      <div className="main-display" style={{ display: "flex", justifyContent: "space-around" }}>
        <Player />
        <div>
      <div style={{display:"flex", justifyContent:"center", marginTop:"5px"}}>
      <Typography variant="h4" fontWeight="bold">Stastics</Typography>
      </div>
      <Chart1/>
    </div>
      </div>
      <div>
      </div>
    </div>
    
    </div>
  );
}

export default PlayerPage;
