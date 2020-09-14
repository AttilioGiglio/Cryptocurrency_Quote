import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import useMoney from '../Hooks/useMoney';
import useCryptoCurrency from '../Hooks/useCryptoCurrency';
import axios from 'axios';
import Error from './Error';

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

const Form = ({setMoney, setCryptoCurrency}) => {

    // State de listado de criptoMonedas
    const [cryptoList, setCryptoList] = useState([]);
    const [error, setError] = useState(false);

    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'},
        {codigo: 'CLP', nombre: 'Peso Chileno'}
    ]
    
    // utilizar useMoney
    const [coin, Seleccionar, setCoin] = useMoney('Elige tu moneda', '', MONEDAS);

    // utilizar useCriptocurrency
    const [crypto, SelectCrypto, setCrypto] = useCryptoCurrency('Elige tu criptomoneda', '', cryptoList);


    const APIrequest = async() => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        const resultado = await axios.get(url);
        setCryptoList(resultado.data.Data);
    }

    // Ejecutar llamado a la API
    useEffect(() => {
        APIrequest()
    }, [])

    const cotizarMoneda = (e) => {
        e.preventDefault();
        // validar si ambos campos estan llenos
        if(coin === '' || crypto === ''){
            setError(true);
            return;
        }
        // Pasar los datos al componente principal
        setError(false);
        setMoney(coin);
        setCryptoCurrency(crypto);
    }

    return (
        <form onSubmit={cotizarMoneda} >
            {error ? <Error mensaje='All inputs are required' />: null}
            <Seleccionar />
            <SelectCrypto />
            <Boton type='submit' value='Calculate' />
        </form>
    )
}

export default Form
