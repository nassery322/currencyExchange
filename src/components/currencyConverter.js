import React, { useState } from 'react';
import Convert from './Convert';
import './currencyConverter.css'
import From from './From';
import To from './To';
const CurrencyConverter = () => {
    const [results, setResults] = useState(null);
    const [exchangeFrom, setExchangeFrom] = useState(null);
    const [exchangeTo, setExchangeTo] = useState(null);

    const [error, setError] = useState(null);

    const myHeaders = new Headers();
    myHeaders.append("apikey", "YWIq6Ms772WTQR3p0fF28YXZAGxnMTCF");

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    const handleConvert = async (amount) => {


        if (exchangeFrom && exchangeTo) {
            setError(null)
            const response = await fetch(`https://api.apilayer.com/currency_data/convert?to=${exchangeTo}&from=${exchangeFrom}&amount=${amount}`, requestOptions);

            const data = await response.json()
            const result = data.result;
            setResults(result.toFixed(4))
        } else {
            if (!exchangeFrom) {
                setError('please select the currency you want to exchange from!')
            }
            if (!exchangeTo) {
                setError('please select the currency you want to exchange to!')
            }
        }

    }

    function fromHandler(e) {
        setError(null)
        setExchangeFrom(e)
    }
    function toHandler(e) {
        setError(null)
        setExchangeTo(e)
    }
    return (
        <div className='currency-converter'>
            <From onChange={fromHandler} />
            <To onChange={toHandler} />
            <Convert onConvert={handleConvert} onConverted={results} sideData={exchangeFrom} sideData2={exchangeTo} />
            {error && <p className='error'>{error}</p>}
        </div>
    );
};

export default CurrencyConverter;
