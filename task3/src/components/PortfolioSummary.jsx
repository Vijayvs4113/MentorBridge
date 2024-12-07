import Card from 'react-bootstrap/Card';

const PortfolioSummary = (props) => {
    return (
        <Card style={{width:'300px',margin:'auto', marginTop:'30px'}} id='summary'>
            <Card.Title> Portfolio Summary </Card.Title>
            <Card.Body>Total Portfolio value :${props.details.portfolioValue}</Card.Body>
            <Card.Body>Total Number of Stocks : {props.details.totalNoOfStocks}</Card.Body>
            <Card.Body>Balance: ${props.details.balance} </Card.Body>
        </Card>)
}

export default PortfolioSummary;