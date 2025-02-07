import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const FestivalsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold mb-4">Festivals of India</h1>
      <p className="text-xl text-gray-600">
        India is known for its vibrant festivals, celebrated throughout the year across different regions. 
        These festivals bring people together, showcasing a blend of culture, traditions, and rituals.
      </p>
      <p className="text-lg mt-4 text-gray-600">
        Some major festivals include Diwali, Holi, Eid, Durga Puja, Ganesh Chaturthi, and more. 
        Each festival is celebrated with joy, music, dance, food, and colorful decorations.
      </p>
      
      {/* Add more content as needed */}
      
      <div className="mt-6">
        <Link to="/">
          <Button className="bg-blue-500 text-white hover:bg-blue-600">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FestivalsPage;
