import React, { Component } from 'react'
import './App.css'
import { Keypad } from 'components'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <Keypad />
        </header>
      </div>
    )
  }
}

export default App
