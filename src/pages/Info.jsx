import { useParams } from 'react-router-dom'

const Info = () => {
    const { idProduto } = useParams()

  return (
    <div>
        <h1>Mais informações sobre o produto # {idProduto} </h1>
    </div>
  )
}

export default Info