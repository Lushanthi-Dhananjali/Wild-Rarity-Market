import React from 'react';
import './CSS/About.css';
import animal1 from '../Components/Assest/t-market.png';
import animal2 from '../Components/Assest/animal-market.png';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Wild Rarity Market</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, soluta nobis earum, consectetur nemo perspiciatis praesentium facilis et non repudiandae aut magni, numquam incidunt quod itaque accusantium. Quaerat eaque blanditiis enim et. Possimus provident expedita odio sed quaerat tenetur laudantium autem voluptate, harum fuga! Exercitationem!</p>
      </header>

      <section className="about-intro">
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugiat beatae rem aliquam sapiente expedita possimus voluptatum, vel dolore distinctio.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate facilis, assumenda tempore molestiae fugiat aliquid a accusantium.
        </p>
      </section>

      <section className="about-wildlife">
        <h2>Wild Rare Animals & Birds</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consequuntur error, quis quibusdam numquam enim nobis fugiat, ipsam commodi ea sit corporis, quaerat expedita natus?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, et!
        </p>
      </section>

      <section className="about-market">
        <h2>Market Items</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iusto! Amet ratione ut architecto praesentium. At necessitatibus qui molestiae expedita eligendi maiores voluptatum in.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora veniam numquam veritatis dolor!
        </p>
        <img src={animal1} alt="" />
        <h1>T-shirt</h1>
        <img src={animal2} alt="" />
        <h1>Book</h1>
      </section>
    </div>
  );
};

export default About;
