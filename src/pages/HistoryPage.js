import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

// Importing images for sections
import indusImage from "../assets/history/indus.jpg";
import vedicImage from "../assets/history/vedic.jpeg";
import mauryaImage from "../assets/history/maurya.jpg";
import mughalImage from "../assets/history/mughal.jpg";
import modernImage from "../assets/history/modern.jpg";

import chandraguptaImage from "../assets/dynasties/chandra.jpg";  
import ashokaImage from "../assets/dynasties/ashoka.jpg";  
import akbarImage from "../assets/dynasties/akbar.jpg"; 
import tajMahalImage from "../assets/dynasties/taj.jpg"; 
import guptaEmpireImage from "../assets/dynasties/gupta.jpg"; 
import Timeline from "../components/Timeline";

const HistoryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-300 p-6">
      <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-800 mb-6 leading-normal">
        History of India
      </h1>
      <p className="text-xl text-gray-700 text-center mb-8">
        India has a rich and diverse history, from the Indus Valley Civilization to modern-day India.
        Explore the various dynasties, empires, and events that shaped the nation.
      </p>

      {/* Key Historical Periods Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Key Historical Periods</h2>
        <p className="text-lg text-gray-800 mb-4">
          India’s history can be divided into several key periods. Each era contributed to shaping the vibrant nation we know today.
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-800">
          <li>Indus Valley Civilization (3300–1300 BCE)</li>
          <li>Vedic Period (1500–500 BCE)</li>
          <li>Maurya and Gupta Empires (321 BCE–550 CE)</li>
          <li>Medieval Period (600–1200 CE)</li>
          <li>Mughal Empire (1526–1857 CE)</li>
          <li>British Colonial Period (1858–1947 CE)</li>
          <li>Post-Independence Era (1947–Present)</li>
        </ul>
      </section>

      {/* Key Historical Periods Images */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-center text-indigo-700 mb-6">Historical Periods Images</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <img src={indusImage} alt="Indus Valley Civilization" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src={vedicImage} alt="Vedic Period" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src={mauryaImage} alt="Maurya Empire" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src={mughalImage} alt="Mughal Empire" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src={modernImage} alt="Modern India" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
        </div>
      </section>

      {/* Famous Dynasties and Emperors Section */}
      <section className="bg-gradient-to-r from-yellow-300 to-orange-400 p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Famous Dynasties & Emperors</h2>
        <p className="text-lg text-gray-800 mb-4">
          India has seen the rise and fall of numerous influential dynasties. Some of the most notable include the Mauryas, Guptas, and Mughals.
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-800">
          <li>Chandragupta Maurya - Founder of the Maurya Empire</li>
          <li>Ashoka the Great - Promoted Buddhism and peaceful governance</li>
          <li>Gupta Dynasty - Known as the Golden Age of India</li>
          <li>Akbar the Great - Mughal emperor, expanded empire and promoted religious tolerance</li>
          <li>Shah Jahan - Built the Taj Mahal</li>
        </ul>
      </section>

      {/* Famous Dynasties and Emperors Images */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-center text-indigo-700 mb-6">Dynasties & Emperors Images</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <img src={chandraguptaImage} alt="Chandragupta Maurya" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src={ashokaImage} alt="Ashoka the Great" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src={akbarImage} alt="Akbar the Great" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src={tajMahalImage} alt="Taj Mahal by Shah Jahan" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src={guptaEmpireImage} alt="Gupta Empire" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
        </div>
      </section>

      {/* Major Events Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">Major Events in Indian History</h2>
        <p className="text-lg text-gray-800 mb-4">
          India's history is filled with significant events that have shaped the course of its civilization.
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-800">
          <li>The Battle of Kurukshetra (Mahabharata)</li>
          <li>The Rise of the Maurya Empire</li>
          <li>The Golden Age of the Gupta Empire</li>
          <li>The Mughal Conquest of India</li>
          <li>The Indian Rebellion of 1857 (Sepoy Mutiny)</li>
          <li>India’s Independence (1947)</li>
          <li>The Partition of India and Pakistan (1947)</li>
        </ul>
      </section>

      {/* Major Events Images */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-center text-indigo-700 mb-6">Major Events Images</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhi9OKcpyFX3ld65Das91pYjNvv616Il9Ojh7Y4IQKiHDGz6rIO6_f5UChsNlf0Vudb_9Sfn72X6JjOMe2-5giqAJTtdWnQjej2P4O09YIZNAlhwnCpLa33PFlZDX_Q4GFIJKVrjgpxAFg/s400/bg.jpg" alt="Battle of Kurukshetra" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Standard_Mauryan_Empire.png" alt="Rise of Maurya Empire" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src="https://theindosphere.com/wp-content/uploads/2023/09/image-109.png" alt="Golden Age of Gupta Empire" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Asaf_Khan_presenting_spoils_to_Akbar_at_Jaunpur.jpg" alt="Mughal Conquest" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src="https://www.india-a2z.com/images/indian1.png" alt="Indian Independence" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
        </div>
      </section>

      {/* Cultural Contributions Section */}
      <section className="bg-gradient-to-r from-teal-200 to-lime-300 p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold text-purple-600 mb-4">Cultural Contributions</h2>
        <p className="text-lg text-gray-800 mb-4">
          India has made significant contributions to world culture, particularly in the fields of art, literature, science, and philosophy.
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-800">
          <li>The Birth of Yoga and Meditation</li>
          <li>Indian Classical Music and Dance</li>
          <li>Contribution to Mathematics - The Concept of Zero</li>
          <li>Indian Literature - The Mahabharata, Ramayana, and Vedas</li>
          <li>Indian Architecture - Temples, Palaces, and the Taj Mahal</li>
        </ul>
      </section>

      {/* Cultural Contributions Images */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-center text-indigo-700 mb-6">Cultural Contributions Images</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <img src="https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2022/11/21_06_2020-21_06_2020-yoga_divas_20417405_20418628.jpg" alt="Yoga and Meditation" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src="https://muzofreak.com/wp-content/uploads/2020/09/instruments.png" alt="Indian Classical Music" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src="https://indiaforyou.in/wp-content/uploads/2017/12/aryabhatta.jpg" alt="Concept of Zero" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src="https://www.easternbooks.co.uk/indian.jpg" alt="Indian Literature" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
          <img src="https://ihplb.b-cdn.net/wp-content/uploads/2015/11/Akshardham-Temple-New-Delhi.jpg" alt="Indian Architecture" className="w-1/4 md:w-1/6 rounded-lg shadow-lg object-cover"/>
        </div>
      </section>

      <Timeline/>

      {/* Back to Home Button */}
      <div className="mt-6 flex justify-center">
        <Link to="/">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg shadow-lg">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HistoryPage;
