import React from 'react';

export default function Cabecalho (props){
        return(
            <div class="container">
                <div class="card">
                    <b><p align="center"><h1>{props.titulo}</h1></p></b>
                </div>
            </div>)
}