import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log('Converting to uppercase');
    const newText = text.toUpperCase();
    settext(newText);
  }

  const handleOnChange = (event) =>{
    settext(event.target.value);
  }

  const [text, settext] = useState('Enter text here');

  return (
    <div>
      <h1>{props.headingtext}</h1>
      <div className="mb-3">        
        <textarea
          className="form-control"
          id="mybox"
          rows="10"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick} >
        Convert to Uppercase
      </button>
    </div>
  );
}
