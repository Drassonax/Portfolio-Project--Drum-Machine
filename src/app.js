import React from 'react'
import ReactDOM from 'react-dom'
import DrumMachine from './components/DrumMachine'
import 'normalize.css/normalize.css'
import './styles/styles.scss'


const App = () => {
    return (
        <DrumMachine />
    )
}


ReactDOM.render(<App />, document.getElementById('root'))