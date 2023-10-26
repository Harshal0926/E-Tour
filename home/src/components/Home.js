import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Carosel from './Carosel';
import { Card, Row, Col } from 'react-bootstrap';
import Registration from './Registration';
import { Link } from 'react-router-dom';
import SubSector from './SubSector';


function Home() {
  const [sector, setSector] = useState([]);

  const getTours = () => {
    fetch("http://localhost:8080/tour/sectors")
      .then(response => response.json())
      .then(res => setSector(res));
  }
  useEffect(() => {
    getTours();
    console.log(sector);
    const data = JSON.stringify(sector);
    console.log(data);
  }, []);

  
  return (
    <div>
      <Carosel />
      <br />

      <Row className="justify-content-center">
        {sector.map(sec => (
          <Col key={sec.id} md={4} className="mb-4">
            <Card style={{ width: '18rem' }} className='fcontainer'>
            
              <Card.Img variant="top" src={sec.sectorImgPath} />

              <Card.Body>
              <Link to={"/SubSector/"+sec.sectorId}> {SubSector} 
                <Card.Title>{sec.sectorName}</Card.Title>
                </Link>
                <Card.Text>
                  {sec.sectorinfo}
                </Card.Text>
              </Card.Body>
         
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    
  );

}

export default Home;
