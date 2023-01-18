import './App.css';
import Report from './report.js';
import {CLEARSKY, CLEARSKY_IMG, FEW_CLOUDS, SCATTERED_CLOUDS, BROKEN_CLOUDS, SHOWER_RAIN,RAIN, THUNDERSTORM,SNOW,MIST, FEW_CLOUDS_IMG,SCATTERED_CLOUDS_IMG,BROKEN_CLOUDS_IMG, SHOWER_RAIN_IMG,RAIN_IMG,THUNDERSTORM_IMG,SNOW_IMG,MIST_IMG  } from './weatherTypes.js';


function App() {


  return (
    <div className="App-body">
      <Report />
      <footer>
        <p className='footer'>Developer:  Kousha A</p>
      </footer>
      
    </div>
  );
}

export default App;
