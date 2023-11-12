import './App.css';
import {BrowserRouter as Router,Routes} from "react-router-dom"
// import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';
// import About from "./Components/About/About"

// import Login from './Components/Login/Login';
function App() {
  return (
<Router>
  <Header/>
<Routes>
  {/* <Route path='/' element={<Home/>} / > */}
  {/* <Route path='/about' element={<About />} / > */}
  {/* <Route path='/projects' element={<Projects />} / > */}
  {/* <Route path='/contact' element={<Contact />} / > */}
  {/* <Route path='/Account' element={<Login />} / > */}
</Routes>

</Router>

  );
}

export default App;
