import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

const Quote = ({result}) => {
    if(Object.keys(result).length === 0) return null;
    console.log(result);
    return (
        <ResultadoDiv>
            <Precio>Daily Price: <span>{result.PRICE}</span></Precio>
            <Info>Highest daily price: <span>{result.HIGHDAY}</span></Info>
            <Info>Lowest daily price: <span>{result.LOWDAY}</span></Info>
            <Info>24-hour price change: <span>{result.CHANGEPCT24HOUR}</span></Info>
            <Info>Last update: <span>{result.LASTUPDATE}</span></Info>
        </ResultadoDiv>
    )
}

export default Quote
