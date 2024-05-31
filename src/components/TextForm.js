import React from 'react'
import react, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to uppercase", "success");
    }
    const handleLOClick = () => {
        console.log("Lowercase was clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to lowercase", "success");
    }
    const handleCLEARClick = () => {
        console.log("CLEAR WAS CLICKED");
        let newtext = '';
        setText(newtext);
        props.showAlert("converted to cleartext", "success");
    }
    const handleOnChange = (event) => {
        console.log("handle on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container">

                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} id="Text" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLOClick}>convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCLEARClick}>convert to Clear</button>
            </div>
            <div className="container my-3">
                <h2> YOUR TEXT SUMMARY</h2>
                <p>{text.split(" ").length - 1} words and {1000 - text.length - 1} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Please enter some text here"}</p>


            </div>
        </>
    )
}
