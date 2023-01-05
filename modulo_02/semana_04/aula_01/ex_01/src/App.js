import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [image, setImage] = useState("");

  useEffect(() => {
    const promise = axios.get("https://dog.ceo/api/breeds/image/random");
    promise.then(res => setImage(res.data.message)).catch(err => alert(err.response.data.message));
  }, []);

  return (
    <div className="view">
      <div className="image">
        {image ? <img src={image} alt="Catioro fofíneo" /> : "Carregando imagem..."}
      </div>
    </div>
  );
}
