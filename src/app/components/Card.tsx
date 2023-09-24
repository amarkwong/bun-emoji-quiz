'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface CardProps {
  emoji: string;
  image: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ emoji, image, style }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };



  return (
    <div 
      onClick={handleCardClick} 
      className="w-48 h-72" 
      style={{...style, perspective: '1000px' }}
    >
      <div 
        className={`w-full h-full transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}
        style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* Front Side */}
        <div 
          className="absolute w-full h-full flex items-center justify-center text-6xl bg-opacity-60 backdrop-blur-md rounded-lg shadow-xl"
          style={{
            backfaceVisibility: 'hidden', 
            transform: 'rotateY(0deg)', 
            zIndex: isFlipped ? 0 : 1,
            background: 'linear-gradient(45deg, teal, #16b8f3)'
          }}
        >
          {emoji}
        </div>

        {/* Back Side */}
        <div 
          className="absolute w-full h-full bg-white flex items-center justify-center transform rotate-y-180"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', zIndex: isFlipped ? 1 : 0 }}
        >
          <Image src={image} alt="Movie" className="w-full h-full object-cover" width={150} height={226} /> </div>
      </div>
    </div>
  );
};

export default Card;
