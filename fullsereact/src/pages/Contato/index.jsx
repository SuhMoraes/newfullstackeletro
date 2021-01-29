import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer'
import './Contato.css'

function Contato(){
  return (
    <>
    <Menu />
      <section className="content">

        <div className="contato">
          <h2>Formulário de contato</h2>
          <form className="form" method="POST" action="./contato.php" >
              <input className="field" name="name" placeholder="Nome" type="text" />
              <input className="field" name="email" placeholder="E-mail " type="text" />

              <textarea className="field" name="mesage" placeholder="Digite sua mensagem aqui"></textarea>
              <input type="submit" placeholder="Enviar" />
          </form>
        </div>
    </section>


    <Footer />
    </>
  )
}

export default Contato