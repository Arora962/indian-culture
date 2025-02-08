import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const FestivalsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-indigo-300 to-yellow-300 p-6">
      <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-4 leading-normal">Festivals of India</h1>
      <p className="text-xl text-gray-600">
        India is known for its vibrant festivals, celebrated throughout the year across different regions. 
        These festivals bring people together, showcasing a blend of culture, traditions, and rituals.
      </p>
      <p className="text-lg mt-4 text-gray-600">
        Some major festivals include Diwali, Holi, Eid, Durga Puja, Ganesh Chaturthi, and more. 
        Each festival is celebrated with joy, music, dance, food, and colorful decorations.
      </p>

      {/* Key Festivals Section */}
      <section className="mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-pink-600 mb-4">Key Festivals of India</h2>
        <p className="text-lg text-gray-700">
          Festivals in India are celebrated with enthusiasm and grandeur. Here are some of the major ones:
        </p>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-700">
          <li><strong>Diwali (Deepavali):</strong> Known as the festival of lights, Diwali symbolizes the triumph of light over darkness and good over evil. It is celebrated with fireworks, sweets, and family gatherings.</li>
          <li><strong>Holi:</strong> The festival of colors, Holi is celebrated with vibrant colors, music, and dance. It marks the arrival of spring and the victory of good over evil.</li>
          <li><strong>Eid:</strong> Eid marks the end of Ramadan, the Islamic holy month of fasting. It is a time for prayers, feasts, and giving to charity.</li>
          <li><strong>Durga Puja:</strong> A major Hindu festival celebrating the victory of Goddess Durga over the demon Mahishasura. It is particularly popular in Bengal, where grand processions and elaborate rituals take place.</li>
          <li><strong>Ganesh Chaturthi:</strong> A celebration of Lord Ganesha's birth, marked by huge processions, cultural events, and the immersion of Ganesha idols in rivers.</li>
        </ul>
      </section>

      {/* Regional Celebrations */}
      <section className="mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-pink-600 mb-4">Regional Celebrations</h2>
        <p className="text-lg text-gray-700">
          Festivals are celebrated with regional variations across India. Here are some festivals that are unique to specific states or regions:
        </p>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-700">
          <li><strong>Onam (Kerala):</strong> Onam is the harvest festival of Kerala, celebrated with feasts, snake boat races, floral decorations, and traditional dances like the "Thiruvathira."</li>
          <li><strong>Pongal (Tamil Nadu):</strong> A four-day harvest festival celebrated with traditional dances, cooking of the Pongal dish, and the worship of farm animals like cows.</li>
          <li><strong>Baisakhi (Punjab):</strong> Celebrated as the harvest festival in Punjab, Baisakhi is marked by religious processions, folk dances like Bhangra, and prayers at gurudwaras.</li>
          <li><strong>Lohri (Punjab, Haryana):</strong> Lohri marks the end of winter and is celebrated with bonfires, dancing, and singing traditional songs.</li>
          <li><strong>Navratri (Across India):</strong> A nine-night festival dedicated to Goddess Durga, celebrated with dance (Garba/Dandiya), fasting, and prayers.</li>
        </ul>
      </section>

      {/* Cultural Importance */}
      <section className="mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-pink-600 mb-4">Cultural Importance of Festivals</h2>
        <p className="text-lg text-gray-700">
          Festivals in India are more than just celebrations; they hold deep cultural, spiritual, and social significance. They:
        </p>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-700">
          <li><strong>Strengthen Family Bonds:</strong> Festivals bring families together, fostering love and unity through shared rituals and celebrations.</li>
          <li><strong>Promote Unity in Diversity:</strong> India’s festivals are celebrated across different communities, transcending regional, linguistic, and religious boundaries, creating a sense of shared identity.</li>
          <li><strong>Preserve Traditions:</strong> Many festivals are rooted in ancient traditions and stories, helping preserve India's rich cultural heritage for future generations.</li>
          <li><strong>Boost the Economy:</strong> Festivals stimulate local economies by driving tourism, sales of goods, and employment in industries related to event management, decoration, and food production.</li>
        </ul>
      </section>

      <div className="mt-6 flex justify-center">
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
