
import './App.css';
import Visitors from './Visitors'
import Analysis from './Analysis'
import Average from './Average'
import Review from './Review'
import Dashboard from './Dashboard'




function App() {
  return (
    <div className="grid-container" id="App">
     <div className="Reviews">
        <Review reviewNum="400"/>
      </div>

      <div className="Average_Rating">
        <Average ratingNum="300"/>
      </div>

      <div className="Sentiment_Analysis">
        <Analysis analysisNum={200} analysisNum1={201} analysisNum2={202}/>
      </div>

      <div className="Website_Visitors">
        <Visitors visitorNum="100"/>
      </div>

      <div className="Dashboard">
        <Dashboard/>
      </div>

    </div>
  );
}

export default App;
