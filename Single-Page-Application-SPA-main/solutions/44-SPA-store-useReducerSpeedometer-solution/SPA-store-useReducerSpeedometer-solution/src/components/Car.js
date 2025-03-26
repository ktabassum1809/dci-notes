import React, { useEffect, useReducer } from "react"
import ReactSpeedometer from "react-d3-speedometer"

const initState = {
  engineRunning: false,
  speed: 0,
  distance: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleCar":
      if (state.speed === 0) {
        state = {
          ...state,
          engineRunning: !state.engineRunning,
        }
      }
      return state
    case "accelerate":
      if (state.engineRunning && state.speed < 240) {
        state = {
          ...state,
          speed: state.speed + 5,
        }
      }
      return state
    case "break":
      if (state.speed > 0) {
        state = {
          ...state,
          speed: state.speed - 5,
        }
      }
      return state
    case "move":
        if (state.speed > 0) {
          state = {
            ...state,
            distance: state.distance + (state.speed/2000)
          }
        }
      return state
  }

  console.error("Unknown Action", action)
  return state
}

export default function Car() {
  const [state, dispatch] = useReducer(reducer, initState)
  const intervalRef = React.useRef(null)
  const distanceRef = React.useRef(null)

  useEffect(()=>{
    distanceRef.current = setInterval(() => dispatch({ type:"move" }), 10)
  }, [])

  const startAction = (type) => {
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => dispatch({ type }), 50)
  }

  const stopAction = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  return (
    <div className="car">
      {!state.engineRunning ? (
        <p>Engine off</p>
      ) : (
        <ReactSpeedometer
          value={state.speed}
          minValue={0}
          maxValue={240}
          currentValueText={`${state.speed} km/h`}
          needleTransitionDuration={100}
        />
      )}
      <div>
        <p>Distance travelled: {state.distance.toFixed(2)}</p>
        <button onClick={() => dispatch({ type: "toggleCar" })}>
          {state.engineRunning ? "Turn engine off" : "Turn engine on"}
        </button>
        <button
          onMouseDown={() => startAction("accelerate")}
          onMouseUp={() => stopAction()}
          onMouseLeave={() => stopAction()}
        >
          Accelerate
        </button>
        <button
          onMouseDown={() => startAction("break")}
          onMouseUp={() => stopAction()}
          onMouseLeave={() => stopAction()}
        >
          Break
        </button>
      </div>
    </div>
  )
}
