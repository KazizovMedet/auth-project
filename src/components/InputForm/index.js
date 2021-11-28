import React from 'react';

const InputForm = ({type, className, name, placeholder, value, id, onChange}) => {
    return (
        <input type={type}
               className={className}
               placeholder={placeholder}
               id={id}
               name={name}
               onChange={onChange}
               value={value}
        />
    );
};

export default InputForm;