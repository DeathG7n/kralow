import React, {useState, useEffect} from 'react'
import { Container } from './heroStyles'
import axios from 'axios'

export default function Hero() {
  const [coins, setCoins] = useState([])
  const [crypto, setCrypto] = useState([])
  useEffect(()=> {

    axios({
      method: 'get',
      url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(function (response) {
        setCoins(response?.data)
      });
      axios({
        method: 'get',
        url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then(function (response) {
          setCrypto(response?.data)
        });  
  }, [])
  return (
    <Container>
        <div className="hero">
            <div>
              <h1>Kralow Ventures</h1>
              <p>The place where investors meet promising early stage crypto projects!</p>
            </div>
              <div className="btn"> 
                  <a href="#feedback"> Contact Us </a>
              </div>
        </div>
        <div id="marquee">
          <div className="marquee">
              <section>
                {crypto?.map(coin =>{
                  return(
                    <div key={coin?.id}>
                      <span>
                        <img src={coin?.image} alt={coin?.symbol} />
                      </span>
                      <span>
                        <p className='name'>{coin?.name}</p>
                        <p className='name'>{coin?.symbol?.toUpperCase()}</p>
                      </span>
                      <span>
                          <p>${coin?.current_price}</p>
                          <p style={{color: coin?.market_cap_change_percentage_24h?.toString()?.charAt(0) === '-' ? "red" : "green"}}>{coin?.market_cap_change_percentage_24h?.toString()?.substr(0,4)}%</p>
                      </span>
                    </div>
                  )
                })}
              </section>
            </div>

          <div className="arrowdown">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                    <circle cx="32" cy="32" r="31.5" stroke="white"></circle> 
                    <path d="M30.7502 23.75L30.7502 38.7121L25.2932 32.9829C25.0074 32.6829 24.5327 32.6713 24.2327 32.957C23.9331 33.2424 23.9211 33.7171 24.2068 34.0175L30.4393 40.5605C30.7228 40.8436 31.0993 41 31.5002 41C31.9007 41 32.2776 40.8436 32.5734 40.5474L38.7932 34.0171C38.9316 33.872 39.0002 33.686 39.0002 33.5C39.0002 33.302 38.9222 33.104 38.7673 32.9566C38.4673 32.6709 37.9929 32.6825 37.7072 32.9825L32.2502 38.7357L32.2502 23.75C32.2502 23.336 31.9142 23 31.5002 23C31.0862 23 30.7502 23.336 30.7502 23.75Z" fill="white">
                    </path> 
                  </svg>
          </div>
			  </div>
    </Container>
    
  )
}
