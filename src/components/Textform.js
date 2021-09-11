import React, { useState } from 'react';

export default function Textform(props) {
    //onchnage = use for write or paste the text in textarea
    const handelonchange = (event) => {
        console.log("onchnage");
        settext(event.target.value);
    }

    //uppercase
    const handleupCilck = () => {
        let newtext = Text.toUpperCase();
        settext(newtext);
        props.showalert("Converted to Uppercase", "success")
    }

    //lowercase
    const handleloCilck = () => {
        let newtext = Text.toLowerCase();
        settext(newtext);
        props.showalert("Converted to Lowercase", "success")
    }

    //titelcase
    const handletiCilck = () => {
        let newtext = Text.replace(/\b(\w)/g, s => s.toUpperCase());
        settext(newtext);
        props.showalert("Converted to Titlecase", "success")
    }
    //cleartext
    const handleclCilck = () => {
        let newtext = ("");
        settext(newtext);
        props.showalert("Cleared Text", "success")
    }

    //to copy text
    const handlecopy = () => {
        navigator.clipboard.writeText(Text);
        props.showalert("Copied!", "success")
    }
    //to handle extraspaces
    const handleExtraspaces = () => {
        let newtext = Text.split(/[ ] + /);
        settext(newtext.join(" "));
        props.showalert("Extraspeces are removed successfully ", "success")
    }

    // Declare a new state variable, which we'll call "text". we cannot modifity this variable directly. to chnage the varible we can use settext method
    const [Text, settext] = useState("");

    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-2">
                    <textarea className="form-control" value={Text} onChange={handelonchange} id="exampleFormControlTextarea1"
                        style={{ backgroundColor: props.mode === 'dark' ? '#474646' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="6" placeholder="Enter or Paste your text here"></textarea>
                </div>
                <button disabled={Text.length === 0} className="btn btn-dark mx-2 my-1" onClick={handleupCilck}>UpperCase</button>
                <button disabled={Text.length === 0} className="btn btn-dark mx-2 my-1" onClick={handleloCilck}>LowerCase</button>
                <button disabled={Text.length === 0} className="btn btn-dark mx-2 my-1" onClick={handletiCilck}>TitleCase</button>
                <button disabled={Text.length === 0} className="btn btn-dark mx-2 my-1" onClick={handleclCilck}>ClearText</button>
                <button disabled={Text.length === 0} className="btn btn-dark mx-2 my-1" onClick={handlecopy}>CopyText</button>
                <button disabled={Text.length === 0} className="btn btn-dark mx-2 my-1" onClick={handleExtraspaces}>Remove extra spaces</button>
                <div className="container my-2">
                    <h4>Your text summary </h4>

                    <p>{Text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {Text.length} character</p>

                    <p>You need {0.08 * Text.split(" ").filter((element) => { return element.length !== 0 }).length}min time to read above text </p>

                    <h5>Text Preview</h5>

                    <p>{Text.length > 0 ? Text : "Enter the text to preview here"}</p>
                </div>
            </div>
        </>
    )
}
