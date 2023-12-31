import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

//Its written in JSX
function App() {
	let title= "Hye Guys"
  return (
  	<>
	  <Nav name="suryash" greet="afternoon" />
	  </>
  );
}

export default App;
