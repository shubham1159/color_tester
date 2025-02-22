import React, { useState } from "react";
import "./Header.css";
import background from "../assets/back.jpg";
import PopUp from "../PopUp/PopUp";
import ColorThief from "colorthief";
import tinycolor from "tinycolor2";

const brandColors = {
  primary: ["#FF0000", "#003DA5"],
  secondary: ["#72B5E8", "#54585A"],
  accent: ["#FFB612", "#158B45"],
};

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [colors, setColors] = useState([]);
  const [results, setResults] = useState([]);

  const handleUploadClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
        extractColors(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const extractColors = (imageSrc) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSrc;
    img.onload = () => {
      document.body.appendChild(img); 
      const colorThief = new ColorThief();
      try {
        const extractedColors = colorThief.getPalette(img, 6).map((rgb) =>
          tinycolor({ r: rgb[0], g: rgb[1], b: rgb[2] }).toHexString()
        );
        setColors(extractedColors);
        compareColors(extractedColors);
      } catch (error) {
        console.error("Error extracting colors:", error);
      }
      document.body.removeChild(img); 
    };
  };
  

  const compareColors = (extractedColors) => {
    const results = extractedColors.map((color) => {
      let matchCategory = null;
      Object.entries(brandColors).forEach(([category, colors]) => {
        if (colors.includes(color)) {
          matchCategory = category;
        }
      });
      const contrastCheck = Object.values(brandColors).flat().map((brandColor) => {
        return {
          brandColor,
          contrast: tinycolor.readability(brandColor, color) >= 4.5 ? "Pass" : "Fail",
        };
      });
      return { color, matchCategory, contrastCheck };
    });
    setResults(results);
  };

  return (
    <>
      <div className="header-part">
        <div id="header">
          <img src={background} alt="background" />
          <div className="background-text">
            <h3>GET CHECK YOUR IMAGE FOR FREE</h3>
            <h1>Check how compatible your image is in sec</h1>
            <p>Introducing ColorX - the custom logo maker.</p>
          </div>
          <button className="upload" onClick={handleUploadClick}>
            Upload here
          </button>
        </div>
      </div>
      <PopUp isOpen={isModalOpen} onClose={handleCloseModal}>
        <h3>Select an Image to Upload</h3>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && (
          <>
            <h2>Extracted Colors:</h2>
            <div className="color-grid">
              {colors.map((color, index) => (
                <div key={index} style={{ backgroundColor: color }} className="color-box" />
              ))}
            </div>
            <h2>Results:</h2>
            <div className="results-grid scrollable-horizontal">
              {results.map(({ color, contrastCheck }, index) => (
                <div key={index} className="result-box">
                  <div style={{ backgroundColor: color }} className="color-label">
                    {color}
                  </div>
                  <ul>
                    {contrastCheck.map(({ brandColor, contrast }, idx) => (
                      <li key={idx} className={contrast === "Pass" ? " pass green-text " : " fail"} >
                        Match with {brandColor}: {contrast}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </PopUp>
    </>
  );
};

export default Header;
