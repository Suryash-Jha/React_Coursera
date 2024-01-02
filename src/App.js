import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LightToggler from './components/LightToggler';
//Its written in JSX
function App() {
	let title= "Hye Guys"
  return (
	  <BrowserRouter>
	  <Routes>
	  	<Route path="light" element= {<LightToggler />} />
	  	<Route index element= {<Nav />} />
	  </Routes>
	  </BrowserRouter>
  );
}

export default App;
