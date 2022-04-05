import React, { Component } from "react";
import logo from '../../src/assets/img/Logo.svg'
import user from '../../src/assets/img/User.svg'
import Edit from '../../src/assets/img/editar.svg'
import Exc from '../../src/assets/img/excluir.svg'
import Add from '../../src/assets/img/Add.svg'
import '../../src/styles/listaUsuario.css'
import { Link } from "react-router-dom";


export default class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaUsuario: [],
            nome: '',
            email: '',
            tipoUsuario: '',
        }
    }

    buscarUsuarios = () => {
        fetch('http://localhost:5000/api/Usuarios')

            .then(resposta => resposta.json())

            .then(dados => this.setState({ listaUsuario: dados }))
    }


    componentDidMount() {
        this.buscarUsuarios()
    }


    render() {


        return (
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

                    <table className='tabela'>
                        <thead className='labels'>
                            <tr >
                                <th>Id</th>
                                <th>Usuário</th>
                                <th>Email</th>
                                <th>Tipo de Usuário</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody className='icones'>
                            {this.state.listaUsuario.map((usuario) => {
                                return (
                                    <tr key={usuario.idUsuario}>
                                        <td>{usuario.idUsuario}</td>
                                        <td>{usuario.nomeUsuario}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.idTipoUsuario}</td>
                                        <div className='funcoes'>
                                            <button type='button'>
                                                <img src={Edit}></img>
                                            </button>
                                            <button type='button'>
                                                <img src={Exc}></img>
                                            </button>
                                        </div>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    {/* <div>
                        <img id='button' src={Add} onClick={Redirect} ></img>
                    </div> */}

                    <Link to='/cadastro'>
                        <img id='button' src={Add} />
                    </Link>


                </main>
            </body>
        );
    }
};