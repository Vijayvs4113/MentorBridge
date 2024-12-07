import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TradeStockForm = (props) => {
    // const symbol = props.symbol
    // console.log(symbol);

    const [symbol,setSymbol] = useState()


    const handleSelect =(value) =>{
        setSymbol(value)
        console.log(value)
    }

useEffect(()=>{
setSymbol(props.symbol);
}, [props.symbol])

    return (
        <Form style={{width:'250px',margin:'20px auto', padding:"20px", border:"1px solid black"}} className='tradeform'> 
            <h3>Trade Stock</h3>
            Select Stock Symbol
            <Form.Select  value={symbol}  aria-label="Default select example" onChange={(e) => handleSelect(e.target.value)}>
                <option value="AALP">AALP</option>
                <option value="GOOGL">GOOGL</option>
                <option value="MSFT">MSFT</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{textAlign:'start'}}>
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="quantity" placeholder="eg: 10" />
            </Form.Group>

            <Form.Select aria-label="Default select example"  onChange={(e) => handleSelect(e.target.value)}>
                Select Trade Type
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
            </Form.Select>

            <button type='submit' className='bg-primary mt-3'>submit</button>
        </Form>)
}

export default TradeStockForm;