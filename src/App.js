import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title = "Textutils" />
    <div className="container my-3" >
      <TextForm headingtext = "Enter text below to analyize"/>
    </div>
    </>
  );
}

export default App;
