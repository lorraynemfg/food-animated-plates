import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import folha from "./assets/sheets.png";
import graos from "./assets/graos.png";
import hamburguer from "./assets/hamburguer.svg";
import lupa from "./assets/lupa.svg";
import plates from "./assets/plates.png";
import order from "./assets/order.svg";
import arrow from "./assets/arrow.svg";
import OutlinedCard from "./componets/card";
import CardComida from './componets/CardLista';
import comida3 from "./assets/comida1.png";
import comida4 from "./assets/comida2.svg";
import comida1 from "./assets/comida3.svg";
import comida2 from "./assets/comida4.svg";
import { gsap } from 'gsap';

const platesName = ["Classic Chicken", "Chicken Massala", "Royal Ceab", 'Italian Fish']
const platesNameUP = ["CLASSIC CHICKEN", "CHICKEN MASSALA", "ROYAL CRAB", "ITALIAN FISH"];

function App() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [name, setName] = useState(platesNameUP[0].split(' '));
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  const handleCardClick = (index) => {
    if (selectedCardIndex === index) {
      return;
    }
    setName(platesNameUP[index].split(' '))
    setSelectedCardIndex(index);
    animateSlide();
  };

  const animateSlide = () => {
    gsap.fromTo(
      [h2Ref.current, h1Ref.current],
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  };

  useEffect(() => {
    const calculateRotation = () => {
      const rotationAmount = selectedCardIndex * 90;
      gsap.to(".plates", { rotation: rotationAmount, duration: 1.5 });
    };

    calculateRotation();
  }, [selectedCardIndex]);

  return (
    <>
      <img src={folha} alt="folha maior" className='folha' />
      <img src={graos} alt="" className='graos' />
      <main className="vidro">
        <header>
          <img src={lupa} alt="" />
          <img src={hamburguer} alt="" />
        </header>
        <section>
          <img src={plates} alt="" className='plates' />
          <div className="text">
            <p>#1 Most loved dish</p>
            <h2 ref={h2Ref}>{name[1]}</h2>
            <h1 ref={h1Ref}>{name[0]}</h1>
            <div className="btns">
              <div>
                <img src={arrow} alt="" />
                <strong>Play Video</strong>
              </div>
              <div>
                <img src={order} alt="" />
                <strong className='order-food'>Order Food</strong>
              </div>
            </div>
          </div>
          <div className="card">
            <OutlinedCard name={name} />
          </div>
        </section>
        <footer>
          <CardComida
            onClick={() => handleCardClick(0)}
            imageName={comida1}
            plateName={platesName[0].split(' ')}
            isSelected={selectedCardIndex === 0}
            id="card-0"
          />
          <CardComida
            onClick={() => handleCardClick(1)}
            imageName={comida2}
            plateName={platesName[1].split(' ')}
            isSelected={selectedCardIndex === 1}
            id="card-1"
          />
          <CardComida
            onClick={() => handleCardClick(2)}
            imageName={comida3}
            plateName={platesName[2].split(' ')}
            isSelected={selectedCardIndex === 2}
            id="card-2"
          />
          <CardComida
            onClick={() => handleCardClick(3)}
            imageName={comida4}
            plateName={platesName[3].split(' ')}
            isSelected={selectedCardIndex === 3}
            id="card-3"
          />
        </footer>
      </main>
    </>
  );
}

export default App;
