import './App.css';
import PageHeader from './components/PageHeader';
import Principles from './components/Principles';

function App() {
  return (
    <div className="App">
      <PageHeader/>
      <div className="container">
        <Principles />
      </div>
      <div>
        <p><a href="https://www.flexport.com/design">Latitude</a> is our jam.</p>
      </div>
       <div>
         <p><a href="https://www.flexport.com/careers/teams/user-experience/">Come work with us!</a></p>
      </div>
    </div>
  );
}

export default App;
