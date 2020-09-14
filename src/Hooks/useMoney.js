import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';


const useMoney = () => {

    const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
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
    const [state, setState] = useState('');

    const Seleccionar = () => (
        <Fragment>
        <label>Moneda</label>
        <select>
            <option value='MXN'>Peso Mexicano</option>
        </select>
        </Fragment>
    );

    // Retornar state, interfaz y fn que modifica le state
    return [state, Seleccionar, setState]
}

export default useMoney
