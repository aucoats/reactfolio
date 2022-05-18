import './App.css';
import About from './components/About';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import Resume from './components/Resume';  
import { useState } from 'react';

function App() {

  const [page] = useState([
    'about', 'projects', 'contact', 'resume'
  ])

  const [currentPage, setCurrentPage] = useState(page[0])

  return (
    <> 
      <Header
        page={page}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        ></Header>
      <About></About>
      <Projects></Projects>
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>



      { 
      /*
        CODE FROM INITIAL ITERATION 
      { currentPage === 'about' ?
        <>
        <About></About>
        <Projects></Projects>
        </> :
        <></>
        }
      {/* { currentPage === 'projects' ?
        <Projects></Projects> :
        <></>
        } */}
      {/* { currentPage === 'contact' ?
        <Contact></Contact> :
        <></>
        }
      { currentPage === 'resume' ?
        <Resume></Resume> :
        <></>
        } */}
      
    </>
  );
}

export default App;
