import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// method 1--------
function MyApp () {
  return (
    <div>
      <h1>Custom App ! </h1>
    </div>
  )
}


// method 2--------
const anotherElement = (
  <a href="https://google.com" target='_blank'> Visit Google </a>
)


// method 3--------

const reactElement = React.createElement(
  'a',
  {href:"https://google.com", target:'_blank'},
  'Click Me to Visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).
  render(
    <App/>
  )

