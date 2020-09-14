import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import useMoney from '../Hooks/useMoney';
import useCryptoCurrency from '../Hooks/useCryptoCurrency';
import axios from 'axios';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`;

const Form = () => {

    // State de listado de criptoMonedas
    const [cryptoList, setCryptoList] = useState([]);

    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'},
        {codigo: 'CLP', nombre: 'Peso Chileno'}
    ]
    
    // utilizar useMoney
    const [state, Seleccionar, setState] = useMoney('Elige tu moneda', '', MONEDAS);

    // utilizar useCriptocurrency
    const [Crypto, SelectCrypto, setCrypto] = useCryptoCurrency('Elige tu criptomoneda', '', cryptoList);


    const APIrequest = async() => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        const resultado = await axios.get(url);
        setCryptoList(resultado.data.Data);
    }

    // Ejecutar llamado a la API
    useEffect(() => {
        APIrequest()
    }, [])

    return (
        <form>
            <Seleccionar />
            <SelectCrypto />
            <Boton type='submit' value='Calculate' />
        </form>
    )
}

export default Form
