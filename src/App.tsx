import './css/App.css';
import Cover from './components/Cover';
import Principles from './components/Principles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Cover/>
      <div className="container">
        <Principles />
      </div>
      <div>
        <p><a href="https://www.flexport.com/design">Latitude</a> is our jam.</p>
      </div>
       <div>
         <p><a href="https://www.flexport.com/careers/teams/user-experience/">Come work with us!</a></p>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
