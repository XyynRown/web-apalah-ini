import React from 'react';

export const TextCard = ({ title, description }) => {
    return (
      <div className="max-w-sm mx-auto overflow-hidden shadow-lg bg-white rounded-lg h-[36rem] flex flex-col justify-center p-6">
        <h2 className="mb-4 text-2xl font-bold text-gray-800 text-center">{title}</h2>
        <p className="text-gray-700 text-center text-sm leading-relaxed">{description}</p>
      </div>
    );
  };
