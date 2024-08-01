import React from 'react';

export const RadioGroup = ({ children, value, onValueChange }) => {
  const handleChange = (e) => {
    onValueChange(e.target.value);
  };

  return (
    <div onChange={handleChange}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { name: 'radio-group', checked: child.props.value === value });
        }
        return child;
      })}
    </div>
  );
};

export const RadioGroupItem = ({ value, id, name, checked }) => {
  return (
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      className="form-radio"
    />
  );
};
