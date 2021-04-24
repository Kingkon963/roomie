import { createContext, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import Category from '../interfaces/Category';

export const CategoryContext = createContext(null);

export const CategoryProvider = ({ children }: any) => {
  const [category, setCategory]: [Category, any] = useState(null);

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      { children }
    </CategoryContext.Provider>
  );
};
