import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grid() {
    return (
      <div >
        {/*--------------------Grid Layout-------------------------*/}
        <Container className="Main-Layout">
           
            <Row className="Row1" xs={1} md={2}>
                <Col className='Row1-Col1'><h1>A</h1></Col>
                <Col className='Row1-Col2'><h1>B</h1></Col>   
            </Row>
            
            <Row className="Row2" xs={1} md={2}>
                <Col className='Row2-Col1'xs={12} md={4}>
                    <Row className='Row2-Col1-Row1' xs={1} md={2}><h1>C</h1></Row>
                    <Row className='Row2-Col1-Row2' xs={1} md={2}><h1>E</h1></Row>
                </Col>
                <Col className='Row2-Col2' xs={12} md={8}>
                    <Row className='Row2-Col2-Row1' xs={8} md={2}><h1>D</h1></Row>
                    <Row className="Row2-Col2-Row2" xs={12} md={2}>
                        <Col className='Row2-Col2-Row2-Col1'><h1>F</h1> </Col>
                        <Col className='Row2-Col2-Row2-Col2'><h1>G</h1></Col>   
                    </Row> 
                </Col> 
            </Row> 
               
        </Container>


      </div>
    );
  }
  
  export default Grid;