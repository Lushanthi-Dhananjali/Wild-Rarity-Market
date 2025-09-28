import React from 'react';
import './CSS/RareAnimals.css';
import ani1_img from '../Components/Assest/animal1.png'
import ani2_img from '../Components/Assest/animal2.png'
import ani3_img from '../Components/Assest/animal3.png'
import ani4_img from '../Components/Assest/animal4.png'
import ani5_img from '../Components/Assest/animal5.png'
import ani6_img from '../Components/Assest/animal6.png'
import ani7_img from '../Components/Assest/animal7.png'
import ani8_img from '../Components/Assest/animal8.png'
import ani9_img from '../Components/Assest/animal9.png'
import ani10_img from '../Components/Assest/animal10.png'
import ani11_img from '../Components/Assest/animal11.png'




const rareAnimals = [
  {
    name: "Javan Rhinoceros",
    lifespan: "30–45 years",
    country: "Indonesia (Java Island)",
    population: "~74",
    threats: "Habitat destruction, poaching, low genetic diversity",
    image: ani1_img, // put image URL or import here later
  },
  {
    name: "Amur Leopard",
    lifespan: "10–15 years (wild), up to 20+ (captivity)",
    country: "Russia (Far East), China (NE)",
    population: "~100",
    threats: "Inbreeding, poaching, wildfires",
    image: ani2_img,
  },
  {
    name: "Sumatran Tiger",
    lifespan: "~15–20 years",
    country: "Indonesia (Sumatra)",
    population: "400–600",
    threats: "Deforestation, illegal hunting",
    image: ani3_img,
  },
  {
    name: "Sumatran Rhinoceros",
    lifespan: "~35–40 years",
    country: "Indonesia (Sumatra and Borneo)",
    population: "<100",
    threats: "Habitat fragmentation, poaching",
    image: ani4_img,
  },
  {
    name: "Saola (Asian Unicorn)",
    lifespan: "Estimated ~15–20 years",
    country: "Vietnam, Laos (Annamite Mountains)",
    population: "<250",
    threats: "Snaring, habitat loss",
    image: ani5_img,
  },
  {
    name: "Mountain Gorilla",
    lifespan: "35–40 years",
    country: "Rwanda, Uganda, DRC",
    population: "~1,000",
    threats: "Poaching, war, disease, deforestation",
    image: ani6_img,
  },
  {
    name: "Vaquita (Marine Mammal)",
    lifespan: "~20 years",
    country: "Mexico (Gulf of California)",
    population: "~10",
    threats: "Accidental death in fishing nets",
    image: ani7_img,
  },
  {
    name: "Gobi Bear",
    lifespan: "~20–25 years",
    country: "Mongolia (Gobi Desert)",
    population: "~40",
    threats: "Food scarcity, isolation",
    image: ani8_img,
  },
  {
    name: "Hainan Gibbon",
    lifespan: "~25–30 years",
    country: "China (Hainan Island)",
    population: "~25",
    threats: "Deforestation, very limited breeding groups",
    image: ani9_img,
  },
  {
    name: "Red Slender Loris",
    lifespan: "15–18 years",
    country: "Sri Lanka",
    population: "Unknown (~100 of some subspecies)",
    threats: "Habitat loss, poaching, electrocution",
    image: ani10_img,
  },
  {
    name: "Gilbert’s Potoroo",
    lifespan: "~10 years",
    country: "Australia (Western Australia)",
    population: "~100",
    threats: "Wildfires, small range, low reproduction",
    image: ani11_img,
  }
];

const RareAnimals = () => {
  return (
    <div className="rare-animals-container">
      {rareAnimals.map((animal, index) => (
        <div key={index} className="animal-card">
          <div className="animal-image">
            {animal.image ? (
              <img src={animal.image} alt={animal.name} />
            ) : (
              <div className="image-placeholder">Image Here</div>
            )}
          </div>
          <div className="animal-info">
            <h2>{animal.name}</h2>
            <p><strong>Lifespan:</strong> {animal.lifespan}</p>
            <p><strong>Country:</strong> {animal.country}</p>
            <p><strong>Population:</strong> {animal.population}</p>
            <p><strong>Threats:</strong> {animal.threats}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RareAnimals;
