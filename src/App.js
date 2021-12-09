import './App.css';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import Markdown from './components/Markdown';
import Header from './components/Header';
function App() {
  return (
    <div>
      <Header/>
   
    <div className="container-fluid bg-dark d-flex pt-2 flex-wrap justify-content-center ">
          <Navbar/>
          <NoteList/>
          <Markdown/>
    </div>
    </div>
  );
}

export default App;
