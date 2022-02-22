import { CoinCard } from "../components/coincard"
import Container from 'react-bootstrap/Container'
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button'
const Homepage = () => {
    let [portfolio, setPortfolio] = useState([
        {
            "Name": "Bitcoin",
            "Ticker": "BTC",
            "Price": "10000",
            "Sentiment": ".076"
        },
        {
            "Name": "Ethereum",
            "Ticker": "ETH",
            "Price": "10000",
            "Sentiment": ".036"
        },
        {
            "Name": "Solana",
            "Ticker": "SOL",
            "Price": "700",
            "Sentiment": ".076"
        },
        {
            "Name": "Doge",
            "Ticker": "DOGE",
            "Price": "2",
            "Sentiment": ".076"
        },
        {
            "Name": "Monero",
            "Ticker": "MNRO",
            "Price": "2303",
            "Sentiment": ".076"
        },
        {
            "Name": "LiteCoin",
            "Ticker": "LTC",
            "Price": ".011",
            "Sentiment": ".303"
        }
    ])
    let [addStock, setAddStock] = useState(false)
    const portfolioMap = portfolio.map((coin) => {
        return (
            <CoinCard Name = {coin['Name']} Price = {coin['Price']} Sentiment = {coin['Sentiment']}/>
        )
    })
    return (
        <div> Homepage
            <h1 className = 'text-white p-3'>Portfolio</h1>
            <Container className ='d-flex'>
            {portfolioMap}
            <Button>Add a Stock</Button>
            </Container>
        </div>
    )
}

export {Homepage}