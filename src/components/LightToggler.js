import {useState} from 'react';

function LightToggler(){
	
	const [dark, setDark]= useState(0);
	
	function toggleDark(){
		setDark(!dark)
	}

	return (
		<>

		<h1> 
		{dark ? "Dark" : "Light" } Mode Active!
		</h1>

		<button onClick={toggleDark} > Toggle It! </button>
		</>
	)

}


export default LightToggler;
