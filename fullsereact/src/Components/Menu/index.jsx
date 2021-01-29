import {Link} from 'react-router-dom'
import logo from '../../img/logo.png';
import './Menu.css';

function Menu() {
    return (
    <>
    <nav id="navegacao">
      <Link to="/">
        <img className="logo" src={logo} alt="Ful Stack Eletro" />
      </Link>
        <Link className="menu" to="/">Home</Link>
        <Link className="menu" to="/produtos">Produtos</Link>
        <Link className="menu" to="/contato">Contato</Link>
        <Link className="menu" to="/lojas">Lojas</Link> 
               
    </nav>
    </>
    )
}

export default Menu;