import reactLogo from "./assets/react.svg"
import "./App.css"

const charImage =
	"https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png"

function App() {
	const isFirstReactApp = true
	const chooseImage = "react"
	return (
		<>
			<div>
				{isFirstReactApp ? (
					<h1>Hello World!</h1>
				) : (
					<h1>Nice to see you coding again</h1>
				)}
			</div>
			{chooseImage === "react" && <img src={reactLogo} alt="logo of React" />}
			{chooseImage === "char" && <img src={charImage} alt="logo of React" />}

			{/* <img src={reactLogo} alt="logo of React" />
			<img src={charImage} alt="image of charizard from an external website" /> */}
		</>
	)
}

export default App
