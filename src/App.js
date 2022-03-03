import './App.css';
import About from './components/About';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
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
      <Footer></Footer>
    </>
  );
}

export default App;
