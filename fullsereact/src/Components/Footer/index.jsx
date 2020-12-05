import cardamex from '../../img/cardamex.png'
import carddiscover from '../../img/carddiscover.png'
import cardJCB from '../../img/cardJCB.png'
import cardVisa from '../../img/cardVisa.png'
import paypal from '../../img/paypal.png'
import master from '../../img/master.png'
import bit from '../../img/bit.png'

import './Footer.css';

function Footer(){
  return (
    <>
    <footer>    
      <img  width="50px" src={cardamex} alt="" />
      <img width="50px" src={carddiscover} alt="" />
      <img  width="50px" src={cardJCB} alt="" />
      <img  width="50px" src={cardVisa} alt="" />    
      <img  width="50px" src={paypal} alt="" />
      <img  width="50px" src={master} alt="" />
      <img  width="41px" src={bit} alt="" />
      <br />
      Todos os direitos reservados &copy;Recode Pro 2020
      <br />
      Desenvolvido por Suhailah Moraes
    </footer>
    </>

  )
}

export default Footer;