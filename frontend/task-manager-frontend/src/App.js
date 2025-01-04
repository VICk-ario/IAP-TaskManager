import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import NotesList from './NotesList';
import {nanoid} from "nanoid";
import Header from './Header';

function App() {
    const [notes, setNotes]= useState([
        // {
        // id:nanoid(),
        // text:"This is my first Note",
        // date:"15/04/2001"
        // },
        // {
        // id:nanoid(),
        // text:"This is my second Note",
        // date:"25/04/2001"
        // },
        // {
        // id:nanoid(),
        // text:"This is my third Note",
        // date:"05/04/2001"
        // },
]);

    const[darkMode, setDarkMode] = useState(true);

    const addNote = (text)=>{
        const date=new Date();
        const newNote = {
            id:nanoid(),
            text:text,
            date:date.toDateString(),
        };
        const newNotes= [...notes, newNote];
        setNotes(newNotes);
    }

    const deleteNote = (id)=>{
        const newNotes = notes.filter((note)=> note.id!== id);
        setNotes(newNotes);
    };


    return(
        <div className={`${darkMode && 'dark-mode'}`}>
        <div className='container'>
            <Header handleToggleDarkMode={setDarkMode}/>
            <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />
        </div>
        </div>
    )

    // return (
    //     <Router>
    //         <div className='logins'>
    //             {/* Navigation Links */}
    //             <nav className='navbar'>
    //                 <ul>
    //                     <li>
    //                         <Link 
    //                         style={{ textDecoration: 'none',color: 'black' }} 
    //                         to="/login">Login</Link>
    //                     </li>
    //                     <li>
    //                         <Link 
    //                         style={{ textDecoration: 'none',
    //                             color:'black'
    //                          }} 
    //                         to="/signup">Sign up</Link>
    //                     </li>
    //                 </ul>
    //             </nav>

    //             {/* Route Definitions */}
    //             <Routes>
    //                 <Route path="/login" element={<LoginForm />} />
    //                 <Route path="/signup" element={<SignupForm />} />
    //             </Routes>
    //         </div>
    //     </Router>
    // );
}

export default App;
