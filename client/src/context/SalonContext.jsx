import { createContext, useContext } from 'react';
import { menContent } from '../data/men.js';
import { womenContent } from '../data/women.js';

const SalonContext = createContext(menContent);

export function SalonProvider({ world, children }) {
  const content = world === 'women' ? womenContent : menContent;
  return <SalonContext.Provider value={content}>{children}</SalonContext.Provider>;
}

export function useSalon() {
  return useContext(SalonContext);
}
