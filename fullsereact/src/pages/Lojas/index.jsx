import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';
import './Lojas.css'

function Lojas(){
  return (
   <>

  <Menu />
        <main>
           <section>
             <h2 className="nossa-loja">Nossas Lojas</h2>
             <hr />
             <div className="lojas">
         
                <div className="loja-end">
                    <h3>Rio de Janeiro</h3>
                    <p>Avenida Presidente Vargas, 5000 </p>
                    <p>10 &ordm; andar</p>
                    <p>Centro</p>
                    <p>(21) 3333-3333</p>
                </div>

                <div className="loja-end">
                    <h3>São Paulo</h3>
                    <p>Avenida Paulista, 395 </p>
                    <p>3 &ordm; andar</p>
                    <p>Jardins</p>
                    <p>(11) 4444-4444</p>
                </div>

                <div className="loja-end">
                    <h3>Santa Catarina</h3>
                    <p>Rua Major &Aacute;vila, 370 </p>
                    <p>Vila Mariana</p>
                    <p>(47) 5555-5555</p>
                </div>           
            </div>
           </section>
        </main>

  <Footer />
  </>  
  )
}

export default Lojas