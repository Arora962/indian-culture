import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const HistoryPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold mb-4">History of India</h1>
      <p className="text-xl text-gray-600">
        India has a rich and diverse history, from the Indus Valley Civilization to the modern-day.
        Explore the various dynasties, empires, and events that shaped the nation.
      </p>

      {/* Key Historical Periods Section */}
      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Key Historical Periods</h2>
        <p className="text-lg text-gray-700">
          India’s history can be divided into several key periods. From the ancient civilizations
          along the Indus River, to the medieval empires, and finally, the colonial and post-independence
          periods, each era contributed to shaping the vibrant nation we know today.
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li className="text-lg text-gray-700">Indus Valley Civilization (3300–1300 BCE)</li>
          <li className="text-lg text-gray-700">Vedic Period (1500–500 BCE)</li>
          <li className="text-lg text-gray-700">Maurya and Gupta Empires (321 BCE–550 CE)</li>
          <li className="text-lg text-gray-700">Medieval Period (600–1200 CE)</li>
          <li className="text-lg text-gray-700">Mughal Empire (1526–1857 CE)</li>
          <li className="text-lg text-gray-700">British Colonial Period (1858–1947 CE)</li>
          <li className="text-lg text-gray-700">Post-Independence Era (1947–Present)</li>
        </ul>
      </section>

      {/* Famous Dynasties and Emperors Section */}
      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Famous Dynasties & Emperors</h2>
        <p className="text-lg text-gray-700">
          India has seen the rise and fall of numerous influential dynasties. Some of the most notable
          include the Mauryas, the Guptas, and the Mughals, whose rulers made remarkable contributions to
          Indian civilization.
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li className="text-lg text-gray-700">Chandragupta Maurya - Founder of the Maurya Empire</li>
          <li className="text-lg text-gray-700">Ashoka the Great - Promoted Buddhism and peaceful governance</li>
          <li className="text-lg text-gray-700">Gupta Dynasty - Known as the Golden Age of India</li>
          <li className="text-lg text-gray-700">Akbar the Great - Mughal emperor, expanded empire and promoted religious tolerance</li>
          <li className="text-lg text-gray-700">Shah Jahan - Built the Taj Mahal</li>
        </ul>
      </section>

      {/* Major Events Section */}
      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Major Events in Indian History</h2>
        <p className="text-lg text-gray-700">
          India's history is filled with significant events that have shaped the course of its civilization.
          From ancient battles to the struggle for independence, these moments have had a lasting impact on
          the nation's culture and identity.
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li className="text-lg text-gray-700">The Battle of Kurukshetra (Mahabharata)</li>
          <li className="text-lg text-gray-700">The Rise of the Maurya Empire</li>
          <li className="text-lg text-gray-700">The Golden Age of the Gupta Empire</li>
          <li className="text-lg text-gray-700">The Mughal Conquest of India</li>
          <li className="text-lg text-gray-700">The Indian Rebellion of 1857 (Sepoy Mutiny)</li>
          <li className="text-lg text-gray-700">India’s Independence (1947)</li>
          <li className="text-lg text-gray-700">The Partition of India and Pakistan (1947)</li>
        </ul>
      </section>

      {/* Cultural Contributions Section */}
      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Cultural Contributions</h2>
        <p className="text-lg text-gray-700">
          India has made significant contributions to world culture, particularly in the fields of art,
          literature, science, and philosophy. Ancient Indian thinkers like Aryabhata and Chanakya laid the
          foundation for many modern scientific discoveries.
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li className="text-lg text-gray-700">The Birth of Yoga and Meditation</li>
          <li className="text-lg text-gray-700">Indian Classical Music and Dance</li>
          <li className="text-lg text-gray-700">Contribution to Mathematics - The Concept of Zero</li>
          <li className="text-lg text-gray-700">Indian Literature - The Mahabharata, Ramayana, and Vedas</li>
          <li className="text-lg text-gray-700">Indian Architecture - Temples, Palaces, and the Taj Mahal</li>
        </ul>
      </section>

      {/* Timeline Section */}
      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">India's History Timeline</h2>
        <p className="text-lg text-gray-700">
          Below is a timeline of some of the key events and developments in India’s history:
        </p>
        <ul className="list-decimal pl-6 mt-4">
          <li className="text-lg text-gray-700">3300 BCE - The rise of the Indus Valley Civilization</li>
          <li className="text-lg text-gray-700">321 BCE - Chandragupta Maurya establishes the Maurya Empire</li>
          <li className="text-lg text-gray-700">600 CE - Gupta Empire brings the Golden Age of India</li>
          <li className="text-lg text-gray-700">1526 CE - Mughal Empire established by Babur</li>
          <li className="text-lg text-gray-700">1857 CE - The First War of Indian Independence</li>
          <li className="text-lg text-gray-700">1947 CE - India gains independence from British rule</li>
        </ul>
      </section>

      {/* Back to Home Button */}
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

export default HistoryPage;
