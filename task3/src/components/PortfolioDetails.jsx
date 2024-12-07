import { Card } from "react-bootstrap";

const PortfolioDetails = (props) => {
    return (
        <Card style={{ width: '300px', margin: '30px auto ',padding:'20px' }} >
            <Card.Title style={{textAlign:'center'}}> Portfolio Details</Card.Title>
            <Card.Body>Stock Symbol:{props.stockDetails.symbol}</Card.Body>
            <Card.Body>Quantity:{props.stockDetails.quantity}</Card.Body>
            <Card.Body>Current Value:{props.stockDetails.price} </Card.Body>
        </Card>)
}

export default PortfolioDetails;