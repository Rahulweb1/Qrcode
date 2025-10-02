import React, { useState } from 'react';
import './App.css';
import defaultQrImage from '/Qr code.png';

const Qrcode = () => {
  const [qrSize, setQrSize] = useState(150);
  const [img, setImg] = useState(defaultQrImage);
  const [loading, setLoading] = useState(false);
  const [qrdata, setData] = useState("https://rahulgandhi.in/");


  async function generateQR() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrdata)}`;
      setImg(url);
    } catch (error) {
      console.error("Error generating QR code", error);
    } finally {
      setLoading(false);
    }
  }

  function downloadQR() {
    if (img && img !== defaultQrImage) {
      fetch(img)
        .then(response => response.blob())
        .then(blob => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'QR_code.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(error => {
          console.error("Error downloading QR code", error);
        });
    } else {
      alert("Please generate a QR code first");
    }
  }

  function increaseSize() {
    if (qrSize < 1000) {
      setQrSize(qrSize + 50);
    }
  }

  function decreaseSize() {
    if (qrSize > 1) {
      setQrSize(qrSize - 50);
    }
  }

  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      <div className="qr-container">
        {loading && <p>please wait...</p>}
        {img && <img src={img} className='Qr-code-image' alt="QR Code" />}
      </div>
      <div className="input-container">
        <label htmlFor='dataInput' className='input-label'>
          Data for QR Code:
        </label>
        <input 
          type="text" 
          value={qrdata}
          id='dataInput' 
          className='input-field' 
          placeholder='Enter data for QR code' 
          onChange={(e) => setData(e.target.value)}
        />
        
        <label htmlFor='sizeInput' className='input-label'>
          Image Size (px):
        </label>
        <div className="size-input-container">
          <input 
            type="number" 
            id='sizeInput' 
            className='input-field size-input' 
            placeholder='Enter image size' 
            value={qrSize}
            min="1"
            max="1000"
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 1 && value <= 1000) {
                setQrSize(value);
              }
            }}
          />
          <div className="size-control">
            <button className='size-control-button' onClick={increaseSize}>+</button>
            <button className='size-control-button' onClick={decreaseSize}>-</button>
          </div>
        </div>
        
        <div className="button-group">
          <button className='generate-button' onClick={generateQR}>Generate QR Code</button>
          <button className='download-button' onClick={downloadQR}>Download QR Code</button>
        </div>
      </div>
      <p>Designed by <a href='https://www.rahul.com/'>Rahul</a></p>
    </div>
  );
}

export default Qrcode;