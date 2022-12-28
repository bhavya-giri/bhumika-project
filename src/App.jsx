import React from "react";
import { BsImage } from "react-icons/bs";
const App = () => {
  return (
    <div className="bg-black p-20 text-white h-screen w-screen">
      <div>
        <h1 className=" text-9xl">PICTURE +</h1>
      </div>

      <div className="flex md:flex-row flex-col h-2/3 gap-10 mt-20">
        <div className=" md:w-1/3 w-full">
          <p className="text-3xl">Bringing your lost memories</p>
          <div className="mt-10">
            <p className="text-4xl">Instructions</p>
            <ul className="text-2xl mt-5">
              <li>1. Click on Drop/Upload image</li>
              <li>2. Select an image from your device</li>
              <li>3. Click on Upload and let the magic take place!</li>
              <li>
                4. You can preview the image and download it back to your device
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 md:w-2/3 w-full">
          <div className="flex flex-col justify-center items-center w-full border-dotted border-2 cursor-pointer rounded-lg">
            <h1 className="text-5xl">+</h1>
            <p>Drop or upload image</p>
          </div>
          <div className="flex flex-col justify-center items-center w-full border-dotted border-2 cursor-pointer rounded-lg">
            <h1 className="text-5xl">
              <BsImage />
            </h1>
            <p>Processed image</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
