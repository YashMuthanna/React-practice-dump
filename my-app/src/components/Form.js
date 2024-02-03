import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("Enter text here");
  const handleUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleCopyToClipboard = () => {
    // Create a range to select the text
    const range = document.createRange();
    const textarea = document.getElementById("mybox"); // Assuming 'mybox' is the id of your textarea
    range.selectNodeContents(textarea);

    // Create a selection and select the text
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Execute the copy command
    document.execCommand("copy");

    // Clear the selection
    selection.removeAllRanges();
  };
  const handleClear = () => {
    setText("");
  };
  return (
    <>
      <div className="container my-3" style={{ color: props.mode==='light'?'black':'white' }}>
        <div className="mb-3 " >
          <label htmlFor="mybox" className="form-label" >
            <h1>Text Analyzer</h1>
          </label>
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>
        <button type="upper" className="btn m-1 btn-primary" onClick={handleUp}>
          Convert Uppercase
        </button>
        <button
          type="lower"
          className="btn m-1 btn-secondary"
          onClick={handleLower}
        >
          Convert Lowercase
        </button>
        <button
          type="button"
          className="btn  m-1 btn-success"
          onClick={handleCopyToClipboard}
        >
          Copy
        </button>
        <button
          type="button"
          className="btn m-1 btn-danger"
          onClick={handleClear}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode=='light'?'black':'white' }}>
        <h2>Text Summary</h2>
        <p>Number of words: {text.split(" ").length}</p>
        <p>Number of characters: {text.length}</p>
      </div>
    </>
  );
}
