import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{ 
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase");
    }  
     const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
    }  
     const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
    }
    const handleCopy = ()=>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () =>{
      let newText = text.split(/\s+/);
      setText(newText.join(" "));
    }
    
const handleOnChange = (event)=>{
     setText(event.target.value)
}
    const [text,setText] = useState('Enter text here');


  return (
    <>
    <div className = "container" style={{color:props.mode==='dark'?'white':'black'}}>
         <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
          color:props.mode==='dark'?'white':'black'
        }} id="myBox" rows="8"></textarea>
        <button className='btn btn-primary my-2 mx-2' onClick={handleUpClick}> Conver to Upeercase</button>
        <button className='btn btn-primary my-2 mx-2' onClick={handleLoClick}> Conver to Lowercase</button>
          <button className='btn btn-primary my-2 mx-2' onClick={handleClearClick}> Clear Text</button>
          <button className='btn btn-primary my-2 mx-2' onClick={handleCopy}>copy Text</button>
          <button className='btn btn-primary my-2 mx-2' onClick={handleExtraSpaces}>Remove Spaces</button>
        </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } minutes read</p>
      <h3>preview</h3>
       <p>{text}</p>
    </div>
    </>
  );
}

