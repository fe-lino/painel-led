import React, { Component } from "react";
import logo from '../../src/assets/img/Logo.svg'
import user from '../../src/assets/img/User.svg'
import Edit from '../../src/assets/img/editar.svg'
import Exc from '../../src/assets/img/excluir.svg'
import Add from '../../src/assets/img/Add.svg'
import '../../src/styles/listaUsuario.css'
import { Link } from "react-router-dom";


export default class Cadastro extends Component {

    constructor(props){
        super(props);
        this.state = {
            listaUsuario : [ {idUsuario : 1, nome : 'Juscelino', email :'teste@teste.com', senha :'12345678'} ],
            nome : '',
            email : '',
            senha : '',
        }
    }

    buscarUsuarios = () => {
        fetch('')
    }

    componentDidMount(){
        this.buscarUsuarios()
    }
 

    render(){

   
        return(
            <body className='body'>
                <header className='container'>
                    <div className='logoTexto'>
                        <h1>Configurando Painel</h1>
                        <img src={logo}></img>
                    </div>
                    <img src={user}></img>
                </header>
    
                <main>
                    <div className='titulo'>
                        <h2>Usuários</h2>
                    </div>
                    
                    <section className='tabela'>
                        <table className='labels'>
                            <tr>Id</tr>
                            <tr>Usuário</tr>
                            <tr>Email</tr>
                            <tr>Tipo de Usuário</tr>
                            <tr>Ações</tr>
                        </table>
                        <table className='icones'>
                            <tr>{this.state.nome}</tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                            
                            <div className='funcoes'>
                            <button type='button'>
                            <img src={Edit}></img>
                            </button>
                            <button type='button'>
                            <img src={Exc}></img>
                            </button>
                            </div>
                        </table>
                    </section>
    
                    {/* <div>
                        <img id='button' src={Add} onClick={Redirect} ></img>
                    </div> */}
    
                    <Link to='/cadastro'>
                        <img id='button' src={Add}/>
                    </Link>
    
                    
                </main>
            </body>
        );
     }
};