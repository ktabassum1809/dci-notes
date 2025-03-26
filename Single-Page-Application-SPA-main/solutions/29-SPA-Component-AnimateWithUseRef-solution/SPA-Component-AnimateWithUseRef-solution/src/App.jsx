import { useEffect, useRef, useState } from 'react'
import './App.css'

const animations = [
   [{ transform: "skew(0, 0)" },{ transform: "skew(-15deg, -15deg)" },{ transform: "skew(15deg, 15deg)" },{ transform: "skew(0, 0)" }],
   [{ rotate: "360deg" }],
   [{ filter: "hue-rotate(360deg)" }],
   [{ filter: "blur(0)" }, { filter: "blur(30px)" },{ filter: "blur(0px)" }],
   [{ filter: "invert(100%)" },{ filter: "invert(0%)" },{ filter: "invert(100%)" },{ filter: "invert(0%)" },{ filter: "invert(100%)" },{ filter: "invert(0%)" }],
]

const timing = { duration: 1000,iterations: 1 }

function App() {
  const [current, setCurrent] = useState(0)
  const target = useRef(null)

  useEffect(() => {
    target.current.animate(animations[current], timing)
  }, [current])

  function next() {
    let next = current + 1
    if (!animations[next]) {
      next = 0
    }
    setCurrent(next)
  }

  return (
    <>
      <div className="buttons">
        <button onClick={next}>Next</button>
      </div>
      <div>
        <h1>Animation {current}</h1>
      </div>

      <div className="target" ref={target}></div>
    </>
  )
}

export default App
