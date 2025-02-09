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

      {/* Key Festivals Images */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-center text-indigo-700 mb-6 mt-8">Key Festivals Images</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <img src="https://as2.ftcdn.net/v2/jpg/09/19/45/05/1000_F_919450553_Am9o9V4qaUCmDTRYv1bW4dEpPDI1KtxA.jpg" alt = "Diwali" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src="https://as2.ftcdn.net/v2/jpg/02/21/83/87/1000_F_221838715_fn2V1qrekDIDk89Kd0YeHEMonl5rAecg.jpg" alt="Holi" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src="https://i0.wp.com/enewsroom.in/wp-content/uploads/2024/04/pngtree-eid-al-fitr-min.jpg" alt="Eid" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src="https://i.pinimg.com/736x/3b/76/46/3b7646ea446510bddd98983dcfdee8db.jpg" alt="Durga Puja" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Lalbaugh_Ganesha.jpg/1200px-Lalbaugh_Ganesha.jpg" alt="Ganesh Chaturthi" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
        </div>
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

      {/* Regional Celebrations Images */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-center text-indigo-700 mb-6 mt-8">Regional Celebrations Images</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <img src="https://www.amarchitrakatha.com/wp-content/uploads/2020/08/03-Onam-865-X-500.jpg" alt="Onam" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src="https://i0.wp.com/vaerorganic.com/wp-content/uploads/2023/01/21918746_PO_37-ai.png" alt="Pongal" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src="https://as1.ftcdn.net/v2/jpg/07/70/61/50/1000_F_770615007_OkTnGdabHfTDu2B0QOtAm9z31eUzaxWE.jpg" alt="Baisakhi" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src="https://as2.ftcdn.net/v2/jpg/11/44/57/73/1000_F_1144577367_7TSn25PFzIsYZ6ihXXbBt52fLv6FWoYf.jpg" alt="Lohri" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src="https://as1.ftcdn.net/v2/jpg/08/89/48/48/1000_F_889484814_gnpra90EQZLgjV3nhqu8NATvgwy5y1Pl.jpg" alt="Navratri" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
        </div>
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
