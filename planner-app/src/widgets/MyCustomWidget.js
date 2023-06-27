import React, { useState } from 'react';
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpeg";

export default function MyCustomWidget() {
  const images = [image1, image2, image3, image4, image5];
  const [currentImage, setCurrentImage] = useState(images[0]);

  const nextImage = async() => {
    let imageIndex = images.indexOf(currentImage);
    if(imageIndex < images.length) {
      console.log(currentImage)
      console.log(imageIndex);
      setCurrentImage(images[imageIndex + 1]);
    }
  }

  return (
    <div className='gallery'>
      <h1>Photo Gallery</h1>
      <div className="images">
        <img src={currentImage} alt="Current Gallery" />
      </div>

      <div className="buttons">
        <button className="next" onClick={nextImage}>Next</button>
      </div>
    </div>
  )
}