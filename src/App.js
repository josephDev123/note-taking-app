import './App.css';
import {useContext, useState} from 'react';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import Markdown from './components/Markdown';
import Header from './components/Header';
import {MarkdownContext} from './context/Markdown_context';


function App() {
  const [value, setValue] = useState();
  const [notes, setNotes] = useState();

  return (
    <div>
        <Header/>
        <div className="container-fluid bg-dark d-flex pt-2 flex-wrap justify-content-center ">
          <MarkdownContext.Provider value={{ setValue,  value, notes, setNotes}}>
              <Navbar/>
              <NoteList/>
              <Markdown/>
          </MarkdownContext.Provider>
              
        </div>
    </div>
  );
}

export default App;
