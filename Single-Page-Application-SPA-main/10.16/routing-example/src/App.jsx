import "./App.css"
import Layout from "./components/Layout"
import Weather from "./components/Weather"
import Settings from "./components/Settings"
import { Routes, Route } from "react-router-dom"

function App() {
	return (
		<>
			<h1>Routing basic example</h1>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Weather />} />
					<Route path="weather" element={<Weather />} />
					<Route path="settings" element={<Settings />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
