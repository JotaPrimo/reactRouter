import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFecth";

const Product = () => {
  // 4 rota dinamica
  const { idProduto } = useParams();

  const URL_API = "http://localhost:3000/products/" + idProduto;

  // 5 carregaento de dado individual
  const { data: product, loading, error } = useFetch(URL_API);

  return (
    <>
      <p>ID do produto : {idProduto} </p>
      {error && <p>Erro : {error} </p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1> {product.name} </h1>
          <p> {product.price} </p>
        </div>
      )}
    </>
  );
};

export default Product;
