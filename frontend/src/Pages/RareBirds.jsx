import React from 'react';
import './CSS/RareBirds.css';
import bir1_img from '../Components/Assest/bird1.png'
import bir2_img from '../Components/Assest/bird2.png'
import bir3_img from '../Components/Assest/bird3.png'
import bir4_img from '../Components/Assest/bird4.png'
import bir5_img from '../Components/Assest/bird5.png'

const rareBirds = [
  {
    name: 'Spoon-billed Sandpiper',
    population: '~200 individuals',
    range: 'Northeastern Russia (breeding), Bangladesh/Myanmar/Thailand (wintering)',
    threats: 'Habitat loss, complicated migration routes',
    image: bir1_img, // Add your image path later
  },
  {
    name: 'Madagascar Pochard',
    population: '~25–30 individuals',
    range: 'Lake Sofia, Northern Madagascar',
    threats: 'Extinct in wild, breeding and reintroduction ongoing',
    image: bir2_img,
  },
  {
    name: 'Sulu Hornbill',
    population: '~27 mature individuals',
    range: 'Sulu Archipelago, Philippines',
    threats: 'Habitat destruction, hunting',
    image: bir3_img,
  },
  {
    name: 'White-rumped Vulture',
    population: '<6,000 mature individuals',
    range: 'South and Southeast Asia',
    threats: 'Diclofenac poisoning',
    image: bir4_img,
  },
  {
    name: 'Bengal Florican',
    population: '<350 adults in South Asia, up to ~1,000 in Southeast Asia',
    range: 'Grasslands of South & Southeast Asia',
    threats: 'Land conversion, agriculture, poaching',
    image: bir5_img,
  },
];

const RareBirds = () => {
  return (
    <div className="rare-birds-container">
      <h2>Rare Birds</h2>
      <div className="rare-birds-list">
        {rareBirds.map((bird, index) => (
          <div key={index} className="rare-bird-card">
            <div className="rare-bird-image">
              {bird.image ? (
                <img src={bird.image} alt={bird.name} />
              ) : (
                <div className="image-placeholder">Image Here</div>
              )}
            </div>
            <h3>{bird.name}</h3>
            <p><strong>Population:</strong> {bird.population}</p>
            <p><strong>Range:</strong> {bird.range}</p>
            <p><strong>Threats:</strong> {bird.threats}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RareBirds;
