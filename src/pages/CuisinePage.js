import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const CuisinePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold mb-4">Indian Cuisine</h1>
      <p className="text-xl text-gray-600">
        Indian cuisine is diverse, with a rich variety of dishes influenced by geography, history, and culture.
        From spicy curries to savory snacks, Indian food is known for its bold flavors and aromatic spices.
      </p>
      <p className="text-lg mt-4 text-gray-600">
        Popular dishes include biryani, dosa, samosas, butter chicken, and masala chai. The use of spices such as 
        turmeric, cumin, coriander, and garam masala make the cuisine unique and delicious.
      </p>

      {/* Key Indian Dishes */}
      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Popular Indian Dishes</h2>
        <p className="text-lg text-gray-700">
          Indian cuisine offers a wide array of dishes that are loved worldwide. Here are some popular dishes you must try:
        </p>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-700">
          <li><strong>Biryani:</strong> A fragrant rice dish cooked with meat (chicken, mutton, or beef) and spices like saffron, cloves, and cinnamon. It is a one-pot meal often served with raita or salan.</li>
          <li><strong>Dosa:</strong> A crispy, thin pancake made from fermented rice and lentil batter. It is often served with sambhar (a spicy lentil soup) and coconut chutney.</li>
          <li><strong>Samosas:</strong> A popular snack made of a crispy pastry shell filled with spiced potatoes, peas, and sometimes meat. It's commonly served with tamarind chutney.</li>
          <li><strong>Butter Chicken:</strong> A creamy, flavorful chicken dish cooked in a tomato-based gravy, flavored with butter, cream, and aromatic spices. It’s typically paired with naan or rice.</li>
          <li><strong>Masala Chai:</strong> A spiced tea made with a blend of spices like cardamom, ginger, cinnamon, and cloves. It’s often served with biscuits or snacks.</li>
        </ul>
      </section>

      {/* Regional Cuisines */}
      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Regional Indian Cuisines</h2>
        <p className="text-lg text-gray-700">
          India’s diverse regions each have their own unique style of cooking, influenced by local ingredients, climate, and traditions. Here are some of the most famous regional cuisines:
        </p>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-700">
          <li><strong>North Indian Cuisine:</strong> Known for its rich gravies, tandoori dishes, and breads like naan and roti. Some popular dishes include butter chicken, rajma (kidney beans), and aloo paratha (stuffed flatbread).</li>
          <li><strong>South Indian Cuisine:</strong> Famous for rice-based dishes like dosa, idli, and sambhar. Coconut is widely used in cooking, and the food is often more spiced with ingredients like mustard seeds, curry leaves, and tamarind.</li>
          <li><strong>Western Indian Cuisine:</strong> Gujarat, Maharashtra, and Rajasthan each have distinct flavors. Dishes like pav bhaji (spicy vegetable mash served with bread) and dal baati churma (lentils with wheat flour balls) are widely loved in this region.</li>
          <li><strong>Eastern Indian Cuisine:</strong> Bengali cuisine is known for its use of fish, rice, and mustard oil. Macher jhol (fish curry) and shorshe ilish (hilsa fish in mustard sauce) are iconic dishes from the region.</li>
        </ul>
      </section>

      {/* Importance of Spices */}
      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">The Role of Spices in Indian Cuisine</h2>
        <p className="text-lg text-gray-700">
          Spices are the heart and soul of Indian cuisine. They not only enhance the flavor of dishes but also offer numerous health benefits. Some common spices include:
        </p>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-700">
          <li><strong>Turmeric:</strong> Known for its anti-inflammatory properties, turmeric is often used in curries and rice dishes, giving them a vibrant yellow color.</li>
          <li><strong>Cumin:</strong> Cumin seeds add a warm, earthy flavor and are used in tempering dishes like dal, curries, and rice.</li>
          <li><strong>Coriander:</strong> Both the seeds and leaves of coriander are used to enhance flavor in Indian dishes. It adds a citrusy and slightly sweet flavor to food.</li>
          <li><strong>Garam Masala:</strong> A blend of various spices, garam masala is a key ingredient in many Indian dishes, lending warmth, complexity, and depth to the food.</li>
          <li><strong>Cardamom:</strong> A fragrant spice often used in desserts and beverages like masala chai, it adds a sweet and slightly spicy flavor to dishes.</li>
        </ul>
      </section>

      {/* Cultural Significance of Food */}
      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Cultural Significance of Indian Food</h2>
        <p className="text-lg text-gray-700">
          Food plays a central role in Indian culture, where meals are often a time for families to bond and celebrate together. Here's how food is intertwined with Indian culture:
        </p>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-700">
          <li><strong>Celebrations and Festivals:</strong> Food is central to many Indian festivals like Diwali, Eid, and Pongal. Special sweets, snacks, and meals are prepared to mark these occasions.</li>
          <li><strong>Hospitality:</strong> Offering food to guests is a deep-rooted tradition in India, where sharing a meal is seen as an act of kindness and respect.</li>
          <li><strong>Regional Identity:</strong> Different regions have developed distinct cooking styles and food practices, giving each area of India a unique culinary identity.</li>
          <li><strong>Ayurveda:</strong> Indian food is often tied to the principles of Ayurveda, with a focus on balancing the six tastes (sweet, sour, salty, bitter, pungent, and astringent) to promote health and wellness.</li>
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

export default CuisinePage;
