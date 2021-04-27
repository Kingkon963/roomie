import { createContext, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
// import Category from '../interfaces/Category';

export const PropertyContext = createContext(null);

const defaultProperty = {
  img: '',
  size: {
    width: '200',
    height: '200',
  },
  transform: {
    angle: 0,
    mirrorLeft: false,
    mirrorRight: false,
  },

};

export const PropertyProvider = ({ children }: any) => {
  const [property, setProperty]: [any, any] = useState(defaultProperty);

  return (
    <PropertyContext.Provider value={[property, setProperty]}>
      { children }
    </PropertyContext.Provider>
  );
};
