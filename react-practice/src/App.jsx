import './App.css'
import {useRef} from 'react'
function App() {
  const headingRef = useRef(null)
  let handleClick = () => {
    headingRef.current.style.color = "red"
  }
  return (
    <div className="App">
      <h1 ref={headingRef} onClick={handleClick}>Hello my name is sadeq</h1>
    </div>
  )
}

export default App
