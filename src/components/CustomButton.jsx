// components/CustomButton.js
import React from 'react';

const CustomButton = ({ children, className }) => {
    return <button className={`${className}`}>{children}</button>;
};

export default CustomButton;
