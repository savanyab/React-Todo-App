import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


class TodoItem extends React.Component {
  render() {
    return (
      <Row className="d-flex justify-content-around">
      <Col sm="6">
        <Card body className="card text-center">
          <CardTitle tag="h4">{this.props.item.name}</CardTitle>
          <CardText>
          {this.props.item.message}
          <br/>
          {this.props.item.createdAt}
          </CardText>
          <div className="cardButton d-flex bd-highlight">
          <Button className="p-2 flex-fill bd-highlight" outline color="info">Edit</Button>
          <Button className="p-2 flex-fill bd-highlight" outline color="danger">Delete</Button>
          </div>
        </Card>
      </Col>
    </Row>
    );

  }
}



export default TodoItem;
