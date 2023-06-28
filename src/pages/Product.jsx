import { useParams } from "react-router-dom";

const Product = () => {
  // 4 rota dinamica
    const { idProduto } = useParams();

  return <>
    <p>ID do produto : {idProduto} </p>
  </>;
};

export default Product;
