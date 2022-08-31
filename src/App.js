import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import DetailPage from './Components/DetailPage';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
