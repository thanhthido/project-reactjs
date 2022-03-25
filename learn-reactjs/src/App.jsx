import { useState } from "react"
import logo from "./logo.svg"
// import "./App.css"
import TodoFeature from "./components/features/Todo"
import AlbumFeature from "./components/features/Album"

function App() {
	return (
		<div className="App">
			{/* <TodoFeature /> */}
			<AlbumFeature />
		</div>
	)
}

export default App
