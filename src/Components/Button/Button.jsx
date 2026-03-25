import React from 'react';

const Button = ({ text, icon, className, alt = "icon" }) => {
  return (
    <button className={className}>
      {text}
      {icon && <img src={icon} className="e-call-icon" alt={alt} />}
    </button>
  );
};

export default Button;