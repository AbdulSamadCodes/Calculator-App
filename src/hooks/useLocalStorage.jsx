import React from 'react';
import { useState,useEffect } from 'react';

function getSavedValue(key , initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));

  if(!savedValue) return initialValue;

  if(typeof savedValue === 'string') {
    return savedValue.trim();
  }

  return savedValue;
}

function useLocalStorage(key , initialValue) {
  const [ value , setValue ] = useState(() => getSavedValue(key , initialValue)); 

  useEffect(() => {
    localStorage.setItem(key , JSON.stringify(value));
  },[ value ]);

  return [value , setValue];
}

export { useLocalStorage };