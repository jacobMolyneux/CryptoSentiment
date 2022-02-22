import Card from 'react-bootstrap/Card'
import {useState} from 'react';

const CoinCard = (props) => {
    return (
        <Card className = 'p-2 bg-dark border-primary'>
            <Card.Title className = 'text-primary'>{props.Name}</Card.Title>
            <Card.Text className = 'text-white'>Price: ${props.Price}</Card.Text>
            <Card.Text className = 'text-white'>Sentiment: {props.Sentiment}</Card.Text>
        </Card>
    )
}

export {CoinCard}