import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Lojas from './pages/Lojas'
import Contato from './pages/Contato'

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/produtos' component={Produtos} />
        <Route path='/lojas' component={Lojas} />
        <Route path='/contato' component={Contato} />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes