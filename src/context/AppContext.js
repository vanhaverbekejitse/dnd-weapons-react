import React, { createContext, useState, useContext } from 'react';
import { light, dark } from '../styles/theme.style';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [spellCasting, setSpellCasting] = useState(0);
  const [theme, setTheme] = useState(light);

  const toggleDarkMode = () => {
    setTheme((currentTheme) => (currentTheme === light ? dark : light));
  };

  const getExtraDamage = (abilityType) => {
    switch (abilityType) {
      case 'Strength':
        return strength;
      case 'Dexterity':
        return dexterity;
      case 'Spell casting':
        return spellCasting;
      case 'Finesse':
        return Math.max(strength, dexterity);
      default:
        return 0;
    }
  };

  return (
    <AppContext.Provider
      value={{
        strength,
        setStrength,
        dexterity,
        setDexterity,
        spellCasting,
        setSpellCasting,
        theme,
        toggleDarkMode,
        getExtraDamage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
