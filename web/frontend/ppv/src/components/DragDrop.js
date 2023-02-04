import React from "react";
import "../styles/DragDrop.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function handleFile(files) {
  alert("Number of files: " + files.length);
}


// drag drop file component
function DragDropFile() {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);
  
  // handle drag events
  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  // triggers when file is dropped
  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };
  
  // triggers when file is selected with click
  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };
  
// triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };
  
  return (
    <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>

        <div className="textbox">
        <TextField
          id="outlined"
          label="Video Title"
        />
        </div>
        <br/>
        <div>
        <TextField className="textbox"
        id="outlined-multiline-flexible"
        label="Video Description"
        multiline
        maxRows={4}
         />
        </div>
         <br/>

      <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
      <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
        <div>
          <p>Drag and drop your file here or</p>
          <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
        </div> 
      </label>
      { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }

      <Button>Submit</Button>

    </form>
  );
};

// app component
function DragDrop() {
  return (
    <div className="dd"><h1>Upload Video</h1>
    <div className="page">
      <DragDropFile />
      </div>
     </div>
    )
}

export default DragDrop;

