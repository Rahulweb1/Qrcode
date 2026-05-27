import React, { useState } from 'react';
import './App.css';
import defaultQrImage from '/Qr code.png';

const Qrcode = () => {
  const [qrSize, setQrSize] = useState("");
  const [img, setImg] = useState(defaultQrImage);
  const [loading, setLoading] = useState(false);
  const [qrdata, setData] = useState("");

  async function generateQR() {
    if (!qrdata.trim()) {
      alert("Please enter data to generate a QR Code");
      return;
    }
    setLoading(true);
    try {
      const finalSize = qrSize || 150;
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${finalSize}x${finalSize}&data=${encodeURIComponent(qrdata)}`;
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
    const currentSize = Number(qrSize) || 150;
    if (currentSize < 1000) {
      setQrSize(currentSize + 50);
    }
  }

  function decreaseSize() {
    const currentSize = Number(qrSize) || 150;
    if (currentSize > 50) {
      setQrSize(currentSize - 50);
    }
  }

  return (
    <div className="app-container">
      <div className="background-glows">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
        <div className="glow glow-3"></div>
      </div>
      
      <div className="split-workspace">
        {/* Left Panel: Configuration & Controls */}
        <div className="workspace-panel control-panel">
          <div className="panel-header">
            <h1 className="title">QR CREATOR</h1>
            <p className="subtitle font-sub">Configure and generate dynamic QR codes instantly.</p>
          </div>
          
          <div className="input-container">
            <div className="input-group">
              <label htmlFor='dataInput' className='input-label'>
                Content Data / URL
              </label>
              <input 
                type="text" 
                value={qrdata}
                id='dataInput' 
                className='modern-input' 
                placeholder='Enter website URL, text, etc.' 
                onChange={(e) => setData(e.target.value)}
              />
            </div>
            
            <div className="input-group">
              <label htmlFor='sizeInput' className='input-label'>
                Dimensions (px)
              </label>
              <div className="size-selector-row">
                <input 
                  type="number" 
                  id='sizeInput' 
                  className='modern-input size-input' 
                  placeholder='e.g., 150' 
                  value={qrSize}
                  min="1"
                  max="1000"
                  onChange={(e) => {
                    const val = e.target.value;
                    setQrSize(val === "" ? "" : Number(val));
                  }}
                />
                <div className="size-control">
                  <button className='size-control-btn' onClick={decreaseSize} title="Decrease size">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </button>
                  <button className='size-control-btn' onClick={increaseSize} title="Increase size">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="action-row">
            <button className='primary-action' onClick={generateQR}>
              <span>Generate QR Code</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
        
        {/* Right Panel: Live QR Display */}
        <div className="workspace-panel preview-panel">
          <div className="preview-display">
            {loading ? (
              <div className="modern-loader">
                <div className="spinner"></div>
                <span>Generating Preview...</span>
              </div>
            ) : (
              <div className="qr-wrapper">
                <img src={img} className='Qr-code-image' alt="QR Code Preview" />
              </div>
            )}
          </div>
          
          <div className="preview-actions">
            <button className='secondary-action' onClick={downloadQR}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              <span>Download Image</span>
            </button>
          </div>
          
          <div className="panel-footer">
            <p>Designed by <a href='https://www.rahul.com/' className="designer-link">Rahul</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qrcode;