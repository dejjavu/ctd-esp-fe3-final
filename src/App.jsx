
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <div className="App">

          <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path ="/" element={ <Home />}/>
            <Route path ="/contact" element={ <Contact />}/>
            <Route path ="/favs" element={ <Favs />}/>
            <Route path ="/detail" element={ <Detail />}/>
          </Routes>
          <Footer/>
          </BrowserRouter>

      </div>
  );
}

export default App;
