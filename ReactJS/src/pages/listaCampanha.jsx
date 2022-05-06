import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../src/styles/listaCampanha.css';
import Curso from '../../src/assets/img/reparoComputadores.png'

export default class Campanha extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaCampanha: [],
            idUsuario: '1',
            nomeCampanha: '',
            dataInicio: new Date(),
            dataFim: new Date(),
            descricao: '',
            arquivo: ''
        }
    };


    buscarCampanhasAtivas = () => {
        fetch('http://localhost:5000/api/Campanhas/AtivoList')

            .then(resposta => resposta.json())

            .then(dados => this.setState({ listaCampanha: dados }))
    };

    componentDidMount() {
        this.buscarCampanhasAtivas()
    }

    render() {
        return (
            <body>
                <main>
                    <section className="imgCampanha">
                    {this.state.listaCampanha.map((camapanha) => {
                            return (
                                <img className="imgCurso" src={camapanha.arquivo}></img>
                            )
                        })}
                    </section>

                    <section className="infoCampanha">

                        {this.state.listaCampanha.map((camapanha) => {
                            return (
                                <div className="divCamp">
                                    <h2>{camapanha.nomeCampanha}</h2>
                                    <p>{camapanha.descricao}</p>
                                </div>
                            )
                        })}


                        {/* {this.state.listaCampanha.map((camapnha) => {
                            return(

                                    <h2>{camapnha.nomeCampanha}</h2>
                                
                            )
                        })} */}

                    </section>

                </main>
            </body>
        );
    }

}