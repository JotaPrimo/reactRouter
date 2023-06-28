// 2 - links com react router
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFecth";

import "./Home.css";

const Home = () => {
  // 3 - carretgamento de dados
  const URL = "http://localhost:3000/products";

  const { data: items, loading, error } = useFetch(URL);

  return (
    <div>
      <h1>Home</h1>
      {/** validacao para erros */}
      {error && <p>{error}</p>}
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$ {item.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
