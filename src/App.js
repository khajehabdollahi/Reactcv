import Hassan from './components/images/Hassan.jpg';
import './App.css';
import Education from './components/Education';
import WorkExperiences from './components/WorkExperiences';
import Info from './components/Info';



function App() {
  return (
    <div className="App">
      <header >
        <h1>Mohammad Hassan Khajeh Abdollahi</h1>
        <img src={Hassan} width={350} alt="logo" />
        <Education />
        <WorkExperiences />
        <Info/>
        
      </header>
    </div>
  );
}

export default App;
