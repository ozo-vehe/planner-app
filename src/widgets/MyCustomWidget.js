import React, { useState } from 'react';
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpeg";

export default function MyCustomWidget() {
  const images = [image1, image2, image3, image4, image5];
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = async() => {
    // Checks if the current image displayed is the  last image
    // If it's not the last image the below code runs
    if((imageIndex + 1) < images.length) {
      // Sets the current image to the next image in the array 
      // by adding 1 to the index of the previous image
      setCurrentImage(images[imageIndex + 1]);
      // Reset the index of the current image 
      setImageIndex(imageIndex + 1);
    }
    // If it is the last image the code below will run
    else {
      //Sets the index of the current image to 0
      setImageIndex(0);
      // Sets the current image to the first image in the array
      setCurrentImage(images[0]);
    }
  }

  return (
    <div className='gallery'>
      <h1>Photo Gallery</h1>
      <div className="images">
        <img src={currentImage} alt="Current Gallery" />
      </div>

      <div className="btn">
        <button className="next" onClick={nextImage}>Next</button>
      </div>
    </div>
  )
}