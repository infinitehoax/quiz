import React from 'react';

export const Progress = ({ value, className }) => {
  return (
    <div className={`relative w-full h-4 bg-gray-200 rounded ${className}`}>
      <div
        className="absolute top-0 left-0 h-full bg-blue-500 rounded"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};
