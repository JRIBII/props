import React from 'react';
import Card from 'react-bootstrap/Card';
import "./product.css";
const Product = (props) => {
  return (
    <div className="allCARD" onClick={() => props.handleName(props.name)}>
      <Card className="bg-dark text-white" id='CardCont'>
        <Card.Img className='CardImg' src={props.img} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.profession}</Card.Text>
          <Card.Text>{props.age}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}
Product.defaultProps={
  img: "https://img-4.linternaute.com/JJ0Skx8vB7zmLBWaT9Zevs-N4Cc=/1240x/smart/7ed2862b6c20462fba01314b3d0cb8cc/ccmcms-linternaute/17258928.jpg",
  name: "Default name",
  profession: "Default profession",
  age: "Default age"
}
export default Product