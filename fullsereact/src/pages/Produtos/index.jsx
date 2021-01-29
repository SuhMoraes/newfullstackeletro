import {useState, useEffect} from 'react'
import Menu from '../../Components/Menu'
import Footer from '../../Components/Footer'
import './Produtos.css'

function Produtos(){
  const [produtos, setProdutos] = useState([])
  useEffect(function(){
    async function getProdutos(){
      const url = "http://localhost/projeto-react/backend/";
      const response = await fetch(url);
      const dados = await response.json();
      setProdutos(dados)
    }
    getProdutos() 

  },[]
  ) 
  
  return (
    <>
     <Menu/>
      <div className="container-categoria list-group" >
        <h2>Categorias</h2>
        <ul className="lista-categoria">
          <li className="list-group-item">Todos(20)</li>
          <li className="list-group-item" >Console (4)</li>
          <li className="list-group-item">Acessórios (4)</li>
          <li className="list-group-item">Cadeira Gamer (2)</li>
          <li className="list-group-item">Jogos (10)</li>
        </ul>
      </div>
      <div className="produtos-all">
        {
          produtos.map(function(produto){
            return(
              <div key={produto.id} className="produto-item"  id={produto.id}>
                <img src= {`http://localhost/projeto-react/fullsereact/src${produto.imagem}`} style={{width:"200px"}} alt={produto.descricao} />
                <br />
                <p>{produto.descricao}</p>
                  <br />
                <p className="preco">{produto.preco}</p>
                  <br />
                <p className="preco_venda">{produto.preco_venda}</p>
              </div>
            )
          })
        }
      
      </div>
    

     
    <Footer />    
    </>
  )
}

export default Produtos