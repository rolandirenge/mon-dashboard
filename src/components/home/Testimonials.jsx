import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonials = [
    { name: "Marie Dupont", role: "Étudiante L3", content: "Plateforme intuitive qui facilite le suivi." },
    { name: "Jean Kabongo", role: "Enseignant", content: "Gain de temps considérable pour la saisie des notes." },
    { name: "Sarah Mbuyi", role: "Secrétaire", content: "La gestion des inscriptions n'a jamais été aussi simple." }
  ];

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <p className="text-gray-600 italic mb-4">"{testimonials[index].content}"</p>
        <p className="font-semibold">{testimonials[index].name}</p>
        <p className="text-sm text-gray-500">{testimonials[index].role}</p>
      </div>
      
      <button onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow">
        <FaChevronLeft />
      </button>
      <button onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow">
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Testimonials;