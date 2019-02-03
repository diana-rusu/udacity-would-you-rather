import React from 'react'

const PollRadio = ({options, onChange, selectedValue}) => {
    return (
      <div>
        {options.map((choice, index) => (
          <label key={index}>
          <input type="radio" 
                  name="vote" 
                  value={choice.value} 
                  key={index}
                  checked={selectedValue === choice.value}
                  onChange={(e) => onChange(e.target.value)}/>
                  {choice.text}
          </label>
        ))}  
      </div>
     );
  };