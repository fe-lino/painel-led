import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../src/styles/listaCampanha.css';
import Curso from '../../src/assets/img/reparoComputadores.png'

export default class Campanha extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaCampanha: [], 

            idUsuario: '',
            nomeCampanha: '',
            dataInicio: new Date(),
            dataFim: new Date(),
            descricao: '',
            arquivo: ''
        }
    };


    buscarCampanhasAtivas = () => {
        fetch('https://tccbackend.azurewebsites.net/api/Campanhas/AtivoList')

            .then(resposta => resposta.json())

            .then(dados => this.setState({ listaCampanha: dados }))
    };

    componentDidMount() {
        this.buscarCampanhasAtivas()
    }

    render() {
        return (
            <body>
                <main className="mainCampanha">
                    <section className="imgCampanha">
                        
                    {this.state.listaCampanha.map((campanha) => {
                        console.log(campanha.arquivo)
                            return (
                                
                                    <img classname="imgCurso"src={"https://tccbackend.azurewebsites.net/StaticFiles/"+ campanha.arquivo}/>
                               
                            )
                        })}
                    </section>

                    <section className="infoCampanha">

                        {this.state.listaCampanha.map((campanha) => {
                            return (
                                <div className="divCamp">
                                    <h2>{campanha.nomeCampanha}</h2>
                                    <p>{campanha.descricao}</p>
                                </div>
                            )
                        })}

                    </section>

                </main>
            </body>
        );
    }

}