import React from 'react'
import Display from './Display'
import Drumset from './Drumset'

const pads = [
    {
        button: 'Q',
        clip: 'Heater 1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        button: 'W',
        clip: 'Heater 2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        button: 'E',
        clip: 'Heater 3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        button: 'R',
        clip: 'Heater 4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        button: 'A',
        clip: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        button: 'S',
        clip: 'Open HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        button: 'D',
        clip: "Kick 'n' Hat ",
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        button: 'Z',
        clip: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        button: 'X',
        clip: 'Closed HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
]
class DrumMachine extends React.Component {
    constructor(props) {
        super(props)
        this.playSoundClip = this.playSoundClip.bind(this)
        this.state = {
            playingClip: '',
            pads
        }
    }
    playSoundClip = (clipButton, clipName) => {
        const soundClip = document.getElementById(clipButton)
        soundClip.currentTime = 0
        soundClip.play()
        this.setState({ playingClip: clipName})
        const hitPad = document.getElementById(`btn-${clipButton}`)
        hitPad.setAttribute('class', 'pad activated')
        setTimeout(() => {
            hitPad.setAttribute('class', 'pad')
        }, 100);
    }
    componentDidMount() {
        document.addEventListener('keypress', (e) => {
            const drumPad = this.state.pads.find((pad) => pad.button === e.key.toUpperCase())
            if (drumPad) {
                this.playSoundClip(drumPad.button, drumPad.clip)
            }
        })
    }
    componentWillUnmount() {
        document.removeEventListener('keypress', (e) => {
            const drumPad = this.state.pads.find((pad) => pad.button === e.key.toUpperCase())
            if (drumPad) {
                this.playSoundClip(drumPad.button, drumPad.clip)
            }
        })
    }
    

    render() {

        return (
            <div id="drum-machine">
                <Drumset play={this.playSoundClip} pads={this.state.pads} />
                <Display clipName={this.state.playingClip} />
            </div>
        )
    }
}

export default DrumMachine