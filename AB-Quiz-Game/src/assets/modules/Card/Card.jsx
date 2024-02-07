import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './Card.scss';

// import required modules
import { EffectCards } from 'swiper/modules';


// import image
import AB_Card from './../../img/card.png'
import AB_Logo2 from './../../img/au-bureau-logo2.png'

export default function App() {
    const questions = [
      "Quel est mon plus gros défaut ?",
      "Quelle est ma plus grande qualité ? ",
      "Cite 3 choses que tu aimes le plus chez moi  ?",
      "Quel est mon talent spécial ? ",
      "Quelle est la chose que je n’aime pas chez moi ?",
      "Tu deviens invisible pour le prochaine heure, quelle est la première chose que tu fais ?",
      "Si tu pouvais transformer une de tes habitudes quotidiennes en sport olympique, laquelle choisirais-tu ?",
      "Si tu étais un plat, quel type de plat serais-tu et pourquoi ?",
      "Quelle est ta plus grosse bêtise enfant ?",
      "Quelle est la chose la plus étrange que tu collectionnes ?",
      "Si tu pouvais inventer une nouvelle fête, quelle serait-elle et comment la célébrerais-tu ?",
      "Si tu pouvais créer une nouvelle saveur de glace bizarre, quel serait le goût principal ?",
      "Si tu étais un super-héros, quel serait ton superpouvoir inutile mais hilarant ?",
      "Si tu devais passer le reste de ta vie dans un film, lequel choisirais-tu ?",
      "Quelle est la chose la plus folle que tu aies faite pour faire rire quelqu’un ?",
      "Quelle est ma pire technique de drague ?",
      "Comment décrirais-tu ton week-end de rêve ?",
      "Préfères-tu un troisième bras ou un troisième mamelon ?",
      "Qu’est-ce je dis le plus souvent ?",
      "Qu’est-ce que j’aime faire le plus ?",
      "Qu’est-ce je fais quand tu n’es pas là ?",
      "Quelle est mon émission de télé préférée ?",
      "Si je devenais célèbre, ce serait grâce à quoi ?",
      "Quel est l’endroit où je n’aime pas être ?",
      "Si je pouvais aller n’importe où, ce serait où ?",
      "Qui est ma personne préférée ?"
    ];
  
    const [cartesRetournees, setCartesRetournees] = useState(Array(4).fill(false));
  
    const toggleCard = (index) => {
      const nouvelleListe = Array(25).fill(false);
      nouvelleListe[index] = !cartesRetournees[index];
      setCartesRetournees(nouvelleListe);
    };
  
    return (
      <>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map((index) => (
            <SwiperSlide key={index} className={`card ${cartesRetournees[index] ? 'cardshow' : ''}`} onClick={() => toggleCard(index)}>
              <img className='cover' src={AB_Card} alt="" />
              <div className="front">
                <img className='logo' src={AB_Logo2} alt="" />
                <h1 className='question'>{questions[index]}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }