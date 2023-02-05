import React, { useState } from "react";
import "../styles/DragDrop.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Buffer } from "buffer";
import axios from "axios";
window.Buffer = Buffer;

// drag drop file component
function DragDropFile({ contract }) {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);
  const handleFile = (file) => {
    alert("Number of files: " + file.length);

    setFiles(file[0]);
  };
  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };
  const [titile, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState(null);
  const [price, setPrice] = useState(0);

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };
  const onSubmit = async (e) => {
    const formData = new FormData();
    formData.append("file", files);
    try {
      // const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
      // const data = await axios.post(url, { data: formData }, headers);

      // console.log("data added");
      // console.log(data);
      const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: `7dd3fc69c503bc7e8695`,
          pinata_secret_api_key: `8938c538bf9a9c5105c3adac5098c735409256450b505148cc952950a765fc41`,
          "Content-Type": "multipart/form-data",
        },
      });
      const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
      console.log(ImgHash);
      const data = await contract.addVideo(
        titile,
        description,
        ImgHash,
        price
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      id="form-file-upload"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}>
      <Button onClick={onSubmit}>Submit</Button>
      <div className="textbox">
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          id="outlined"
          value={titile}
          label="Video Title"
        />
      </div>
      <br />
      <div className="textbox">
        <TextField
          onChange={(e) => setPrice(e.target.value)}
          id="outlined"
          label="Price"
          value={price}
        />
      </div>

      <br />
      <div>
        <TextField
          onChange={(e) => setDescription(e.target.value)}
          className="textbox"
          value={description}
          id="outlined-multiline-flexible"
          label="Video Description"
          multiline
          maxRows={4}
        />
      </div>
      <br />

      <input
        ref={inputRef}
        style={{
          width: "20px",
        }}
        type="file"
        id="input-file-upload"
        multiple={true}
        onChange={handleChange}
      />
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        className={dragActive ? "drag-active" : ""}>
        <div
          style={{
            width: "20px",
          }}>
          <p>Drag and drop your file here or</p>
          <button className="upload-button" onClick={onButtonClick}>
            Upload a file
          </button>
        </div>
      </label>
      {dragActive && (
        <div
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}></div>
      )}
    </form>
  );
}

// app component
function DragDrop({ contract }) {
  return (
    <div className="dd">
      <h1>Upload Video</h1>
      <div className="page">
        <DragDropFile contract={contract} />
      </div>
    </div>
  );
}

export default DragDrop;
