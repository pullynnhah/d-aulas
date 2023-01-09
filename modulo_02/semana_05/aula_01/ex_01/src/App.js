import { useState, useEffect } from "react";

import { NameContext } from "./contexts/NameContext";
import Banner from "./components/Banner";
import Header from "./components/Header";

export default function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    const newName = prompt("Digite seu nome:");
    setName(newName);
  }, []);

  return (
    <NameContext.Provider value={{ name }}>
      <Header />
      <Banner />
    </NameContext.Provider>
  );
}
