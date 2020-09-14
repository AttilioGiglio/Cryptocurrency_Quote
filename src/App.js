import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import imagen from './Images/cryptomonedas.png';
import Form from './Components/Form';
import axios from 'axios';
import Quote from './Components/Quote';
import Spinner from './Components/Spinner';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;

function App() {

  const [money, setMoney] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('');
  // state de respuesta de API
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cotizacionCrypto = async () => {
      // evitamos la ejecucion la primera vez
      if (money === '' || cryptoCurrency === '') return;
      // consultar la API para obtener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${money}`
      const resultado = await axios.get(url)
      // mostrar spinner
      setLoading(true);
      // ocultar spinner y mostrar result
      setTimeout(()=>{
        setLoading(false);
      }, 2000)
      setResult(resultado.data.DISPLAY[cryptoCurrency][money])
    }
    cotizacionCrypto()
  }, [money, cryptoCurrency])

  // mostrar spinner o resultado
  const componente = (loading) ? <Spinner /> : <Quote result={result} />

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt='imagen cryptocurrency' />
      </div>
      <div>
        <Heading>Quote cryptocurrency faster than ever!</Heading>
        <Form
          setMoney={setMoney}
          setCryptoCurrency={setCryptoCurrency}
        />
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
