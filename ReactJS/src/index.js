import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cadastro from './pages/cadastro'
import Listausuario from './pages/listausuario.js'
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter , Routes } from 'react-router-dom';


const routing = (

  <BrowserRouter>
    <div>
      <Routes>
        {/* <Route exact path ="/" component={Listausuario}/>  */}
        <Route index element={<Listausuario />} />       
        {/* <Route exact path="/cadastro" component={Cadastro} /> */}
        <Route path="/cadastro" element={<Cadastro />}></Route>
      </Routes>
    </div>
  </BrowserRouter>

)

ReactDOM.render(routing, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
