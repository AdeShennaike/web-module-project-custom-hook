import {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage';
import axios from 'axios';

const useDarkMode = (initialValue) => { 
    const [coinData, setCoinData] = useState([]);
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', initialValue);

     useEffect(() => {
        axios
        .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
        )
        .then(res => setCoinData(res.data))
        .catch(err => console.log(err));
    }, []);


    return [darkMode, setDarkMode, coinData]
}

export default useDarkMode;