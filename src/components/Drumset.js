import React from 'react'

const Drumset = (props) => {
    return (
        <div id="drum-set" className="container">
            <div className="row" id="row-1">
                <div className="col drum-pad" id="Heater-1" onClick={() => props.play(props.pads[0].button, props.pads[0].clip)}>
                    <button className="pad" id={`btn-${props.pads[0].button}`}>{props.pads[0].button}</button>
                    <audio src={props.pads[0].url} className="clip" id={props.pads[0].button}></audio>
                </div>
                <div className="col drum-pad" id="Heater-2" onClick={() => props.play(props.pads[1].button, props.pads[1].clip)}>
                    <button className="pad" id={`btn-${props.pads[1].button}`}>{props.pads[1].button}</button>
                    <audio src={props.pads[1].url} className="clip" id={props.pads[1].button}></audio>
                </div>
                <div className="col drum-pad" id="Heater-3" onClick={() => props.play(props.pads[2].button, props.pads[2].clip)}>
                    <button className="pad" id={`btn-${props.pads[2].button}`}>{props.pads[2].button}</button>
                    <audio src={props.pads[2].url} className="clip" id={props.pads[2].button}></audio>
                </div>
                <div className="col drum-pad" id="Heater-4" onClick={() => props.play(props.pads[3].button, props.pads[3].clip)}>
                    <button className="pad" id={`btn-${props.pads[3].button}`}>{props.pads[3].button}</button>
                    <audio src={props.pads[3].url} className="clip" id={props.pads[3].button}></audio>
                </div>
            </div>
            <div className="row justify-content-center align-items-center" id="row-2">
                <div className="col-3 drum-pad" id="Clap" onClick={() => props.play(props.pads[4].button, props.pads[4].clip)}>
                    <button className="pad" id={`btn-${props.pads[4].button}`}>{props.pads[4].button}</button>
                    <audio src={props.pads[4].url} className="clip" id={props.pads[4].button}></audio>
                </div>
                <div className="col-3 drum-pad" id="Open-HH" onClick={() => props.play(props.pads[5].button, props.pads[5].clip)}>
                    <button className="pad" id={`btn-${props.pads[5].button}`}>{props.pads[5].button}</button>
                    <audio src={props.pads[5].url} className="clip" id={props.pads[5].button}></audio>
                </div>
                <div className="col-3 drum-pad" id="Kick-n-Hat" onClick={() => props.play(props.pads[6].button, props.pads[6].clip)}>
                    <button className="pad" id={`btn-${props.pads[6].button}`}>{props.pads[6].button}</button>
                    <audio src={props.pads[6].url} className="clip" id={props.pads[6].button}></audio>
                </div>
            </div>
            <div className="row justify-content-center align-items-center" id="row-3">
                <div className="col-3 drum-pad" id="Kick" onClick={() => props.play(props.pads[7].button, props.pads[7].clip)}>
                    <button className="pad" id={`btn-${props.pads[7].button}`}>{props.pads[7].button}</button>
                    <audio src={props.pads[7].url} className="clip" id={props.pads[7].button}></audio>
                </div>
                <div className="col-3 drum-pad" id="Closed-HH" onClick={() => props.play(props.pads[8].button, props.pads[8].clip)}>
                    <button className="pad" id={`btn-${props.pads[8].button}`}>{props.pads[8].button}</button>
                    <audio src={props.pads[8].url} className="clip" id={props.pads[8].button}></audio>
                </div>
            </div>
        </div>
    )
}

export default Drumset