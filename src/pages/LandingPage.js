import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import "../styles/bubble.css";
import "../styles/footer.css";

// Landing Page Component with dynamic content
const LandingPage = () => {
  const [cards] = useState([
    {
      title: "History",
      description: "Explore the rich historical legacy of India, from ancient civilizations to modern times.",
      bgColor: "bg-gradient-to-r from-orange-500 to-red-600",
      link: "/history", // Link to History page
    },
    {
      title: "Festivals",
      description: "Dive into the vibrant and diverse festivals celebrated across India.",
      bgColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      link: "/festivals", // Link to Festivals page
    },
    {
      title: "Cuisine",
      description: "Taste the diverse and spicy flavors of Indian cuisine from every region.",
      bgColor: "bg-gradient-to-r from-green-400 to-teal-500",
      link: "/cuisine", // Link to Cuisine page
    },
  ]);

  return (
    <div className="min-h-screen bg-india-doodles p-6">
      <div className="bg-india-head p-6"></div>

      <div className="h-6"></div>

      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 leading-normal">
          Discover Indian Culture & Heritage
        </h1>
        <p className="text-xl mt-4 text-gray-600">
          Explore India's history, festivals, cuisine, and more. Immerse yourself in the diversity and vibrancy.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {cards.map((card, index) => (
          <Link to={card.link} key={index}>
            <Card
              title={card.title}
              description={card.description}
              bgColor={card.bgColor}
              borderColor="border-4 border-black"
            />
          </Link>
        ))}
      </div>

      {/* Message Bubbles */}
      <div className="message-bubble-container">
        {/* Left Side Bubbles */}
        <div className="flex flex-col items-start">
          <div className="message-bubble message-bubble-left">"India runs on Chai!"</div>
          <div className="message-bubble message-bubble-left">"Saree pehenna hai, toh pehen lo!"</div>
          <div className="message-bubble message-bubble-left">"Bhaarat mahan!"</div>
          <div className="message-bubble message-bubble-left">"Yoga se shanti milti hai!"</div>
        </div>
        {/* Right Side Bubbles */}
        <div className="flex flex-col items-end">
          <div className="message-bubble message-bubble-right">"Masala Dosa & Pancakes"</div>
          <div className="message-bubble message-bubble-right">"Work hard, chai hard!"</div>
          <div className="message-bubble message-bubble-right">"Mithai ho toh Gulab Jamun!"</div>
          <div className="message-bubble message-bubble-right">"Biryani = True Love"</div>
        </div>
      </div>

      <div className="text-center mt-6">
        <Link to="/feedback">
          <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
            Give Feedback
          </Button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="text-center">
          <p>&copy; 2025 Indian Culture & Heritage. All rights reserved.</p>
          <p className="text-sm mt-2">Made with love and respect for Indian culture.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
