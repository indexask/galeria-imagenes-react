import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = ({link, titulo, descripcion} ) =>{
    return(
        <Card className='tarjetas' style={{ width: '20rem' }}>
      <Card.Img variant="top" src={link} />
      <Card.Body className='bodycard'>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
}

export default Cards;