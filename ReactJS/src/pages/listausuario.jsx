import React, { Component } from "react";
import logo from '../../src/assets/img/Logo.svg'
import user from '../../src/assets/img/User.svg'
import user2 from '../../src/assets/img/User2.svg'
import Edit from '../../src/assets/img/editar.svg'
import Exc from '../../src/assets/img/excluir.svg'
import Add from '../../src/assets/img/Add.svg'
import '../../src/styles/listaUsuario.css'
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default class Listar extends Component {

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
        fetch('https://tccbackend.azurewebsites.net/api/Usuarios/Listar')

            .then(resposta => resposta.json())

            .then(dados => this.setState({ listaUsuario: dados }))
    }

    excluirUsuarios = (usuario) => {
        console.log('O usuario' + usuario.idUsuario + 'foi excluido')
        fetch('https://tccbackend.azurewebsites.net/index.html/api/Usuarios/' + usuario.idUsuario,
            {
                method: 'DELETE'
            })
        window.location.reload(true);
    }
    atualizaEstadoTitulo = async (event) => {
        await this.setState({ nome: event.target.value })
        console.log(this.state.nome)
    };



    componentDidMount() {
        this.buscarUsuarios()

    }


    render() {


        return (
            <body className='body'>
                <header className=' header container'>
                    <div className='logoTexto'>
                        <h1>Configurando Painel</h1>
                        <img src={logo}></img>
                    </div>
                    <img className='user' src={user}></img>
                    <img className='user2' src={user2}></img>
                </header>

                <main>
                    <div className='titulo'>
                        <h2>Usuários</h2>
                    </div>
                    
                    <div className="listaResponsiva">
                    {this.state.listaUsuario.map((usuario) => {
                                return (
                                    <Accordion className="Accordion" >
                            
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>
                                            {usuario.nomeUsuario}
                                            </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="infoResponsivo">
                                            <ul>
                                                <h3>Id</h3>
                                                {usuario.idUsuario}
                                                <h3>Email</h3>
                                                {usuario.email}
                                                <h3>Tipo Usuário</h3>
                                                {usuario.idTipoUsuario}
                                            </ul>
                                            <h3>Ações</h3>
                                            <button className="botaoResp" type='button'
                                                onClick={() => this.excluirUsuarios(usuario)}
                                            >
                                                <img src={Exc}></img>
                                            </button>
                                        </Typography>
                                    </AccordionDetails>
                                    {/* Primeiro nome */}
                                </Accordion>
                                )
                            })}
                        
                    </div>
                    <table className='tabela'>
                        <thead className='labels'>
                            <tr >
                                <th>Id</th>
                                <th>Usuário</th>
                                <th>Email Usuario</th>
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
                                            {/* <button type='button'>
                                                <img src={Edit}></img>
                                            </button> */}
                                            <button type='button'
                                                onClick={() => this.excluirUsuarios(usuario)}
                                            >
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