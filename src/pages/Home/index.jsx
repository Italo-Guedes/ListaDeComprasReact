import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { AddButton } from './styles'

function Home() {
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()

  function cliqueiNoBotao() {
    //console.log(v4())
    setProdutos([
      {
        id: v4(),
        nome: inputRef.current.value
      },
      ...produtos])
      //inputRef.current.value = ''
  }

  function deletarProduto(id) {
    setProdutos(produtos.filter(produto => produto.id !== id))
  }


  return (
    <div>
      <h1>Lista de Compras</h1>
      <input placeholder="produto..." ref={inputRef} />
      <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>

      {
        produtos.map((produto) => (
          <div key={produto.id}>
            <p>{produto.nome}</p>
            <button onClick={() => deletarProduto(produto.id)}>🗑️</button>
          </div>
        ))
      }
      <p></p>
    </div>
  )
}

export default Home
