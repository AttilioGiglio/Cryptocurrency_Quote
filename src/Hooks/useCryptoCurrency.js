import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';


const useCryptoCurrency = (label, stateInicial, opciones) => {

    const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 1rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`


    // State de custom Hook
    const [state, setState] = useState(stateInicial);

    const SelectCrypto = () => (
        <Fragment>
        <Label>{label}</Label>
        <Select onChange={e=> setState(e.target.value)} value={state} >
            {/* {opciones.map(opcion => (
                 <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
            ))} */}
        </Select>
        </Fragment>
    );

    // Retornar state, interfaz y fn que modifica le state
    return [state, SelectCrypto, setState]
}

export default useCryptoCurrency