import React from "react"; // Import Ant Design styles
import { Card } from "antd";
import { FiMail, FiPhone } from "react-icons/fi";

const IDCard = () => {
  return (
    <div className="relative p-0  border-none rounded-xl shadow-lg overflow-hidden bg-white">
      <div className="relative h-48 ">
        <img
          src="/img/id-card.png" // Use the correct path to your image
          alt="Background"
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="relative flex justify-center -mt-16">
        <img
          src="/img/login.jpg" // replace with the actual path to the image
          alt="Shawn Garcia"
          className="w-24 h-24 rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">SHAWN GARCIA</h2>
        <p className="text-gray-600">NURSE</p>
      </div>
      <div className="mt-4 px-4 space-y-2 text-center">
        <p className="text-gray-700">
          <span className="font-bold">ID No: </span>1234567890
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Email: </span>hello@reallygreatsite.com
        </p>
        <p className="text-gray-700 flex items-center">
          <span className="font-bold">Phone No.: </span>+123-456-7890
        </p>
      </div>
      <div className="mt-4 text-center bg-green-800 h-8"></div>
    </div>
  );
};

export default IDCard;
