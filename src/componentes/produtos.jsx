import React from 'react';

export default function Produtos(props){
    const prod = [
        {
            marca:"Apple",
            preco: 5000,
            modelo:"iPhone X",
            img: 'iphone11.png'
        },
        {
            marca:"Motorola",
            preco: 700,
            modelo:"Moto G Plus",
            img:"motog6.png"
        },
        {
            marca:"LG",
            preco:900,
            modelo:"K12+",
            img: "lgk12plus.png"
        },

        {
            marca:"Sansung",
            preco:1000,
            modelo:"A10",
            img: "a10.png"
        },
        {
            marca:"Lenovo",
            preco:1010,
            modelo:"Lenovo Phone",
            img: "lenovo.png"
        }
        
    ];

    return(
        prod.map((produt) =>
            <div style={{display:'inline-block'}}>
                <div className="card" style={{width:'300px', height: '500px',margin:'30px',backgroundColor:'#F9D2D2'}}>
                        <img className="card-img-top" src={require('./' + produt.img)} style= {{maxWidth:'300px', maxHeight:'500px'}}/>
                            <div className="card-body">
                                <h5 className="card-title">{produt.marca} - {produt.modelo}</h5>
                                <p className="card-text">R$: {produt.preco},00</p>
                                <a href="#" className="btn btn-secondary">Detalhes</a>
                            </div>
                </div>
            </div>                
            )
        
    );
}