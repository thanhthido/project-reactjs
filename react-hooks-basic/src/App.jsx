import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='app'>
			<h1>Welcome to React hook</h1>
		</div>
	)
}

export default App
