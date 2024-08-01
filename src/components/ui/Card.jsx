import React from 'react';

export const Card = ({ children, className }) => {
  return <div className={`bg-white shadow rounded p-4 ${className}`}>{children}</div>;
};

export const CardHeader = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

export const CardContent = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

export const CardFooter = ({ children }) => {
  return <div>{children}</div>;
};

export const CardTitle = ({ children, className }) => {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
};
