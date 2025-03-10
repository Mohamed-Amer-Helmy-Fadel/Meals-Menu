import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
export const ItemsList = ({itemsData}) => {
  return (
    <Row>
    <Zoom left>
    {
      itemsData.length >= 1 ? (
        itemsData.map((item)=>{
          return(
            <Col sm="12" className="mb-3">
            <Card className="d-flex flex-row " style={{backgroundColor:'#f8F8F8'}}>
              <div>
                <Card.Img className="img-item" variant="top" src={item.image} />
              </div>
              <Card.Body>
    
                  <Card.Title className="d-flex justify-content-between mb-2">
                    <div className="item-title">{item.title}</div>
                    <div className="item-price" >{item.price}</div>
                  </Card.Title>
    
                <Card.Text>
                <div className="item-description">
                  {item.description}
                </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          )
        })
      ) :  <h3 className="text-center"> لا يوجد اصناف</h3>
    }
    </Zoom>
    </Row>
  );
};
export default ItemsList;
