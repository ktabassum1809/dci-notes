import './App.css'
import Card from "./Card"
import Welcome from "./Welcome"

function App() {
  return (
    <>
      <h1>Sports</h1>
      
      <Card title="League of champions" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/UEFA_Champions_League.svg/1200px-UEFA_Champions_League.svg.png" alt="logo of champions league" text="The league has started. " href="#" />
      
      <Card title="Formula 1" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012018/untitled-1_20.png?An9Fa1zRO4z6Dj__EVR4da6YOWsvtEw2&itok=6PiLMTa5" alt="formula 1 logo" text="Just cars going around in circles " href="https://google.com" />


      <Welcome name="Jane" lastname="Doe"/>
      <Welcome name="John" lastname="Doe"/>

      <p className="read-the-docs">
        This is outside of the cards
      </p>
    </>
  )
}

export default App
