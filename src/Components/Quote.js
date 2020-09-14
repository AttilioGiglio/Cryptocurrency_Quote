import React from 'react'

const Quote = ({result}) => {
    if(Object.keys(result).length === 0) return null;
    console.log(result);
    return (
        <div>
            <p>Daily Price: <span>{result.PRICE}</span></p>
            <p>Highest daily price: <span>{result.HIGHDAY}</span></p>
            <p>Lowest daily price: <span>{result.LOWDAY}</span></p>
            <p>24-hour price change: <span>{result.CHANGEPCT24HOUR}</span></p>
            <p>Last update: <span>{result.LASTUPDATE}</span></p>
        </div>
    )
}

export default Quote
