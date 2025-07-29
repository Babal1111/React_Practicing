import { createContext, useState } from "react";

const ThemeContext = createContext('theme'); // default value, will be overwritten

export function ThemeProvider({ children }) {
  const [name, setName] = useState(null);
  console.log(props);
  return (
    <ThemeContext.Provider value={[name, setName]}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
